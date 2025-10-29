import { z } from "zod";
import { step1Schema } from "./step1Schema";
import { step2Schema } from "./step2Schema";
import { step3Schema } from "./step3Schema";
import { step4Schema } from "./step4Schema";

export const combinedFormSchema = (launchDate: string, endDate: string) =>
  step1Schema
    .merge(step2Schema)
    .merge(step3Schema)
    .merge(step4Schema(launchDate, endDate));

export type CombinedFormData = z.infer<ReturnType<typeof combinedFormSchema>>;
