import { shadows } from "@styles/theme";
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
`;

export const NameText = styled.pre`
  font-weight: bold;
`;
