import styled from "styled-components";

export const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  line-height: 1.11;
  letter-spacing: -0.01562em;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  line-height: 1.2;
  font-weight: 300;
  letter-spacing: -0.00833em;
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.167;
  letter-spacing: 0em;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`;

export const HighlightedText = styled.pre`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  color: ${({ theme }) => theme.lightGray};
`;
