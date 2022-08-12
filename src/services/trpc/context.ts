import prisma from "@services/database";
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

export const createContext = async (
  opts?: trpcNext.CreateNextContextOptions
) => ({
  req: opts?.req,
  res: opts?.res,
  prisma: prisma,
});

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
