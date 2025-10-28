import { UseFormReturn } from "react-hook-form";
import MainInput from "../../common/inputs/MainInput";
import { Step4Data } from "../schema/step4Schema";

export default function Step4({
  methods,
}: {
  methods: UseFormReturn<Step4Data>;
}) {
  const {
    formState: { errors },
  } = methods;

  return (
    <div className="space-y-6">
      <MainInput
        type="date"
        placeholder="Arriving Date"
        label="Arriving Date"
        {...methods.register("arrivingDate")}
        error={errors.arrivingDate?.message}
      />

      <MainInput
        label="Leaving Date"
        placeholder="Leaving Date"
        type="date"
        {...methods.register("leavingDate")}
        error={errors.leavingDate?.message}
      />
    </div>
  );
}
