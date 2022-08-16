import React, { useState, memo } from "react";
import UserProfile from "@sections/UserProfile";
import Link from "next/link";
import BurgerButton from "@components/icons/BurgerButton";
import * as styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { selectDrawer, closeDrawer, openDrawer } from "@store/slices/config";
import FullScreenNavbar from "@sections/FullScreenNavbar";

const NavBar = () => {
  const isDrawerShowing = useSelector(selectDrawer);
  const dispatch = useDispatch();

  const handleContentClick = () => {
    if (isDrawerShowing) return dispatch(closeDrawer());
    dispatch(openDrawer());
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
          <BurgerButton
            isShowing={isDrawerShowing}
            handleClick={handleContentClick}
          />
        </styles.SectionContainer>
      </styles.Nav>
      <FullScreenNavbar />
    </styles.Header>
  );
};

export default memo(NavBar);
