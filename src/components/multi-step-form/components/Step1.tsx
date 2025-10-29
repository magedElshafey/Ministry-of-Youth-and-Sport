import { useFormContext } from "react-hook-form";
import { CombinedFormData } from "../schema/combinedSchema";
import MainInput from "../../common/inputs/MainInput";
import MainSelect from "../../common/inputs/MainSelect";
import useGetGenders from "../api/useGetGenders";

export function Step1() {
  const {
    register,
    setValue,
    formState: { errors },
    watch,
    setError,
  } = useFormContext<CombinedFormData>();

  const { data, isFetching } = useGetGenders();

  return (
    <div className="space-y-6">
      <MainInput
        label="full name (Arabic / English)"
        placeholder="enter your name"
        {...register("fullName")}
        error={errors.fullName?.message}
      />

      <MainInput
        label="email"
        placeholder="enter your email"
        type="email"
        {...register("email")}
        error={errors.email?.message}
      />

      <MainInput
        label="mobile number"
        placeholder="enter your mobile number"
        {...register("mobile")}
        error={errors.mobile?.message}
      />

      <MainInput
        label="title / position"
        placeholder="enter your title / position"
        {...register("title")}
        error={errors.title?.message}
      />

      <MainInput
        label="ID number"
        placeholder="enter your ID number"
        {...register("idNumber")}
        error={errors.idNumber?.message}
      />
      <MainInput
        type="date"
        label="ID number date"
        placeholder="enter your ID number date"
        {...register("idNumberDate")}
        error={errors.idNumberDate?.message}
      />
      <MainSelect
        label="gender"
        placeholder="choose your gender"
        value={watch("gender") ?? null}
        onChange={(id) => {
          if (id !== null) setValue("gender", id);
          if (id !== null) setError("gender", {});
        }}
        error={errors.gender?.message}
        options={data}
        loading={isFetching}
      />
    </div>
  );
}
