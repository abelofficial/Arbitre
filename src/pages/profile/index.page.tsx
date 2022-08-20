import CardsSkeleton from "@components/lists/CardsSkeleton";
import ProjectsList from "@components/lists/ProjectsList";
import {
  CurrentUserContextInterface,
  CurrentUserContext,
} from "@provider/currentUser";
import ProfileHeader from "@sections/ProfileHeader";
import { trpc } from "@services/trpc";
import { NextPageWithLayout } from "@types";
import Head from "next/head";
import React, { useContext } from "react";
import * as styles from "./styles";

const ProfilePage: NextPageWithLayout = () => {
  const { currentUser } =
    useContext<CurrentUserContextInterface>(CurrentUserContext);

  const { data: user } = trpc.useQuery(
    ["users.oneById", { id: currentUser?.id as string }],
    {
      enabled: !!currentUser,
    }
  );

  const { data: followRequest } = trpc.useQuery(
    ["followRequest.allUserFollowers", { userId: currentUser?.id as string }],
    {
      enabled: !!currentUser,
    }
  );

  if (!user || !followRequest || !currentUser) return <CardsSkeleton />;

  return (
    <div>
      <Head>
        <title>Personal development app</title>
        <meta name='description' content='A page to manage your projects.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <styles.Main>
        <ProfileHeader user={currentUser} followers={followRequest.length} />
        <ProjectsList currentUser={currentUser} ownerId={currentUser.id} />
      </styles.Main>
    </div>
  );
};

export default ProfilePage;
