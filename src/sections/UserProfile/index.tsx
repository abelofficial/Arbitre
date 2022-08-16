import {
  CurrentUserContext,
  CurrentUserContextInterface,
} from "@provider/currentUser";
import { HighlightedText, LinkWithUnderline, Title } from "@styles/common";
import Link from "next/link";
import { useContext } from "react";
import * as styles from "./styles";

const UserProfile = () => {
  const { currentUser } =
    useContext<CurrentUserContextInterface>(CurrentUserContext);

  if (!currentUser) {
    return null;
  }

  return (
    <Link href='/profile' passHref>
      <LinkWithUnderline href='dummy'>
        <styles.Container>
          <styles.Avatar
            src={currentUser.picture}
            width='30px'
            height='30px'
            layout='fixed'
          />
          <styles.NameText>{currentUser.name}</styles.NameText>
        </styles.Container>
      </LinkWithUnderline>
    </Link>
  );
};

export default UserProfile;
