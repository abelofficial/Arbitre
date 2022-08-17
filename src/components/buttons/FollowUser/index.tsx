import ManageProjectForm from "@components/forms/ManageProjectForm";
import { IProjectFormValues } from "@components/forms/ManageProjectForm/helper";
import Modal from "@components/hocs/Modal";
import Spinner from "@components/icons/Spinner";
import { User } from "@prisma/client";
import {
  DbActionsContextInterface,
  DbActionsContext,
} from "@provider/dbActions";
import { Button, HighlightedText } from "@styles/common";
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
  const { followRequestStatus, followUserHandler } =
    useContext<DbActionsContextInterface>(DbActionsContext);

  const onClickHandler = () => {
    setIsFollowing(!isFollowing);
    followUserHandler({ userId: currentUserId, targetUserId: userId });
  };

  if (followRequestStatus) return <Spinner />;
  return (
    <Button color='primary' onClick={onClickHandler}>
      <HighlightedText>{isFollowing ? "Unfollow" : "Follow"}</HighlightedText>
    </Button>
  );
};

export default FollowUserButton;
