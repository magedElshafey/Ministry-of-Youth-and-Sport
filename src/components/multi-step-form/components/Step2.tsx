import { useFormContext } from "react-hook-form";
import MainInput from "../../common/inputs/MainInput";
import MainSelect, { OptionType } from "../../common/inputs/MainSelect";
import { CombinedFormData } from "../schema/combinedSchema";
import useGetCities from "../api/useGetCities";
import useGetFlights from "../api/uesGetFlights";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function Step2() {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<CombinedFormData>();
  const { data, isFetching } = useGetCities();
  const {data: flights, isLoading: flightFetching} = useGetFlights(watch("fromStep2"), watch("dateStep2"));
  const {t} = useTranslation();

  const flightsOptions = useMemo(() => {
    if (!flightFetching && flights) return (flights?.id ? [{ id: flights?.id, name: flights?.trip_number }] : []) as OptionType[];
    return []
  }, [flights, flightFetching]);

  const flightInformation = useMemo(() => {
    return [flights].find(flight => flight?.id === watch("tripId"));
  }, [flights, watch("tripId")]);

  return (
    <div className="space-y-6">
      <MainSelect
        label={t("step2.from")}
        placeholder={t("step2.select_city")}
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
        label={t("step2.date")}
        {...register("dateStep2")}
        error={errors.dateStep2?.message}
      />
      <MainSelect 
        label={t("step2.flight_number")}
        disabled={!(watch("dateStep2") && watch("fromStep2"))}
        options={flightsOptions}
        value={watch("tripId")}
        onChange={(id) => {
          if(id) {
            setValue("tripId", id);
          }
        }}
      />
      <MainInput label={t("step2.departure_time")} value={flightInformation?.trip_time} readOnly disabled />
      <MainInput label={t("step2.has_stops")} value={t(String(flightInformation?.has_stop ?? "false"))} readOnly disabled />
      {
        flightInformation?.has_stop && (
          <>
            <MainInput
              label={t("step2.stop_city")}
              value={flightInformation?.stop_city ?? ""}
              readOnly
              disabled
            />
            <MainInput
              label={t("step2.stop_time")}
              value={flightInformation?.stop_time ?? ""}
              readOnly
              disabled
            />
          </>
        )
      }
    </div>
  );
}
