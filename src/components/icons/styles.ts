import { StatusSvgColorStyle } from "@styles/common";
import styled, { css } from "styled-components";

export interface SvgProps {
  size?: "x-large" | "large" | "normal" | "small" | "x-small";
  color?: "default" | "primary" | "danger" | "success";
}

export const Svg = styled.svg<SvgProps>`
  ${StatusSvgColorStyle}
  ${({ size, color }) => {
    if (size === "x-large") {
      return css`
        width: 8rem;
        height: 8rem;
      `;
    }
    if (size === "large") {
      return css`
        width: 2rem;
        height: 2rem;
      `;
    }
    if (size === "x-small") {
      return css`
        width: 1rem;
        height: 1rem;
      `;
    }
    if (size === "small") {
      return css`
        width: 1.2rem;
        height: 1.2rem;
      `;
    }
    return css`
      width: 1.5rem;
      height: 1.5rem;
    `;
  }}
`;
