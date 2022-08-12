import { createReactQueryHooks } from "@trpc/react";
import type { inferProcedureOutput } from "@trpc/server";
import type { AppRouter } from "@pages/api/trpc/[trpc].api";
import superjson from "superjson";

export const trpc = createReactQueryHooks<AppRouter>();

export const transformer = superjson;

export type InferQueryOutput<
  TRouteKey extends keyof AppRouter["_def"]["queries"]
> = inferProcedureOutput<AppRouter["_def"]["queries"][TRouteKey]>;
