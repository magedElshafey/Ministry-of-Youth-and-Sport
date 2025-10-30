import { MdDateRange, MdOutlineLocationOn } from "react-icons/md";
import { useTranslation } from "react-i18next";
import useGetSettings from "../../components/multi-step-form/api/useGetSettings";
import { formatDate } from "../../utils/formatDate";
interface Props {
  title: string;
  description: string;
  icon?: string;
  image: string;
}

const Hero: React.FC<Props> = ({ title, description, icon, image }) => {
  const { t } = useTranslation();
  const queryResult = useGetSettings();
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "600px",
        maxHeight: "600px",
        width: "100%",
        backgroundColor: "#207566",
      }}
      className="rounded-b-3xl"
    >
      <img
        className="absolute top-0 start-0 h-full w-full object-center object-cover"
        src={image}
      />
      <div className="absolute inset-0 flex flex-col  justify-center z-10 text-white containerr">
        {icon && <img src={icon} width={80} className="mb-4" />}
        <h1 className="text-4xl font-bold mb-3">{title}</h1>
        <p className="text-gray-400 w-full md:w-1/2  leading-relaxed pb-6  border-b border-b-gray-400">
          {description}
        </p>
        <div className="mt-6 w-full md:w-2/3">
          {queryResult && queryResult?.data && (
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-5">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <MdDateRange size={20} className="text-white" />
                  <p className="font-semibold text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                    {t("date & time")}
                  </p>
                </div>
                <p className="text-gray-200">
                  {formatDate(queryResult?.data?.launch_date)}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <MdOutlineLocationOn size={20} className="text-white" />
                  <p className="font-semibold text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                    {t("location")}
                  </p>
                </div>
                <p className="text-gray-200">{queryResult?.data?.location}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute inset-0 bg-orangeColor/75 z-5"></div>
    </div>
  );
};

export default Hero;
