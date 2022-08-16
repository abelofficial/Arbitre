import { UserProfile } from "@auth0/nextjs-auth0";
import { trpc } from "@services/trpc";
import { createContext } from "react";
import { IProjectFormValues } from "@components/forms/ManageProjectForm/helper";

export interface DbActionsContextInterface {
  addUserStatus: boolean;
  addProjectStatus: boolean;
  updateProjectStatus: boolean;
  addProjectHandler: (ownerId: string, p: IProjectFormValues) => Promise<void>;
  addUserHandler: (u: UserProfile) => Promise<void>;
  updateProjectHandler: (p: IProjectFormValues) => Promise<void>;
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

  return (
    <DbActionsContext.Provider
      value={{
        addUserStatus,
        addProjectStatus,
        updateProjectStatus,
        addProjectHandler,
        addUserHandler,
        updateProjectHandler,
      }}
    >
      {children}
    </DbActionsContext.Provider>
  );
};
