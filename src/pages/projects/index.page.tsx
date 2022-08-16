import AuthButton from "@sections/AuthButton";
import Head from "next/head";
import * as styles from "./styles";
import { NextPageWithLayout } from "@types";
import {
  CurrentUserContextInterface,
  CurrentUserContext,
} from "@provider/currentUser";
import { useContext } from "react";
import AddProject from "@sections/AddProject";

const Projects: NextPageWithLayout = () => {
  const { currentUser } =
    useContext<CurrentUserContextInterface>(CurrentUserContext);

  return (
    <div>
      <Head>
        <title>Personal development app</title>
        <meta name='description' content='A page to manage your projects.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <styles.Main>
        <styles.Title>Projects page</styles.Title>
        {currentUser && <AddProject currentUser={currentUser} />}
        <AuthButton />
      </styles.Main>
    </div>
  );
};

export default Projects;
