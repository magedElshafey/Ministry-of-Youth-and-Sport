import { z } from "zod";
import { step1Schema } from "./step1Schema";
import { step2Schema } from "./step2Schema";
import { step3Schema } from "./step3Schema";
import { step4Schema } from "./step4Schema";

// Combined schema that includes all step schemas
export const combinedFormSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema)
  .merge(step4Schema);

export type CombinedFormData = z.infer<typeof combinedFormSchema>;

// Field keys type for mapping fields to steps
export type FormFieldKeys = keyof CombinedFormData;
