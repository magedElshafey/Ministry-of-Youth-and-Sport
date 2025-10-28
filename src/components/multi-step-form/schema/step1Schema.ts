import { z } from "zod";

export const step1Schema = z.object({
  fullNameArabic: z
    .string()
    .min(2, "الاسم لازم يكون على الأقل حرفين")
    .max(100, "الاسم طويل جدًا"),
  fullNameEnglish: z
    .string()
    .min(2, "الاسم لازم يكون على الأقل حرفين")
    .max(100, "الاسم طويل جدًا"),

  email: z.string().email("البريد الإلكتروني غير صالح"),
  mobile: z
    .string()
    .regex(/^01[0-9]{9}$/, "رقم الهاتف غير صالح (مثلاً 01012345678)"),
  title: z.string().min(2, "الوظيفة مطلوبة"),
  idNumber: z.string().regex(/^[0-9]{14}$/, "رقم الهوية يجب أن يكون 14 رقمًا"),
  idNumberDate: z.string().min(1, "برجاء اختيار التاريخ"),

  gender: z
    .number({
      error: "من فضلك اختر النوع",
    })
    .refine((val) => val === 1 || val === 2, {
      message: "من فضلك اختر النوع",
    }),
});

export type Step1Data = z.infer<typeof step1Schema>;
