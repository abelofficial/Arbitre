import { dimensions, shadows, zIndex } from "@styles/theme";
import styled from "styled-components";

export const Container = styled.dialog`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - ${dimensions.navbarHeight});
  background-color: transparent;
  backdrop-filter: blur(10px);
  z-index: ${zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-top: ${dimensions.navbarHeight};
  color: ${({ theme }) => theme.colors.black};
`;

export const Modal = styled.div`
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  border-radius: ${dimensions.borderRadius};
  width: 100%;
  max-width: 30rem;
  max-height: 100%;
  overflow-y: auto;
  box-shadow: ${shadows.lg};
`;
