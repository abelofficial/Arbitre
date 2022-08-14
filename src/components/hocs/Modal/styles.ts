import { dimensions, zIndex } from "@styles/theme";
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
  color: ${({ theme }) => theme.black};
`;

export const Modal = styled.div`
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.white};
  padding: 1rem;
  border-radius: ${dimensions.borderRadius};
  max-width: 100%;
  max-height: 100%;
  overflow-y: auto;
  box-shadow: ${({
    theme,
  }) => `0px 2px 1px -1px rgba(${theme.primaryShadow}, 0.2),
      0px 1px 1px 0px rgba(${theme.primaryShadow}, 0.14),
     0px 1px 3px 0px rgba(${theme.primaryShadow}, 0.12)`};
`;
