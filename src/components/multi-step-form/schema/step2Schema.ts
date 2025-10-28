import { z } from "zod";

export const step2Schema = z.object({
  fromStep2: z.number().min(1, "برجاء اختيار المدينة"),
  dateStep2: z.string().min(1, "برجاء اختيار التاريخ"),
});

export type Step2Data = z.infer<typeof step2Schema>;
