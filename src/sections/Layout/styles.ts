import { zIndex } from "@styles/theme";
import styled from "styled-components";

export const Page = styled.main`
  position: relative;

  width: 100vw;
  max-width: 100%;
  background: ${({ theme }) => theme.colors.white};
  z-index: ${zIndex.header};
`;

export const Footer = styled.main`
  position: absolute;
  text-align: center;
  bottom: 0;
  left: 0;
  z-index: ${zIndex.header};
  width: 100%;
`;

export const MainView = styled.main`
  position: relative;
  width: 100%;
  padding: 4rem 0rem;
  background-color: transparent;
  z-index: 0;
`;
