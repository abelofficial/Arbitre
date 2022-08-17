import { HeartIcon, LikedHeartIcon } from "@components/icons";
import Spinner from "@components/icons/Spinner";
import { Project, User } from "@prisma/client";
import {
  DbActionsContextInterface,
  DbActionsContext,
} from "@provider/dbActions";
import React, { useContext, useState } from "react";

export interface LikeProjectButtonProps {
  currentUser: User;
  project: Project;
  isLiked: boolean;
}

const LikeProjectButton = ({
  currentUser,
  project,
  isLiked,
}: LikeProjectButtonProps) => {
  const [liked, setLiked] = useState(isLiked);
  const { likeProjectStatus, likeProjectHandler } =
    useContext<DbActionsContextInterface>(DbActionsContext);

  const onClickHandler = () => {
    likeProjectHandler({
      projectId: project.id,
      userId: currentUser.id,
    });
    setLiked(!liked);
  };

  if (likeProjectStatus) return <Spinner />;

  if (liked) {
    return <LikedHeartIcon size='normal' onClick={onClickHandler} />;
  }
  return <HeartIcon size='normal' onClick={onClickHandler} />;
};

export default LikeProjectButton;
