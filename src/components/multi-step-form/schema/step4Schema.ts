import { z } from "zod";

export const step4Schema = z.object({
  arrivingDate: z.string().min(1, "validation.step4.arrivingDate.required"),
  leavingDate: z.string().min(1, "validation.step4.leavingDate.required"),
});

export type Step4Data = z.infer<typeof step4Schema>;
