import MessageScreen from "@components/MessageScreen";
import { trpc } from "@services/trpc";
import { HighlightedText, Subtitle, Paragraph } from "@styles/common";
import { formatDateLong } from "@utils/date";
import React from "react";
import * as styles from "./styles";

export interface UsersListProps {
  ownerId: string;
}

const UsersList = ({ ownerId }: UsersListProps) => {
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
    <div>
      {projects.map((project) => (
        <styles.Row key={project.id}>
          <Paragraph>{project.name}</Paragraph>
          <HighlightedText>{project.description} </HighlightedText>
          <HighlightedText>By @{project.owner.name} </HighlightedText>
          <HighlightedText>
            {formatDateLong(new Date(project.createdAt))}
          </HighlightedText>
        </styles.Row>
      ))}
    </div>
  );
};

export default UsersList;
