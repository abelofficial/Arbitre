import styled from "styled-components";
import { dimensions } from "./theme";

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
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-around;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 5px 15px;
  border-radius: 4px;
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

export interface BaseLinkWithUnderlineProps {
  current?: boolean;
}

export const LinkWithUnderline = styled.a<BaseLinkWithUnderlineProps>`
  position: relative;
  @media (min-width: ${dimensions.generalBreakpoint}) {
    ::after {
      content: "";
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.primary};
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 0.5rem;
      transform: scaleX(0);
      transition: transform 300ms;
    }
    :hover::after {
      ${({ current }) => !current && "transform: scaleX(1);"}
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: transparent;
  max-width: 30rem;
  width: 100%;
  min-width: 15rem;
  @media (min-width: ${dimensions.generalBreakpoint}) {
    min-width: 20rem;
  }
`;

export const TextInput = styled.input`
  width: 100%;
  border-radius: ${dimensions.borderRadius};
  padding: 0.5rem 1.7rem 0.5rem 0.5rem;
  transition: all 0.3s ease-in-out;
  border: 0.1rem solid ${({ theme }) => theme.lightGray};
  color: ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.white};
  outline: none;
  ::placeholder {
    color: transparent;
    font-style: italic;
  }
  :focus {
    border: 0.1rem solid ${({ theme }) => theme.primary};
  }
`;

export const FormErrorMsg = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  color: "red";
`;
