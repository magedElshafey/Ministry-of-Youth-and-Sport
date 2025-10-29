import { z } from "zod";
import { futureOrTodayDate } from "../../../utils/dateValidatin";

export const step1Schema = z.object({
  fullNameArabic: z
    .string()
    .min(2, "validation.step1.fullName.min")
    .max(100, "validation.step1.fullName.max"),
  fullNameEnglish: z
    .string()
    .min(2, "validation.step1.fullName.min")
    .max(100, "validation.step1.fullName.max"),
  email: z.string().email("validation.step1.email.invalid"),
  mobile: z
    .string()
    .regex(/^(05|9665)[0-9]{8}$/, "validation.step1.mobile.invalid"),
  title: z.string().min(2, "validation.step1.title.required"),
  idNumber: z
    .string()
    .regex(/^[0-9]{10}$/, "validation.step1.idNumber.invalid"),
  idNumberExpiredDate: futureOrTodayDate,

  gender: z
    .number({
      error: "validation.step1.gender.required",
    })
    .refine((val) => val === 1 || val === 2, {
      message: "validation.step1.gender.required",
    }),
});

export type Step1Data = z.infer<typeof step1Schema>;
