import MainLayout from "../../layout/MainLayout";
import { Navigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { VisitorResponse } from "../../components/multi-step-form/types/VisitorResponse";
import { PageType } from "../../components/multi-step-form/types/pages.types";
import { formatDate } from "../../utils/formatDate";

const Success = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const data = location?.state?.data as VisitorResponse | undefined;

  const heroData: PageType = {
    title: t("success.title"),
    description: t("success.description"),
    image: "/assets/success.jpg",
    content: "",
    id: 0,
    is_active: true,
  };

  if (!data) return <Navigate to="/" />;

  return (
    <MainLayout content={heroData}>
      <div className="containerr">
        {/* Step 1: Visitor Personal Information */}
        <div className="pb-5 border-b border-b-gray-400 my-6">
          <p className="font-semibold text-md md:text-lg lg:text-xl uppercase mb-5">
            {t("visitor personal informations")}
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-medium text-gray-600">
                {t("full name (English)")}:
              </span>
              <p className="text-slate-700">{data.name}</p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-medium text-gray-600">{t("email")}:</span>
              <p className="text-slate-700">{data.email}</p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-medium text-gray-600">
                {t("mobile number")}:
              </span>
              <p className="text-slate-700">{data.phone}</p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-medium text-gray-600">
                {t("title / position")}:
              </span>
              <p className="text-slate-700">{data.position}</p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-medium text-gray-600">
                {t("ID number")}:
              </span>
              <p className="text-slate-700">{data.id_number}</p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-medium text-gray-600">
                {t("ID number expired date")}:
              </span>
              <p className="text-slate-700">{formatDate(data.id_expiration)}</p>
            </div>
            {data.visitor_category && (
              <div className="flex items-center gap-4 flex-wrap">
                <span className="font-medium text-gray-600">
                  {t("Visitor Category")}:
                </span>
                <p className="text-slate-700">{data.visitor_category}</p>
              </div>
            )}
          </div>
        </div>

        {/* Step 4: Event Date & Time */}
        <div className="pb-5 border-b border-b-gray-400 my-6">
          <p className="font-semibold text-md md:text-lg lg:text-xl uppercase mb-5">
            {t("accommodation")}
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-medium text-gray-600">
                {t("arriving date")}:
              </span>
              <p className="text-slate-700">
                {formatDate(data.residence_entry_date)}
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-medium text-gray-600">
                {t("leaving date")}:
              </span>
              <p className="text-slate-700">
                {formatDate(data.residence_exit_date)}
              </p>
            </div>
            {data?.residence_period.toString() && (
              <div className="flex items-center gap-4 flex-wrap">
                <span className="font-medium text-gray-600">
                  {t("Residence Period")} :
                </span>
                <p className="text-slate-700">{data.residence_period} days</p>
              </div>
            )}
          </div>
        </div>

        {/* Step 2: Arrival Flight */}
        <div className="pb-5 border-b border-b-gray-400 my-6">
          <p className="font-semibold text-md md:text-lg lg:text-xl uppercase mb-5">
            {t("arrival flight")}
          </p>
          {data.arrival_trip && (
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="font-medium text-gray-600">
                  {t("step2.from")}:
                </span>
                <p className="text-slate-700">{data.arrival_trip.city}</p>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="font-medium text-gray-600">
                  {t("step2.date")}:
                </span>
                <p className="text-slate-700">{data.arrival_trip.trip_date}</p>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="font-medium text-gray-600">
                  {t("step2.flight_number")}:
                </span>
                <p className="text-slate-700">
                  {data.arrival_trip.trip_number}
                </p>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="font-medium text-gray-600">
                  {t("step2.departure_time")}:
                </span>
                <p className="text-slate-700">{data.arrival_trip.trip_time}</p>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="font-medium text-gray-600">
                  {t("step2.has_stops")}:
                </span>
                <p className="text-slate-700">
                  {t(String(data.arrival_trip.has_stop ?? false))}
                </p>
              </div>
              {data.arrival_trip.has_stop && (
                <>
                  {data.arrival_trip.stop_city && (
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className="font-medium text-gray-600">
                        {t("step2.stop_city")}:
                      </span>
                      <p className="text-slate-700">
                        {data.arrival_trip.stop_city}
                      </p>
                    </div>
                  )}
                  {data.arrival_trip.stop_time && (
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className="font-medium text-gray-600">
                        {t("step2.stop_time")}:
                      </span>
                      <p className="text-slate-700">
                        {formatDate(data.arrival_trip.stop_time)}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>

        {/* Step 3: Leaving Flight */}
        <div className="pb-5 border-b border-b-gray-400 my-6">
          <p className="font-semibold text-md md:text-lg lg:text-xl uppercase mb-5">
            {t("leaving flight")}
          </p>
          {data.leaving_trip && (
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="font-medium text-gray-600">
                  {t("step2.to")}:
                </span>
                <p className="text-slate-700">{data.leaving_trip.city}</p>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="font-medium text-gray-600">
                  {t("step2.date")}:
                </span>
                <p className="text-slate-700">{data.leaving_trip.trip_date}</p>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="font-medium text-gray-600">
                  {t("step2.flight_number")}:
                </span>
                <p className="text-slate-700">
                  {data.leaving_trip.trip_number}
                </p>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="font-medium text-gray-600">
                  {t("step2.departure_time")}:
                </span>
                <p className="text-slate-700">{data.leaving_trip.trip_time}</p>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="font-medium text-gray-600">
                  {t("step2.has_stops")}:
                </span>
                <p className="text-slate-700">
                  {t(String(data.leaving_trip.has_stop ?? false))}
                </p>
              </div>
              {data.leaving_trip.has_stop && (
                <>
                  {data.leaving_trip.stop_city && (
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className="font-medium text-gray-600">
                        {t("step2.stop_city")}:
                      </span>
                      <p className="text-slate-700">
                        {data.leaving_trip.stop_city}
                      </p>
                    </div>
                  )}
                  {data.leaving_trip.stop_time && (
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className="font-medium text-gray-600">
                        {t("step2.stop_time")}:
                      </span>
                      <p className="text-slate-700">
                        {formatDate(data.leaving_trip.stop_time)}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Success;
