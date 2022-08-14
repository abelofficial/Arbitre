import ManageProjectForm from "@components/forms/ManageProjectForm";
import { IProjectFormValues } from "@components/forms/ManageProjectForm/helper";
import Modal from "@components/hocs/Modal";
import Spinner from "@components/Icons/Spinner";
import { Project } from "@prisma/client";
import { trpc } from "@services/trpc";
import { Paragraph, HighlightedText, Button } from "@styles/common";
import { useState } from "react";
import * as styles from "./styles";

export interface ProjectsCardProps {
  project: Project;
}

const ProjectsCard = ({ project }: ProjectsCardProps) => {
  const utils = trpc.useContext();
  const [openModal, setOpenModal] = useState(false);
  const updateProject = trpc.useMutation("projects.update", {
    async onSuccess() {
      return await utils.invalidateQueries(["projects.all"]);
    },
  });

  const updateProjectHandler = async (p: IProjectFormValues) => {
    try {
      await updateProject.mutateAsync({
        id: p.id as string,
        name: p.name,
        description: p.description,
      });
    } catch (e) {}
  };

  return (
    <styles.Card key={project.id}>
      <Paragraph>{project.name}</Paragraph>
      <HighlightedText>{project.description} </HighlightedText>
      <Modal
        actionButton={
          <Button color='green' onClick={() => setOpenModal(true)}>
            {updateProject.isLoading && <Spinner />}
            Update project
          </Button>
        }
        show={openModal}
      >
        <ManageProjectForm
          defaultValues={project}
          isSubmitting={updateProject.isLoading}
          mode='update'
          onClose={() => setOpenModal(false)}
          onSubmitAsync={updateProjectHandler}
        />
      </Modal>
    </styles.Card>
  );
};

export default ProjectsCard;
