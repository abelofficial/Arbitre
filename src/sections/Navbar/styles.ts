import styled from "styled-components";
import { dimensions, shadows, zIndex } from "@styles/theme";
import { LinkWithUnderline } from "@styles/common";

export const Header = styled.header`
  position: fixed;
  top: 0;
  height: ${dimensions.navbarHeight};
  background: ${({ theme }) => theme.white};
  z-index: ${zIndex.header};
  width: 100%;
  box-shadow: ${({
    theme,
  }) => `0px 2px 1px -1px rgba(${theme.primaryShadow}, 0.2),
      0px 1px 1px 0px rgba(${theme.primaryShadow}, 0.14),
     0px 1px 3px 0px rgba(${theme.primaryShadow}, 0.12)`};
`;

export const Nav = styled.nav`
  padding-left: 1rem;
  padding-right: 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;

  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    backdrop-filter: blur(1rem);
  }
`;

export const LogoContainer = styled.div`
  margin-right: auto;
  flex-shrink: 0;
  z-index: ${zIndex.logo};
`;

export const LogoLink = styled(LinkWithUnderline)`
  width: fit-content;
  padding: 0.5rem 1rem;
  margin: 0 auto;
  display: block;
`;

export const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: "red";
`;
