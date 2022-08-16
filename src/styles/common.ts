import styled, { css } from "styled-components";
import { dimensions } from "./theme";

export interface StatusColorStyleProps {
  color?: "default" | "primary" | "danger" | "success";
}

export const StatusColorStyle = (isText = false) => css<StatusColorStyleProps>`
  ${({ color = "default", theme }) => {
    if (color === "danger") {
      return isText
        ? css`
            color: ${theme.red} !important;
          `
        : css`
            background-color: ${theme.red};
            color: ${theme.white};
          `;
    }
    if (color === "success") {
      return isText
        ? css`
            color: ${theme.green} !important;
          `
        : css`
            background-color: ${theme.green};
            color: ${theme.white};
          `;
    }
    if (color === "primary") {
      return isText
        ? css`
            color: ${theme.primary} !important;
          `
        : css`
            background-color: ${theme.primary};
            color: ${theme.white};
          `;
    }

    if (isText) {
      return css`
        color: ${theme.lightGray} !important;
      `;
    }
    return css`
      background-color: ${theme.black};
      color: ${theme.white};
    `;
  }}
`;
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

export const HighlightedText = styled.p`
  ${StatusColorStyle(true)}
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  color: ${({ theme }) => theme.lightGray};
`;

interface ButtonProps {
  color?: "primary" | "danger" | "success";
  size?: "normal" | "small";
}

export const Button = styled.button<ButtonProps>`
  ${StatusColorStyle()}
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  width: max-content;
  transition: transform 300ms;
  text-transform: capitalize;
  border-radius: ${dimensions.borderRadius};
  box-shadow: ${({
    theme,
  }) => `0px 2px 1px -1px rgba(${theme.primaryShadow}, 0.2),
      0px 1px 1px 0px rgba(${theme.primaryShadow}, 0.14),
     0px 1px 3px 0px rgba(${theme.primaryShadow}, 0.12)`};

  ${({ size = "normal" }) => {
    if (size === "small") {
      return css`
        padding: 0.2rem 0.6rem;
        border-radius: 0.3rem;
        font-size: 0.9rem;
      `;
    }
    return css`
      padding: 0.7rem 1rem;
      border-radius: 0.5rem;
    `;
  }}

  :hover {
    transform: scale(1.02);
    box-shadow: 0 3px 15px #00000015;
  }
  :disabled {
    opacity: 0.7;
    cursor: default;
    :hover {
      transform: none;
    }
  }
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

const inputStyle = css`
  width: 100%;
  border-radius: ${dimensions.borderRadius};
  padding: 0.5rem 1.7rem 0.5rem 0.5rem;
  transition: all 0.3s ease-in-out;
  border: 0.1rem solid ${({ theme }) => theme.lightGray};
  color: ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.white};
  outline: none;
  box-sizing: border-box;

  resize: none;
  ::placeholder {
    color: transparent;
    font-style: italic;
  }
  :focus {
    border: 0.1rem solid ${({ theme }) => theme.primary};
  }
`;
export const TextInput = styled.input`
  ${inputStyle}
`;

export const MultiTextInput = styled.textarea`
  ${inputStyle}
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  text-overflow: break;
`;

export const FormErrorMsg = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  color: "red";
`;
