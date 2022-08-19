import { useUser } from "@auth0/nextjs-auth0";
import MessageScreen from "@sections/MessageScreen";
import Navbar from "@sections/Navbar";
import { CurrentUserProvider } from "@provider/currentUser";
import { Subtitle } from "@styles/common";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import * as styles from "./styles";

export interface NavbarProps {
  children: React.ReactNode;
}

const Layout = ({ children }: NavbarProps) => {
  const router = useRouter();
  const { user, error, isLoading: isUserLoading } = useUser();
  const isRedirectable = router.pathname !== "/auth" && !isUserLoading;

  useEffect(() => {
    if (!user && isRedirectable) {
      router.push("/auth");
    }
  }, [user, isRedirectable, router]);

  const pageContent = (
    <styles.Page>
      <Navbar />
      <styles.MainView>{children}</styles.MainView>
      <styles.Footer>
        <small>Copyright &copy; {new Date().getFullYear()}</small>
      </styles.Footer>
    </styles.Page>
  );
  if (router.pathname === "/auth") return pageContent;

  if (isUserLoading) {
    return <MessageScreen message='Layout: loading...' />;
  }

  if (!user) {
    return (
      <MessageScreen message='Layout: something went wrong, try refreshing...' />
    );
  }

  return (
    <CurrentUserProvider authUser={user}>{pageContent}</CurrentUserProvider>
  );
};

export default Layout;
