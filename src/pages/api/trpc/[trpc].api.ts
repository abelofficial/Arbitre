import superjson from "superjson";
import { createContext } from "@services/trpc/context";
import createRouter from "@services/trpc/createRouter";
import usersRouter from "@services/trpc/routes/users";
import * as trpcNext from "@trpc/server/adapters/next";
import prisma from "@services/database";
import projectsRouter from "@services/trpc/routes/projects";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("users.", usersRouter)
  .merge("projects.", projectsRouter);

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
