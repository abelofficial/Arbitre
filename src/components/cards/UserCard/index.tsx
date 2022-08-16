import { User } from "@prisma/client";
import { Avatar } from "@sections/UserProfile/styles";
import {
  Paragraph,
  HighlightedText,
  LinkWithUnderline,
  Title,
} from "@styles/common";
import Link from "next/link";
import * as styles from "./styles";

export interface UsersCardProps {
  user: User;
}

const UsersCard = ({ user }: UsersCardProps) => {
  return (
    <styles.Card key={user.id}>
      <>
        <Avatar src={user.picture} width={30} height={30} layout='fixed' />
        <Paragraph>{user.name}</Paragraph>
      </>
      <HighlightedText>{user.email} </HighlightedText>
      <Link href={`/profile/${user.id}`} passHref>
        <LinkWithUnderline href='dummy'>
          <Title>open</Title>
        </LinkWithUnderline>
      </Link>
    </styles.Card>
  );
};

export default UsersCard;
