import { UserProfile } from "@auth0/nextjs-auth0";
import MessageScreen from "@sections/MessageScreen";
import { User } from "@prisma/client";
import { trpc } from "@services/trpc";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect } from "react";
import { DbActionsContextInterface, DbActionsContext } from "./dbActions";
import PageSkeleton from "@sections/PageSkeleton";

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
  const { addUserHandler } =
    useContext<DbActionsContextInterface>(DbActionsContext);

  const email = authUser?.email;
  const { status: currentUserStatus, data: currentUser } = trpc.useQuery(
    ["users.oneByEmail", { email: email as string }],
    { enabled: !!email, refetchOnWindowFocus: false, refetchOnMount: false }
  );

  useEffect(() => {
    const registerNewUser = async () => {
      await addUserHandler(authUser);
      router.push("/");
    };
    if (email && !currentUser && currentUserStatus === "success") {
      registerNewUser();
    }
  }, [email, currentUser, currentUserStatus]);

  if (currentUserStatus === "loading") {
    return <PageSkeleton />;
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
