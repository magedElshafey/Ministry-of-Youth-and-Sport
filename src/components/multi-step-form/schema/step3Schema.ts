import { z } from "zod";

export const step3Schema = z.object({
  fromStep3: z.number().min(1, "validation.step3.from.required"),
  dateStep3: z.string().min(1, "validation.step3.date.required"),
  tripIdStep3: z.number().min(1)
});
export type Step3Data = z.infer<typeof step3Schema>;
