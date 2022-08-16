import ProjectsList from "@components/lists/ProjectsList";
import {
  CurrentUserContextInterface,
  CurrentUserContext,
} from "@provider/currentUser";
import ProfileHeader from "@sections/ProfileHeader";
import { NextPageWithLayout } from "@types";
import Head from "next/head";
import React, { useContext } from "react";
import * as styles from "./styles";

const ProfilePage: NextPageWithLayout = () => {
  const { currentUser } =
    useContext<CurrentUserContextInterface>(CurrentUserContext);

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Personal development app</title>
        <meta name='description' content='A page to manage your projects.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <styles.Main>
        <ProfileHeader user={currentUser} />
        <ProjectsList ownerId={currentUser.id} />
      </styles.Main>
    </div>
  );
};

export default ProfilePage;
