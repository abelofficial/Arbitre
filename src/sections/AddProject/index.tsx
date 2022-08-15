import ManageProjectForm from "@components/forms/ManageProjectForm";
import { IProjectFormValues } from "@components/forms/ManageProjectForm/helper";
import Modal from "@components/hocs/Modal";
import Spinner from "@components/icons/Spinner";
import ProjectsList from "@components/lists/ProjectsList";
import { User } from "@prisma/client";
import {
  DbActionsContextInterface,
  DbActionsContext,
} from "@provider/dbActions";
import { Button } from "@styles/common";
import React, { useContext, useState } from "react";

export interface AddProjectProps {
  currentUser: User;
}

const AddProject = ({ currentUser }: AddProjectProps) => {
  const [openModal, setOpenModal] = useState(false);
  const { addProjectStatus, addProjectHandler } =
    useContext<DbActionsContextInterface>(DbActionsContext);
  return (
    <>
      <Modal
        actionButton={
          <Button color='green' onClick={() => setOpenModal(true)}>
            {addProjectStatus && <Spinner />}
            Add new project
          </Button>
        }
        show={openModal}
      >
        <ManageProjectForm
          isSubmitting={addProjectStatus}
          mode='create'
          onClose={() => setOpenModal(false)}
          onSubmitAsync={(p: IProjectFormValues) =>
            addProjectHandler(currentUser.id, p)
          }
        />
      </Modal>
      <ProjectsList ownerId={currentUser.id} />
    </>
  );
};

export default AddProject;
