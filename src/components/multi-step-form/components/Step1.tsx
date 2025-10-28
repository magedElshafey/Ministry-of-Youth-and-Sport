import { UseFormReturn } from "react-hook-form";
import { Step1Data } from "../schema/step1Schema";
import MainInput from "../../common/inputs/MainInput";
import MainSelect from "../../common/inputs/MainSelect";
import useGetGenders from "../api/useGetGenders";

interface Step1Props {
  methods: UseFormReturn<Step1Data>;
}

export function Step1({ methods }: Step1Props) {
  const {
    register,
    setValue,
    formState: { errors },
    watch,
  } = methods;
  const { data, isFetching } = useGetGenders();
  return (
    <div className="space-y-6">
      <MainInput
        label="full name (Arabic)"
        placeholder="enter your name in Arabic"
        {...register("fullNameArabic")}
        error={errors.fullNameArabic?.message}
      />
      <MainInput
        label="full name (English)"
        placeholder="enter your name in English"
        {...register("fullNameEnglish")}
        error={errors.fullNameEnglish?.message}
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
        }}
        error={errors.gender?.message}
        options={data}
        loading={isFetching}
      />
    </div>
  );
}
