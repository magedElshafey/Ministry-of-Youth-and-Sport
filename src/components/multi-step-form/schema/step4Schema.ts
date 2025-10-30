import { z } from "zod";

export const step4Schema = (launchDate: string, endDate: string) => {
  const toDateOnly = (val: string) => {
    const [datePart] = val.split(" ");
    return new Date(datePart + "T00:00:00");
  };

  const minDate = toDateOnly(launchDate);
  const maxDate = toDateOnly(endDate);

  return z.object({
    arrivingDate: z
      .string()
      .min(1, "Arriving date is required")
      .refine(
        (val) => {
          const date = toDateOnly(val);
          return date >= minDate && date <= maxDate;
        },
        { message: "Arriving date must be between launch and end date" }
      ),

    leavingDate: z
      .string()
      .min(1, "Leaving date is required")
      .refine(
        (val) => {
          const date = toDateOnly(val);
          return date >= minDate && date <= maxDate;
        },
        { message: "Leaving date must be between launch and end date" }
      ),
  });
};

export type Step4Data = z.infer<ReturnType<typeof step4Schema>>;
