import { IconType } from "react-icons";
import Ballpit from "./Ballpit";
import { MdDateRange, MdOutlineLocationOn } from "react-icons/md";
import { useTranslation } from "react-i18next";
import useGetSettings from "../../components/multi-step-form/api/useGetSettings";
import { formatDate } from "../../utils/formatDate";
interface HeroProps {
  title: string;
  description: string;
  Icon: IconType;
}
const Hero: React.FC<HeroProps> = ({ Icon, title, description }) => {
  const { t } = useTranslation();
  const queryResult = useGetSettings();
  console.log("query from settings", queryResult?.data);
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
    >
      <Ballpit
        colors={["#009e3e", "#0083c6", "#f4c40e", "#df0826"]}
        count={100}
        gravity={0.7}
        friction={0.8}
        wallBounce={0.95}
        followCursor={true}
      />
      <div className="absolute inset-0 flex flex-col  justify-center z-10 text-white containerr">
        <Icon size={50} className="mb-2" />
        <h1 className="text-4xl font-bold mb-3">{title}</h1>
        <p className="text-gray-400 w-full md:w-1/2  leading-relaxed pb-6  border-b border-b-gray-400">
          {description}
        </p>
        <div className="mt-6 w-full md:w-1/2">
          {queryResult && queryResult?.data && (
            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
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

      {/* طبقة خفيفة شفافة لو حبيت تغمق الخلفية */}
      <div className="absolute inset-0 bg-black/40 z-5"></div>
    </div>
  );
};

export default Hero;
