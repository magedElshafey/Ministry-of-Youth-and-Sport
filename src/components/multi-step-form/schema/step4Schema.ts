import { z } from "zod";

export const step4Schema = z.object({
    arrivingDate: z
      .string()
      .min(1, "Arriving date is required"),
    leavingDate: z
      .string()
      .min(1, "Leaving date is required"),
  });

export type Step4Data = z.infer<typeof step4Schema>;
