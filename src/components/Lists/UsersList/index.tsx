import MessageScreen from "@components/MessageScreen";
import { User } from "@prisma/client";
import { trpc } from "@services/trpc";
import { HighlightedText, Subtitle, Paragraph } from "@styles/common";
import { formatDateLong } from "@utils/date";
import React from "react";
import * as styles from "./styles";

const UsersList = () => {
  const { status, error, data: users } = trpc.useQuery(["users.all"]);

  if (status === "loading") return <MessageScreen message='loading..' />;

  if (!users || status === "error")
    return <MessageScreen message='something went wrong.' />;

  if (users.length === 0) {
    return <Subtitle>No users</Subtitle>;
  }
  return (
    <div>
      {users.map((user: User) => (
        <styles.Row key={user.email}>
          <Paragraph>{user.name}</Paragraph>
          <HighlightedText>{user.email} </HighlightedText>
          <HighlightedText>
            {formatDateLong(new Date(user.createdAt))}
          </HighlightedText>
        </styles.Row>
      ))}
    </div>
  );
};

export default UsersList;
