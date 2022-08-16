import styled, { css } from "styled-components";

interface ContainerProps {
  size: "normal" | "small";
}

export const Container = styled.div<ContainerProps>`
  ${({ size }) => {
    if (size === "small") {
      return css`
        height: 1rem;
        width: 1rem;
      `;
    }
    return css`
      height: 1.5rem;
      width: 1.5rem;
    `;
  }}
`;

export const Spinner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 0.3rem solid ${({ theme }) => theme.colors.lightGray};
  border-top-color: ${({ theme }) => theme.colors.primary};
  animation-name: spin;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
