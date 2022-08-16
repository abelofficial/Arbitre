import UpdateProjectButton from "@components/buttons/UpdateProjectButton";
import ManageProjectForm from "@components/forms/ManageProjectForm";
import { IProjectFormValues } from "@components/forms/ManageProjectForm/helper";
import Modal from "@components/hocs/Modal";
import Spinner from "@components/icons/Spinner";
import { Project } from "@prisma/client";
import {
  DbActionsContextInterface,
  DbActionsContext,
} from "@provider/dbActions";
import { Paragraph, HighlightedText, Button } from "@styles/common";
import { useContext, useState } from "react";
import * as styles from "./styles";

export interface ProjectsCardProps {
  project: Project;
  owner: boolean;
}

const ProjectsCard = ({ project, owner }: ProjectsCardProps) => {
  return (
    <styles.Card key={project.id}>
      <styles.Header>
        {owner && <UpdateProjectButton icon project={project} />}
      </styles.Header>
      <Paragraph>{project.name}</Paragraph>
      <HighlightedText>{project.description} </HighlightedText>
    </styles.Card>
  );
};

export default ProjectsCard;
