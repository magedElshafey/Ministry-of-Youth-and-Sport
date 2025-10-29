import { z } from "zod";

export const step2Schema = z.object({
  fromStep2: z.number().min(1, "validation.step2.from.required"),
  dateStep2: z.string().min(1, "validation.step2.date.required"),
  tripId: z.number().min(1)
});

export type Step2Data = z.infer<typeof step2Schema>;
