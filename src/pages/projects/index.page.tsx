import Head from "next/head";
import * as styles from "./styles";
import { NextPageWithLayout, ProjectWithOwner } from "@types";
import {
  CurrentUserContextInterface,
  CurrentUserContext,
} from "@provider/currentUser";
import { useContext } from "react";
import AddProject from "@components/buttons/AddProject";
import FeedsList from "@components/lists/FeedsList";
import { trpc } from "@services/trpc";
import CardsSkeleton from "@components/lists/CardsSkeleton";
import { date } from "zod";

const Projects: NextPageWithLayout = () => {
  const { currentUser } =
    useContext<CurrentUserContextInterface>(CurrentUserContext);
  const { status, data } = trpc.useQuery(["projects.all"]);

  if (status === "loading" || !data) return <CardsSkeleton />;

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
            <FeedsList
              currentUser={currentUser}
              defaultValue={{ status, data: data }}
            />
          </>
        )}
      </styles.Main>
    </div>
  );
};

export default Projects;
