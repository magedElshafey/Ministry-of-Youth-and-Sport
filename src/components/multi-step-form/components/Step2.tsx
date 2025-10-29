import { UseFormReturn } from "react-hook-form";
import MainInput from "../../common/inputs/MainInput";
import MainSelect from "../../common/inputs/MainSelect";
import { Step2Data } from "../schema/step2Schema";
import useGetCities from "../api/useGetCities";

export default function Step2({
  methods,
}: {
  methods: UseFormReturn<Step2Data>;
}) {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = methods;
  const { data, isFetching } = useGetCities();

  return (
    <div className="space-y-6">
      <MainSelect
        label="من"
        placeholder="اختر المدينة"
        options={data}
        loading={isFetching}
        value={watch("fromStep2") ?? null}
        onChange={(id) => {
          if (id !== null) setValue("fromStep2", id);
        }}
        error={errors.fromStep2?.message}
      />

      <MainInput
        type="date"
        label="التاريخ"
        {...register("dateStep2")}
        error={errors.dateStep2?.message}
      />
      <MainInput label="رقم الرحلة" value="1234" readOnly disabled />
      <MainInput label="وقت الإقلاع" value="12:00 PM" readOnly disabled />
      <MainInput label="وقت الوصول" value="3:00 PM" readOnly disabled />
      {/* <MainInput
        label="اسم المطار"
        value="Cairo International Airport"
        readOnly
        disabled
      /> */}
    </div>
  );
}
