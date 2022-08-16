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
  .query("oneById", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ ctx, input }) {
      const { id } = input;

      return ctx.prisma.user.findUnique({ where: { id } });
    },
  })
  .mutation("add", {
    input: z.object({
      name: z.string(),
      email: z.string(),
      picture: z.string(),
    }),
    async resolve({ ctx, input }) {
      const { name, email, picture } = input;

      return ctx.prisma.user.create({
        data: {
          name,
          email,
          picture,
        },
      });
    },
  });

export default usersRouter;
