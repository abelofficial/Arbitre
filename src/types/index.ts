import { Project, User } from "@prisma/client";
import { NextPage } from "next";

export interface Itheme {
  white: string;
  black: string;
  lightGray: string;
  primary: string;
  primaryShadow: string;
  red: string;
  green: string;
  yellow: string;
}

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export interface ProjectWithOwner extends Project {
  owner: User;
}
