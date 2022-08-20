import { FollowRequestStatus } from "@prisma/client";
import { z } from "zod";
import createRouter from "../createRouter";

const followRequestRouter = createRouter()
  .query("allUserFollowers", {
    input: z.object({
      userId: z.string(),
    }),
    async resolve({ ctx, input }) {
      const { userId } = input;

      const friendsId = await ctx.prisma.followRequest.findMany({
        where: {
          AND: [
            { status: FollowRequestStatus.PENDING },
            {
              OR: [{ targetUserId: userId }, { userId: userId }],
            },
          ],
        },
        select: {
          userId: true,
        },
      });

      return ctx.prisma.user.findMany({
        where: {
          id: {
            in: friendsId.map((f) => f.userId as string),
          },
        },
        orderBy: {
          name: "asc",
        },
      });
    },
  })
  .mutation("toggleFollow", {
    input: z.object({
      targetUserId: z.string(),
      userId: z.string(),
    }),
    async resolve({ ctx, input }) {
      const { targetUserId, userId } = input;

      const followRequest = await ctx.prisma.followRequest.findFirst({
        where: {
          targetUserId,
          userId,
        },
      });

      if (followRequest !== null) {
        return ctx.prisma.followRequest.delete({
          where: {
            id: followRequest.id,
          },
        });
      }
      return ctx.prisma.followRequest.create({
        data: {
          userId,
          targetUserId,
        },
      });
    },
  });

export default followRequestRouter;
