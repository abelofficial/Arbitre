import { dimensions, shadows } from "@styles/theme";
import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  margin: 1rem auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 1rem;
  justify-content: flex-start;
  border-radius: ${dimensions.borderRadius};
  box-shadow: ${shadows.md}; ;
`;
