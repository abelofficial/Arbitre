import "styled-components";
import { IShadows } from "./index";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      lightGray: string;
      primary: string;
      primaryShadow: string;
      red: string;
      green: string;
      yellow: string;
    };
    breakpoints: IBreakpoints;
    shadows: IShadows;
  }
}
