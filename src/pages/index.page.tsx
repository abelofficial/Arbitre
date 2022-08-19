import Head from "next/head";
import * as styles from "./index.styles";
import { NextPageWithLayout } from "@types";
import UsersList from "@components/lists/UsersList";
import FeedsList from "@components/lists/FeedsList";
import {
  CurrentUserContextInterface,
  CurrentUserContext,
} from "@provider/currentUser";
import { useContext } from "react";

const Home: NextPageWithLayout = () => {
  const { currentUser } =
    useContext<CurrentUserContextInterface>(CurrentUserContext);

  return (
    <div>
      <Head>
        <title>Personal development app</title>
        <meta
          name='description'
          content='A personal app to manage reminders, todos, and goals.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <styles.Main>
        {currentUser && <FeedsList currentUser={currentUser} />}
      </styles.Main>
    </div>
  );
};

export default Home;
