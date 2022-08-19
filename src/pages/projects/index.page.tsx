import Head from "next/head";
import * as styles from "./styles";
import { NextPageWithLayout } from "@types";
import {
  CurrentUserContextInterface,
  CurrentUserContext,
} from "@provider/currentUser";
import { useContext } from "react";
import AddProject from "@components/buttons/AddProject";
import FeedsList from "@components/lists/FeedsList";

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
        {currentUser && (
          <>
            <AddProject currentUser={currentUser} />
            <FeedsList currentUser={currentUser} />
          </>
        )}
      </styles.Main>
    </div>
  );
};

export default Projects;
