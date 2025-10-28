import { z } from "zod";

export const step3Schema = z.object({
  fromStep3: z.number().min(1, "برجاء اختيار المدينة"),
  dateStep3: z.string().min(1, "برجاء اختيار التاريخ"),
});
export type Step3Data = z.infer<typeof step3Schema>;
