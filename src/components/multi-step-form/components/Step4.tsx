import { useFormContext } from "react-hook-form";
import MainInput from "../../common/inputs/MainInput";
import { CombinedFormData } from "../schema/combinedSchema";
import useGetSettings from "../api/useGetSettings";
export default function Step4() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CombinedFormData>();
  const { data } = useGetSettings();
  const launcDate = data?.launch_date;
  const endDate = data?.end_date;
  console.log("launcDate", launcDate);
  console.log("endDate", endDate);
  return (
    <div className="space-y-6">
      <MainInput
        placeholder="Arriving Date"
        label="Arriving Date"
        type="date"
        min={launcDate}
        max={endDate}
        {...register("arrivingDate")}
        error={errors.arrivingDate?.message}
      />

      <MainInput
        type="date"
        label="Leaving Date"
        placeholder="Leaving Date"
        min={launcDate}
        max={endDate}
        {...register("leavingDate")}
        error={errors.leavingDate?.message}
      />
    </div>
  );
}
