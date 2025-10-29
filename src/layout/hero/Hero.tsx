import { IconType } from "react-icons";
import { MdDateRange, MdOutlineLocationOn } from "react-icons/md";
import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  description: string;
  icon: string;
  image: string
}

const Hero: React.FC<Props> = ({ title, description, icon, image }) => {
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
      className="rounded-b-3xl"
    >
      <img className="absolute top-0 start-0 h-full w-full object-center object-cover" src={image} />
      <div className="absolute inset-0 flex flex-col  justify-center z-10 text-white containerr">
        <img src={icon} width={80} className="mb-4" />
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

      <div className="absolute inset-0 bg-orangeColor/75 z-5"></div>
    </div>
  );
};

export default Hero;
