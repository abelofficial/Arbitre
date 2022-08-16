import styled from "styled-components";
import { zIndex } from "@styles/theme";

interface DivProps {
  isShowing: boolean;
}

export const Burger = styled.button`
  top: 0.75rem;
  right: 0.75rem;
  transition: transform 300ms ease;
  width: 2.6rem;
  height: 2.6rem;
  position: fixed;
  background-color: transparent;
  z-index: ${zIndex.menuToggleButton};
`;

export const Div = styled.div<DivProps>`
  transform-origin: left;
  transition: transform 500ms ease-in-out;
  height: 0.12rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
  width: calc(100% - 0.8rem);
  left: 0.45rem;
  border-radius: 0.02rem;
  position: absolute;
  :first-child {
    top: 0.75rem;
    ${({ isShowing }) =>
      isShowing &&
      "transform: translateX(0.2rem) translateY(-0.15rem) rotate(45deg);"}
  }
  :last-child {
    bottom: 0.75rem;
    ${({ isShowing }) =>
      isShowing &&
      "transform: translateX(0.2rem) translateY(0.15rem) rotate(-45deg);"}
  }
`;
