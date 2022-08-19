import ProjectsCard from "@components/cards/ProjectsCard";
import MessageScreen from "@sections/MessageScreen";
import { Project, User } from "@prisma/client";
import { trpc } from "@services/trpc";
import { Subtitle } from "@styles/common";
import React, { useContext } from "react";
import * as styles from "./styles";
import {
  CurrentUserContext,
  CurrentUserContextInterface,
} from "@provider/currentUser";
import { ProjectWithOwner } from "@types";

export interface ProjectsListProps {
  ownerId: string;
  currentUser: User;
}

const ProjectsList = ({ ownerId, currentUser }: ProjectsListProps) => {
  const { status, data: projects } = trpc.useQuery([
    "projects.all",
    { ownerId },
  ]);

  if (status === "loading") return <MessageScreen message='loading..' />;

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

export default ProjectsList;
