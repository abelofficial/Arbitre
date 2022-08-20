import ProjectsCard from "@components/cards/ProjectsCard";
import MessageScreen from "@sections/MessageScreen";
import { User } from "@prisma/client";
import { trpc } from "@services/trpc";
import { Subtitle } from "@styles/common";
import React from "react";
import * as styles from "./styles";
import { ProjectWithOwner } from "@types";
import CardSkeleton from "@components/cards/CardSkeleton";
import CardsSkeleton from "../CardsSkeleton";

export interface FeedsListProps {
  currentUser: User;
}

const FeedsList = ({ currentUser }: FeedsListProps) => {
  const { id: ownerId } = currentUser;
  const { status, data: projects } = trpc.useQuery([
    "projects.allFeedsList",
    { ownerId },
  ]);

  if (status === "loading") return <CardsSkeleton />;

  if (!projects || !currentUser || status === "error")
    return <MessageScreen message='Something went wrong' />;

  if (projects.length === 0) {
    return <Subtitle>No projects</Subtitle>;
  }

  return (
    <styles.Container>
      {projects.map((p: ProjectWithOwner) => (
        <ProjectsCard
          key={p.id}
          project={p}
          isOwner={currentUser?.id === p.ownerId}
          user={currentUser}
        />
      ))}
    </styles.Container>
  );
};

export default FeedsList;
