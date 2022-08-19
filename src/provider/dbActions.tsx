import { UserProfile } from "@auth0/nextjs-auth0";
import { trpc } from "@services/trpc";
import { createContext } from "react";
import { IProjectFormValues } from "@components/forms/ManageProjectForm/helper";
import { IFollowRequestCreateValues, ILikesCreateValues } from "@types";

export interface DbActionsContextInterface {
  addUserStatus: boolean;
  addProjectStatus: boolean;
  updateProjectStatus: boolean;
  likeProjectStatus: boolean;
  followRequestStatus: boolean;
  addProjectHandler: (ownerId: string, p: IProjectFormValues) => Promise<void>;
  addUserHandler: (u: UserProfile) => Promise<void>;
  updateProjectHandler: (p: IProjectFormValues) => Promise<void>;
  toggleProjectLikeHandler: (p: ILikesCreateValues) => Promise<void>;
  followUserHandler: (u: IFollowRequestCreateValues) => Promise<void>;
}

export const DbActionsContext = createContext<DbActionsContextInterface>(
  {} as DbActionsContextInterface
);

export interface DbActionsProviderProps {
  children: React.ReactNode;
}

export const DbActionsProvider = ({ children }: DbActionsProviderProps) => {
  const utils = trpc.useContext();

  const { isLoading: addUserStatus, mutateAsync: addUserCommand } =
    trpc.useMutation("users.add", {
      async onSuccess(newUser) {
        await Promise.all([
          utils.invalidateQueries(["users.all"]),
          utils.invalidateQueries([
            "users.oneByEmail",
            { email: newUser.email },
          ]),
        ]);
      },
    });

  const { isLoading: addProjectStatus, mutateAsync: addProjectCommand } =
    trpc.useMutation("projects.add", {
      async onSuccess() {
        return await utils.invalidateQueries(["projects.all"]);
      },
    });

  const { isLoading: updateProjectStatus, mutateAsync: updateProjectCommand } =
    trpc.useMutation("projects.update", {
      async onSuccess() {
        return await utils.invalidateQueries(["projects.all"]);
      },
    });

  const { isLoading: likeProjectStatus, mutate: toggleProjectLikeCommand } =
    trpc.useMutation("likes.toggleLike", {
      async onSuccess() {
        return await utils.invalidateQueries(["likes.allProjectLikes"]);
      },
    });

  const { isLoading: followRequestStatus, mutate: followRequestCommand } =
    trpc.useMutation("followRequest.toggleFollow", {
      async onSuccess() {
        return await utils.invalidateQueries([
          "followRequest.allUserFollowers",
        ]);
      },
    });

  // Actions ------------------------------------------------------------

  const addUserHandler = async (u: UserProfile) => {
    try {
      await addUserCommand({
        name: u.name as string,
        email: u.email as string,
        picture: u.picture as string,
      });
    } catch (e) {}
  };

  const addProjectHandler = async (ownerId: string, p: IProjectFormValues) => {
    try {
      await addProjectCommand({
        name: p.name,
        description: p.description,
        ownerId: ownerId,
      });
    } catch (e) {}
  };

  const updateProjectHandler = async (p: IProjectFormValues) => {
    try {
      await updateProjectCommand({
        id: p.id as string,
        name: p.name,
        description: p.description,
      });
    } catch (e) {}
  };

  const toggleProjectLikeHandler = async (p: ILikesCreateValues) => {
    toggleProjectLikeCommand(p);
  };

  const followUserHandler = async (u: IFollowRequestCreateValues) => {
    followRequestCommand(u);
  };

  return (
    <DbActionsContext.Provider
      value={{
        addUserStatus,
        addProjectStatus,
        updateProjectStatus,
        likeProjectStatus,
        followRequestStatus,
        addProjectHandler,
        addUserHandler,
        updateProjectHandler,
        toggleProjectLikeHandler,
        followUserHandler,
      }}
    >
      {children}
    </DbActionsContext.Provider>
  );
};
