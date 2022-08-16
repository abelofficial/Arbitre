import ProjectsList from "@components/lists/ProjectsList";
import {
  CurrentUserContextInterface,
  CurrentUserContext,
} from "@provider/currentUser";
import ProfileHeader from "@sections/ProfileHeader";
import { trpc } from "@services/trpc";
import { NextPageWithLayout } from "@types";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import * as styles from "./styles";

const ProfilePage: NextPageWithLayout = () => {
  const router = useRouter();
  const { userId } = router.query as { userId: string };
  const {
    status,
    data: user,
    error,
  } = trpc.useQuery(["users.oneById", { id: userId }]);

  if (!user || status === "error") return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>Personal development app</title>
        <meta name='description' content='A page to manage your projects.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <styles.Main>
        <ProfileHeader user={user} />
        <ProjectsList ownerId={user.id} />
      </styles.Main>
    </div>
  );
};

export default ProfilePage;
