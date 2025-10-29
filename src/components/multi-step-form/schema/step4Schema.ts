import { z } from "zod";

export const step4Schema = (launchDate: string, endDate: string) =>
  z.object({
    arrivingDate: z
      .string()
      .min(1, "Arriving date is required")
      .refine(
        (val) => {
          const date = new Date(val);
          const min = new Date(launchDate);
          const max = new Date(endDate);
          return date >= min && date <= max;
        },
        { message: "Arriving date must be between launch and end date" }
      ),

    leavingDate: z
      .string()
      .min(1, "Leaving date is required")
      .refine(
        (val) => {
          const date = new Date(val);
          const min = new Date(launchDate);
          const max = new Date(endDate);
          return date >= min && date <= max;
        },
        { message: "Leaving date must be between launch and end date" }
      ),
  });

export type Step4Data = z.infer<ReturnType<typeof step4Schema>>;
