import ManageProjectForm from "@components/forms/ManageProjectForm";
import { IProjectFormValues } from "@components/forms/ManageProjectForm/helper";
import Modal from "@components/hocs/Modal";
import Spinner from "@components/icons/Spinner";
import { User } from "@prisma/client";
import {
  DbActionsContextInterface,
  DbActionsContext,
} from "@provider/dbActions";
import { Button, Paragraph } from "@styles/common";
import React, { useContext, useState } from "react";

export interface AddProjectButtonProps {
  currentUser: User;
}

const AddProjectButton = ({ currentUser }: AddProjectButtonProps) => {
  const [openModal, setOpenModal] = useState(false);
  const { addProjectStatus, addProjectHandler } =
    useContext<DbActionsContextInterface>(DbActionsContext);
  return (
    <>
      <Modal
        actionButton={
          <Button onClick={() => setOpenModal(true)}>
            {addProjectStatus && <Spinner />}
            <Paragraph>Add new project</Paragraph>
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
    </>
  );
};

export default AddProjectButton;
