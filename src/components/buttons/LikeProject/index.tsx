import { HeartIcon, LikedHeartIcon } from "@components/icons";
import Spinner from "@components/icons/Spinner";
import { Project, User } from "@prisma/client";
import {
  DbActionsContextInterface,
  DbActionsContext,
} from "@provider/dbActions";
import { HighlightedText } from "@styles/common";
import React, { useContext, useState } from "react";

export interface LikeProjectButtonProps {
  currentUser: User;
  project: Project;
  liked: boolean;
  likes: number;
}

const LikeProjectButton = ({
  currentUser,
  project,
  liked,
  likes,
}: LikeProjectButtonProps) => {
  const [likesCount, setLikesCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(liked);
  const { likeProjectStatus, toggleProjectLikeHandler } =
    useContext<DbActionsContextInterface>(DbActionsContext);

  const onClickHandler = () => {
    toggleProjectLikeHandler({
      projectId: project.id,
      userId: currentUser.id,
    });

    if (isLiked) {
      setLikesCount(likesCount - 1);
      setIsLiked(false);
      return;
    }
    setLikesCount(likesCount + 1);
    setIsLiked(true);
  };

  // if (likeProjectStatus) return <Spinner />;

  const icon = isLiked ? (
    <LikedHeartIcon size='normal' onClick={onClickHandler} />
  ) : (
    <HeartIcon size='normal' onClick={onClickHandler} />
  );

  return (
    <>
      {icon}
      <HighlightedText>{`${likesCount} likes`}</HighlightedText>
    </>
  );
};

export default LikeProjectButton;
