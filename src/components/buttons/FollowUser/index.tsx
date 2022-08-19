import ManageProjectForm from "@components/forms/ManageProjectForm";
import { IProjectFormValues } from "@components/forms/ManageProjectForm/helper";
import Modal from "@components/hocs/Modal";
import Spinner from "@components/icons/Spinner";
import { User } from "@prisma/client";
import {
  DbActionsContextInterface,
  DbActionsContext,
} from "@provider/dbActions";
import { Button, HighlightedText, Paragraph } from "@styles/common";
import React, { useContext, useState } from "react";

export interface FollowUserButtonProps {
  currentUserId: string;
  userId: string;
  following: boolean;
}

const FollowUserButton = ({
  currentUserId,
  userId,
  following,
}: FollowUserButtonProps) => {
  const [isFollowing, setIsFollowing] = useState(following);
  const { followUserHandler } =
    useContext<DbActionsContextInterface>(DbActionsContext);

  const onClickHandler = () => {
    followUserHandler({ userId: currentUserId, targetUserId: userId });
    setIsFollowing(!isFollowing);
  };

  return (
    <Button color='primary' onClick={onClickHandler}>
      <Paragraph>{isFollowing ? "Unfollow" : "Follow"}</Paragraph>
    </Button>
  );
};

export default FollowUserButton;
