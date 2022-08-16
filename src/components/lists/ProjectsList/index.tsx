import ProjectsCard from "@components/cards/ProjectsCard";
import MessageScreen from "@sections/MessageScreen";
import { Project } from "@prisma/client";
import { trpc } from "@services/trpc";
import { Subtitle } from "@styles/common";
import React, { useContext } from "react";
import * as styles from "./styles";
import {
  CurrentUserContext,
  CurrentUserContextInterface,
} from "@provider/currentUser";

export interface ProjectsListProps {
  ownerId: string;
}

const ProjectsList = ({ ownerId }: ProjectsListProps) => {
  const { currentUser } =
    useContext<CurrentUserContextInterface>(CurrentUserContext);

  const { status, data: projects } = trpc.useQuery([
    "projects.all",
    { ownerId },
  ]);

  if (status === "loading") return <MessageScreen message='loading..' />;

  if (!projects || status === "error")
    return <MessageScreen message='Something went wrong' />;

  if (projects.length === 0) {
    return <Subtitle>No projects</Subtitle>;
  }

  return (
    <styles.Container>
      {projects.map((p: Project) => (
        <ProjectsCard
          key={p.id}
          project={p}
          owner={currentUser?.id === p.ownerId}
        />
      ))}
    </styles.Container>
  );
};

export default ProjectsList;
