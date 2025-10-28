import { z } from "zod";

export const step4Schema = z.object({
  arrivingDate: z.string().min(1, "برجاء اختيار التاريخ"),
  leavingDate: z.string().min(1, "برجاء اختيار التاريخ"),
});

export type Step4Data = z.infer<typeof step4Schema>;
