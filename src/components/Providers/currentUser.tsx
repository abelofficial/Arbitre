import { UserProfile } from "@auth0/nextjs-auth0";
import MessageScreen from "@components/MessageScreen";
import { User } from "@prisma/client";
import { trpc } from "@services/trpc";
import { useRouter } from "next/router";
import { createContext, useEffect } from "react";

export interface CurrentUserContextInterface {
  currentUser: User | undefined;
}

export const CurrentUserContext = createContext<CurrentUserContextInterface>(
  {} as CurrentUserContextInterface
);

export interface CurrentUserProviderProps {
  children: React.ReactNode;
  authUser: UserProfile;
}

export const CurrentUserProvider = ({
  children,
  authUser,
}: CurrentUserProviderProps) => {
  const router = useRouter();
  const utils = trpc.useContext();
  const email = authUser?.email;
  const { status: currentUserStatus, data: currentUser } = trpc.useQuery(
    ["users.oneByEmail", { email: email as string }],
    { enabled: !!email, refetchOnWindowFocus: false, refetchOnMount: false }
  );

  const addUser = trpc.useMutation("users.add", {
    async onSuccess() {
      await utils.invalidateQueries(["users.all"]);
    },
  });

  useEffect(() => {
    const addUserHandler = (newUser: UserProfile) => {
      addUser.mutate({
        name: newUser.name as string,
        email: newUser.email as string,
        picture: newUser.picture as string,
      });
      router.push("/");
    };

    if (email && !currentUser && currentUserStatus === "success") {
      addUserHandler(authUser);
    }
  }, [email, currentUser, currentUserStatus]);

  if (currentUserStatus === "loading") {
    return <MessageScreen message='loadings current..' />;
  }

  if (currentUserStatus === "error") {
    return <MessageScreen message='something went wrong' />;
  }

  return (
    <CurrentUserContext.Provider
      value={{ currentUser: currentUser as User | undefined }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
