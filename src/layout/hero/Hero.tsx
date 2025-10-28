import { IconType } from "react-icons";
import Ballpit from "./Ballpit";
import { MdDateRange, MdOutlineLocationOn } from "react-icons/md";
import { useTranslation } from "react-i18next";
interface HeroProps {
  title: string;
  description: string;
  Icon: IconType;
}
const Hero: React.FC<HeroProps> = ({ Icon, title, description }) => {
  const { t } = useTranslation();
  const data: {
    Icon: IconType;
    title: string;
    description: string;
  }[] = [
    {
      Icon: MdDateRange,
      title: "date & time",
      description: "lorem lorem lorem lorem",
    },
    {
      Icon: MdOutlineLocationOn,
      title: "location",
      description: "lorem lorem lorem lorem",
    },
  ];
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
          {data?.length > 0 && (
            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
              {data?.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 mb-3">
                    <item.Icon size={20} className="text-white" />
                    <p className="font-semibold text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                      {t(item?.title)}
                    </p>
                  </div>
                  <p className="text-gray-200">{item?.description}</p>
                </div>
              ))}
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
