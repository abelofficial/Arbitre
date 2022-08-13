import { Project, User } from "@prisma/client";
import { HighlightedText, Subtitle, Paragraph } from "@styles/common";
import { ProjectWithOwner } from "@types";
import { formatDateLong } from "@utils/date";
import React from "react";
import * as styles from "./styles";

export interface UsersListProps {
  projects: ProjectWithOwner[];
}

const UsersList = ({ projects }: UsersListProps) => {
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
