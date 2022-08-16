import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Avatar = styled(Image)`
  color: red;
  font-size: 3rem;
  border-radius: 50%;
  box-shadow: ${({
    theme,
  }) => `0px 2px 1px -1px rgba(${theme.colors.primaryShadow}, 0.2),
      0px 1px 1px 0px rgba(${theme.colors.primaryShadow}, 0.14),
     0px 1px 3px 0px rgba(${theme.colors.primaryShadow}, 0.12)`};
`;

export const NameText = styled.pre`
  font-weight: bold;
`;
