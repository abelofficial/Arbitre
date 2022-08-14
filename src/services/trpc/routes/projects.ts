import { z } from "zod";
import createRouter from "../createRouter";

const select = {
  id: true,
  name: true,
  description: true,
  createdAt: true,
  updatedAt: true,
  ownerId: true,
  owner: true,
};

const projectsRouter = createRouter()
  .query("all", {
    input: z.object({
      ownerId: z.string(),
    }),
    async resolve({ ctx, input }) {
      const { ownerId } = input;

      return ctx.prisma.project.findMany({
        where: {
          ownerId,
        },
        orderBy: {
          name: "asc",
        },
        select,
      });
    },
  })
  .query("oneById", {
    input: z.object({
      id: z.string(),
      ownerId: z.string(),
    }),
    async resolve({ ctx, input }) {
      const { id, ownerId } = input;

      return ctx.prisma.project.findFirst({
        where: {
          id,
          ownerId,
        },
        select,
      });
    },
  })
  .mutation("add", {
    input: z.object({
      name: z.string(),
      description: z.string(),
      ownerId: z.string(),
    }),
    async resolve({ ctx, input }) {
      const { name, description, ownerId } = input;

      return ctx.prisma.project.create({
        data: {
          name,
          description,
          ownerId,
        },
        select,
      });
    },
  });

export default projectsRouter;
