import { NextPage } from "next";

export interface Itheme {
  white: string;
  black: string;
  lightGray: string;
  primary: string;
  primaryShadow: string;
}

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};
