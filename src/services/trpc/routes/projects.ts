import { FollowRequestStatus } from "@prisma/client";
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
  members: true,
};

const projectsRouter = createRouter()
  .query("all", {
    async resolve({ ctx }) {
      return ctx.prisma.project.findMany({
        where: {
          NOT: {
            description: "",
          },
        },
        orderBy: {
          name: "asc",
        },
        select,
      });
    },
  })
  .query("findUserProjects", {
    input: z.object({
      ownerId: z.string(),
    }),
    async resolve({ ctx, input }) {
      const { ownerId } = input;

      return ctx.prisma.project.findMany({
        where: {
          ownerId: ownerId,
        },
        orderBy: {
          name: "asc",
        },
        select,
      });
    },
  })
  .query("allFeedsList", {
    input: z.object({
      ownerId: z.string(),
    }),
    async resolve({ ctx, input }) {
      const { ownerId } = input;

      const friendsId = await ctx.prisma.followRequest.findMany({
        where: {
          AND: [
            { status: FollowRequestStatus.PENDING },
            {
              OR: [
                {
                  userId: ownerId,
                },
              ],
            },
          ],
        },
        select: {
          userId: true,
          targetUserId: true,
        },
      });

      return ctx.prisma.project.findMany({
        where: {
          OR: [
            { ownerId },
            {
              owner: {
                id: {
                  in: friendsId.map((f) => f.targetUserId as string),
                },
              },
            },
          ],
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
  })
  .mutation("update", {
    input: z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
    }),
    async resolve({ ctx, input }) {
      const { name, description, id } = input;

      return ctx.prisma.project.update({
        where: {
          id,
        },
        data: {
          name,
          description,
        },
        select,
      });
    },
  });

export default projectsRouter;
