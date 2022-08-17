import { MemberStatus } from "@prisma/client";
import { z } from "zod";
import createRouter from "../createRouter";

const select = {
  id: true,
  projectId: true,
  createdAt: true,
  updatedAt: true,
  user: true,
};

const membersRouter = createRouter().query("allActiveProjectMembers", {
  input: z.object({
    projectId: z.string(),
    ownerId: z.string(),
  }),
  async resolve({ ctx, input }) {
    const { ownerId, projectId } = input;

    return ctx.prisma.member.findMany({
      where: {
        AND: {
          Project: {
            ownerId,
          },
          projectId,
          status: MemberStatus.ACTIVE,
        },
      },
      orderBy: {
        Project: {
          name: "asc",
        },
      },
      select,
    });
  },
});

export default membersRouter;
