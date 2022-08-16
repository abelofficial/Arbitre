import React, { useState, memo } from "react";
import UserProfile from "@sections/UserProfile";
import Link from "next/link";
import BurgerButton from "@components/icons/BurgerButton";
import * as styles from "./styles";

const NavBar = () => {
  const [isContentShowing, setIsContentShowing] = useState(false);

  const handleContentClick = () => {
    setIsContentShowing((state) => !state);
  };

  return (
    <styles.Header>
      <styles.Nav>
        <styles.LogoContainer>
          <Link href='/' passHref>
            <styles.LogoLink href='dummy'>
              <h2>Logo</h2>
            </styles.LogoLink>
          </Link>
        </styles.LogoContainer>
        <styles.SectionContainer>
          <UserProfile />
          <BurgerButton
            isShowing={isContentShowing}
            handleClick={handleContentClick}
          />
        </styles.SectionContainer>
      </styles.Nav>
    </styles.Header>
  );
};

export default memo(NavBar);
