import MessageScreen from "@sections/MessageScreen";
import { User } from "@prisma/client";
import { trpc } from "@services/trpc";
import { HighlightedText, Subtitle, Paragraph } from "@styles/common";
import { formatDateLong } from "@utils/date";
import React from "react";
import * as styles from "./styles";
import UsersCard from "@components/cards/UserCard";

const UsersList = () => {
  const { status, error, data: users } = trpc.useQuery(["users.all"]);

  if (status === "loading") return <MessageScreen message='loading..' />;

  if (!users || status === "error")
    return <MessageScreen message='something went wrong.' />;

  if (users.length === 0) {
    return <Subtitle>No users</Subtitle>;
  }
  return (
    <>
      {users.map((user: User) => (
        <styles.Row key={user.email}>
          <UsersCard user={user} />
        </styles.Row>
      ))}
    </>
  );
};

export default UsersList;
