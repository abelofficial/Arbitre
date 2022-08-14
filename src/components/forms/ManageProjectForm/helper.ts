import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export type IProjectFormValues = typeof projectFormSchemaResolver._type & {
  id?: string;
};

export const projectFormSchemaResolver = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z
    .string()
    .min(10, "Description must be longer than 10 characters"),
});
