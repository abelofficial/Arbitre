import { z } from "zod";
import createRouter from "../createRouter";

const select = {
  id: true,
  projectId: true,
  createdAt: true,
  updatedAt: true,
  userId: true,
};

const likesRouter = createRouter()
  .query("allProjectLikes", {
    input: z.object({
      projectId: z.string(),
    }),
    async resolve({ ctx, input }) {
      const { projectId } = input;

      return ctx.prisma.like.findMany({
        where: {
          projectId,
        },
        orderBy: {
          User: {
            name: "asc",
          },
        },
        select,
      });
    },
  })

  .mutation("toggleLike", {
    input: z.object({
      projectId: z.string(),
      userId: z.string(),
    }),
    async resolve({ ctx, input }) {
      const { projectId, userId } = input;

      const like = await ctx.prisma.like.findFirst({
        where: {
          projectId,
          userId,
        },
      });

      if (like) {
        return ctx.prisma.like.delete({
          where: {
            id: like.id,
          },
        });
      }
      return ctx.prisma.like.create({
        data: {
          userId,
          projectId,
        },
      });
    },
  });

export default likesRouter;
