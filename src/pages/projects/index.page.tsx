import AuthButton from "@sections/AuthButton";
import Head from "next/head";
import { trpc } from "@services/trpc";
import { Button } from "@styles/common";
import * as styles from "./styles";
import Spinner from "@components/icons/Spinner";
import { NextPageWithLayout } from "@types";
import ProjectsList from "@components/lists/ProjectsList";
import {
  CurrentUserContextInterface,
  CurrentUserContext,
} from "@provider/currentUser";
import { useContext, useState } from "react";
import Modal from "@components/hocs/Modal";
import ManageProjectForm from "@components/forms/ManageProjectForm";
import { IProjectFormValues } from "@components/forms/ManageProjectForm/helper";
import {
  DbActionsContext,
  DbActionsContextInterface,
} from "@provider/dbActions";

const Projects: NextPageWithLayout = () => {
  const [openModal, setOpenModal] = useState(false);
  const { currentUser } =
    useContext<CurrentUserContextInterface>(CurrentUserContext);
  const { addProjectStatus, addProjectHandler } =
    useContext<DbActionsContextInterface>(DbActionsContext);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <styles.Main>
        <styles.Title>Projects page</styles.Title>
        {currentUser && (
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
        )}
        <AuthButton />
      </styles.Main>
    </div>
  );
};

export default Projects;
