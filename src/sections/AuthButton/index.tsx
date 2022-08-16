import {
  CurrentUserContext,
  CurrentUserContextInterface,
} from "@provider/currentUser";
import { HighlightedText, LinkWithUnderline, Title } from "@styles/common";
import Link from "next/link";
import { useContext } from "react";

const AuthButton = () => {
  const { currentUser } =
    useContext<CurrentUserContextInterface>(CurrentUserContext);

  if (currentUser) {
    return (
      <Link href='/api/auth/logout' passHref>
        <LinkWithUnderline href='dummy'>
          <HighlightedText color='danger'>sign out</HighlightedText>
        </LinkWithUnderline>
      </Link>
    );
  }
  return (
    <Link href='/api/auth/login' passHref>
      <LinkWithUnderline href='dummy'>
        <Title>Log in</Title>
      </LinkWithUnderline>
    </Link>
  );
};

export default AuthButton;
