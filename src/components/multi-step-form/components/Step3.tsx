import { useFormContext } from "react-hook-form";
import MainInput from "../../common/inputs/MainInput";
import MainSelect, { OptionType } from "../../common/inputs/MainSelect";
import { CombinedFormData } from "../schema/combinedSchema";
import useGetCities from "../api/useGetCities";
import useGetFlights from "../api/uesGetFlights";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FlightType } from "../types/Flight";

export default function Step3() {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<CombinedFormData>();
  const { data, isFetching } = useGetCities();
  const { data: flights, isLoading: flightFetching } = useGetFlights(
    2,
    watch("fromStep3"),
    watch("dateStep3")
  );
  const { t } = useTranslation();

  const flightsOptions = useMemo(() => {
    if (!flightFetching && flights && flights?.length > 0) {
      return flights.map((flight) => ({
        id: flight.id,
        name: flight.trip_number,
      })) as OptionType[];
    }
    return [];
  }, [flights, flightFetching]);

  const flightInformation = useMemo(() => {
    return flights?.find(
      (flight: FlightType) => flight?.id === watch("tripId")
    );
  }, [flights, watch("tripId")]);

  return (
    <div className="space-y-6">
      <p className="font-semibold text-base lg:text-lg ">
        {t("your destination to")}
      </p>
      <MainSelect
        label={t("step2.to")}
        placeholder={t("step2.select_city")}
        options={data}
        loading={isFetching}
        value={watch("fromStep3") ?? null}
        onChange={(id) => {
          if (id !== null) setValue("fromStep3", id);
        }}
        error={errors.fromStep3?.message}
      />

      <MainInput
        type="date"
        label={t("step2.date")}
        {...register("dateStep3")}
        error={errors.dateStep3?.message}
      />
      <MainSelect
        label={t("step2.flight_number")}
        disabled={!(watch("dateStep3") && watch("fromStep3"))}
        options={flightsOptions}
        value={watch("tripIdStep3")}
        loading={flightFetching}
        onChange={(id) => {
          if (id) {
            setValue("tripIdStep3", id);
          }
        }}
      />
      <MainInput
        label={t("step2.departure_time")}
        value={flightInformation?.trip_time}
        readOnly
        disabled
      />
      <MainInput
        label={t("step2.has_stops")}
        value={t(String(flightInformation?.has_stop ?? "false"))}
        readOnly
        disabled
      />
      {flightInformation?.has_stop && (
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
      )}
    </div>
  );
}
