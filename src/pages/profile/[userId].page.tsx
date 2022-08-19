import AddProjectButton from "@components/buttons/AddProject";
import FollowUserButton from "@components/buttons/FollowUser";
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
  const { currentUser } =
    useContext<CurrentUserContextInterface>(CurrentUserContext);
  const { userId } = router.query as { userId: string };
  const { data: user } = trpc.useQuery(["users.oneById", { id: userId }]);

  const { data: followRequest } = trpc.useQuery([
    "followRequest.allUserFollowers",
    { userId },
  ]);

  if (!user || !followRequest || !currentUser) return <div>Loading...</div>;

  const isFollowing = followRequest.find((fr) => fr.id === currentUser.id);

  return (
    <div>
      <Head>
        <title>Personal development app</title>
        <meta name='description' content='A page to manage your projects.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <styles.Main>
        <ProfileHeader user={user} followers={followRequest.length} />
        <styles.SectionContainer>
          {currentUser.id === user.id ? (
            <AddProjectButton currentUser={currentUser} />
          ) : (
            <FollowUserButton
              currentUserId={currentUser.id}
              userId={user.id}
              following={!!isFollowing}
            />
          )}
        </styles.SectionContainer>
        <ProjectsList currentUser={currentUser} ownerId={user.id} />
      </styles.Main>
    </div>
  );
};

export default ProfilePage;
