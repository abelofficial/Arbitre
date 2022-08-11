import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.black};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.white};
`;
