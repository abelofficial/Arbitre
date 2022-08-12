import { Title } from "@styles/common";
import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled(Title)`
  color: red;
  min-height: 100vh;
`;
