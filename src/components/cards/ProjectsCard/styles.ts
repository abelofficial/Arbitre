import { dimensions } from "@styles/theme";
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
  box-shadow: ${({
    theme,
  }) => `0px 2px 1px -1px rgba(${theme.primaryShadow}, 0.2),
      0px 1px 1px 0px rgba(${theme.primaryShadow}, 0.14),
     0px 1px 3px 0px rgba(${theme.primaryShadow}, 0.12)`};
`;
