import ManageProjectForm from "@components/forms/ManageProjectForm";
import Modal from "@components/hocs/Modal";
import { EditIcon, EditIconProps } from "@components/icons";
import Spinner from "@components/icons/Spinner";
import { Project } from "@prisma/client";
import {
  DbActionsContextInterface,
  DbActionsContext,
} from "@provider/dbActions";
import { trpc } from "@services/trpc";
import { Button } from "@styles/common";
import React, { useContext, useState } from "react";

export interface UpdateProjectButtonProps {
  project: Project;
  icon?: React.ReactNode;
}

const UpdateProjectButton = ({ project, icon }: UpdateProjectButtonProps) => {
  const [openModal, setOpenModal] = useState(false);
  const { updateProjectStatus, updateProjectHandler } =
    useContext<DbActionsContextInterface>(DbActionsContext);

  return (
    <>
      <Modal
        actionButton={
          icon ? (
            <>
              {updateProjectStatus && <Spinner />}
              <EditIcon
                size='normal'
                color='success'
                onClick={() => setOpenModal(true)}
              />
            </>
          ) : (
            <Button color='success' onClick={() => setOpenModal(true)}>
              {updateProjectStatus && <Spinner />}
              Update project
            </Button>
          )
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
    </>
  );
};

export default UpdateProjectButton;
