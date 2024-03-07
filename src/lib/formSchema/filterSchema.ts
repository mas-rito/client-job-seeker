import { z } from "zod";

export const filterSchema = z.object({
  categories: z.array(z.string()),
});
