import { Project, User } from "@prisma/client";
import { NextPage } from "next";

export interface IBreakpoints {
  sm: string;
  md: string;
  lg: string;
  xlg: string;
}

export interface IShadows {
  sm: string;
  md: string;
  lg: string;
}
export interface Itheme {
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

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export interface ProjectWithOwner extends Project {
  owner: User;
}
