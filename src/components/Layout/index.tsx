import { useUser } from "@auth0/nextjs-auth0";
import MessageScreen from "@components/MessageScreen";
import Navbar from "@components/Navbar";
import { Subtitle } from "@styles/common";
import React from "react";
import * as styles from "./styles";

export interface NavbarProps {
  children: React.ReactNode;
}

const Layout = ({ children }: NavbarProps) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <MessageScreen message='loading..' />;

  if (error) return <MessageScreen message={error.message} />;
  return (
    <styles.Page>
      <Navbar />
      <styles.MainView>{children}</styles.MainView>
      <styles.Footer>
        <Subtitle>Copyright &copy; {new Date().getFullYear()}</Subtitle>
      </styles.Footer>
    </styles.Page>
  );
};

export default Layout;
