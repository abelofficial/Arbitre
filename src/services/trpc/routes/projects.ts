import { z } from "zod";
import createRouter from "../createRouter";

const projectsRouter = createRouter()
  .query("all", {
    async resolve({ ctx }) {
      return ctx.prisma.project.findMany({
        orderBy: {
          name: "asc",
        },
        select: {
          id: true,
          name: true,
          description: true,
          createdAt: true,
          updatedAt: true,
          ownerId: true,
          owner: true,
        },
      });
    },
  })
  .query("oneById", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ ctx, input }) {
      const { id } = input;

      return ctx.prisma.project.findUnique({ where: { id } });
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
      });
    },
  });

export default projectsRouter;
