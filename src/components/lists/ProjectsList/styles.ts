import { dimensions } from "@styles/theme";
import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: space--evenly;
`;

export const EmptyScreen = styled.div`
  width: 100%;
  text-align: center;
`;
