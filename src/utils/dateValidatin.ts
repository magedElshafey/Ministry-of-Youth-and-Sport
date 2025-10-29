import { z } from "zod";

export const futureOrTodayDate = z
  .string()
  .min(1, "validation.step1.idNumberDate.required")
  .refine(
    (val) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const selectedDate = new Date(val);
      selectedDate.setHours(0, 0, 0, 0);

      return selectedDate >= today;
    },
    {
      message: "validation.common.date",
    }
  );
