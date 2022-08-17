import superjson from "superjson";
import { createContext } from "@services/trpc/context";
import createRouter from "@services/trpc/createRouter";
import usersRouter from "@services/trpc/routes/users";
import * as trpcNext from "@trpc/server/adapters/next";
import prisma from "@services/database";
import projectsRouter from "@services/trpc/routes/projects";
import likesRouter from "@services/trpc/routes/likes";
import membersRouter from "@services/trpc/routes/members";
import followRequestRouter from "@services/trpc/routes/followRequest";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("users.", usersRouter)
  .merge("likes.", likesRouter)
  .merge("members.", membersRouter)
  .merge("projects.", projectsRouter)
  .merge("followRequest.", followRequestRouter);

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  teardown: () => prisma.$disconnect(),
  onError({ error }) {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      console.error("Something went wrong", error);
    }
  },
});
