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

export const Button = styled.button`
  cursor: pointer;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 5px 15px;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border: 1px solid rgba(144, 202, 249, 0.5);
  color: rgb(144, 202, 249);
`;

export const Link = styled.a`
  cursor: pointer;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: capitalize;
  color: rgb(144, 202, 249);
`;
