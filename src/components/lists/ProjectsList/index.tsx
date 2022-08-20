import ProjectsCard from "@components/cards/ProjectsCard";
import MessageScreen from "@sections/MessageScreen";
import { User } from "@prisma/client";
import { trpc } from "@services/trpc";
import { Subtitle } from "@styles/common";
import React from "react";
import * as styles from "./styles";
import { ProjectWithOwner } from "@types";
import CardsSkeleton from "../CardsSkeleton";

export interface ProjectsListProps {
  ownerId: string;
  currentUser: User;
}

const ProjectsList = ({ ownerId, currentUser }: ProjectsListProps) => {
  const { status, data: projects } = trpc.useQuery([
    "projects.findUserProjects",
    { ownerId },
  ]);

  if (status === "loading") return <CardsSkeleton />;

  if (!projects || !currentUser || status === "error")
    return <MessageScreen message='Something went wrong' />;

  if (projects.length === 0) {
    return (
      <styles.EmptyScreen>
        <Subtitle>No projects</Subtitle>
      </styles.EmptyScreen>
    );
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

export default ProjectsList;
