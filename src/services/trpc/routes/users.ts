import { z } from "zod";
import createRouter from "../createRouter";

const usersRouter = createRouter()
  .query("all", {
    async resolve({ ctx }) {
      return ctx.prisma.user.findMany({
        orderBy: {
          name: "asc",
        },
      });
    },
  })
  .query("oneByEmail", {
    input: z.object({
      email: z.string(),
    }),
    async resolve({ ctx, input }) {
      const { email } = input;

      return ctx.prisma.user.findUnique({ where: { email } });
    },
  })
  .mutation("add", {
    input: z.object({
      name: z.string(),
      email: z.string(),
    }),
    async resolve({ ctx, input }) {
      const { name, email } = input;

      return ctx.prisma.user.create({
        data: {
          name,
          email,
        },
      });
    },
  });

export default usersRouter;
