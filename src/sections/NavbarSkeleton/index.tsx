import Link from "next/link";
import * as styles from "./styles";
import FullScreenNavbar from "@sections/FullScreenNavbar";
import { TextSkeleton } from "@styles/common";

const NavBarSkeleton = () => {
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
          <TextSkeleton width='7rem' />
        </styles.SectionContainer>
      </styles.Nav>
      <FullScreenNavbar />
    </styles.Header>
  );
};

export default NavBarSkeleton;
