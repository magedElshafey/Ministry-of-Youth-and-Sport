import { useFormContext } from "react-hook-form";
import MainInput from "../../common/inputs/MainInput";
import { CombinedFormData } from "../schema/combinedSchema";

export default function Step4() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CombinedFormData>();

  return (
    <div className="space-y-6">
      <MainInput
        type="date"
        placeholder="Arriving Date"
        label="Arriving Date"
        {...register("arrivingDate")}
        error={errors.arrivingDate?.message}
      />

      <MainInput
        label="Leaving Date"
        placeholder="Leaving Date"
        type="date"
        {...register("leavingDate")}
        error={errors.leavingDate?.message}
      />
    </div>
  );
}
