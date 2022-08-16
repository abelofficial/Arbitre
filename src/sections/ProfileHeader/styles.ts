import { Avatar } from "@sections/UserProfile/styles";
import { zIndex } from "@styles/theme";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 30rem;
  overflow: hidden;
  position: relative;
`;

export const CoverImage = styled(Image)`
  max-width: 100%;
  height: 40%;
  position: absolute;
  z-index: ${zIndex.modal - 100};
`;

export const ProfileImage = styled(Avatar)`
  width: 10rem;
  height: 10rem;
`;

export const InfoSection = styled.div`
  position: absolute;
  z-index: ${zIndex.modal - 50};
  left: 3rem;
  top: 13rem;
`;
