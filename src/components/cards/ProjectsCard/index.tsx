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
}

const ProjectsCard = ({ project }: ProjectsCardProps) => {
  const [openModal, setOpenModal] = useState(false);
  const { updateProjectStatus, updateProjectHandler } =
    useContext<DbActionsContextInterface>(DbActionsContext);

  return (
    <styles.Card key={project.id}>
      <Paragraph>{project.name}</Paragraph>
      <HighlightedText>{project.description} </HighlightedText>
      <Modal
        actionButton={
          <Button color='success' onClick={() => setOpenModal(true)}>
            {updateProjectStatus && <Spinner />}
            Update project
          </Button>
        }
        show={openModal}
      >
        <ManageProjectForm
          defaultValues={project}
          isSubmitting={updateProjectStatus}
          mode='update'
          onClose={() => setOpenModal(false)}
          onSubmitAsync={updateProjectHandler}
        />
      </Modal>
    </styles.Card>
  );
};

export default ProjectsCard;
