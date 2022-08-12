import { User } from "@prisma/client";
import { HighlightedText, Subtitle, Paragraph } from "@styles/common";
import { formatDateLong } from "@utils/date";
import React from "react";
import * as styles from "./styles";

export interface UsersListProps {
  users: User[];
}

const UsersList = ({ users }: UsersListProps) => {
  if (users.length === 0) {
    return <Subtitle>No users</Subtitle>;
  }
  return (
    <div>
      {users.map((user) => (
        <styles.Row key={user.email}>
          <Paragraph>{user.name as string}</Paragraph>
          <HighlightedText>{user.email as string} </HighlightedText>
          <HighlightedText>
            {formatDateLong(new Date(user.createdAt))}
          </HighlightedText>
        </styles.Row>
      ))}
    </div>
  );
};

export default UsersList;
