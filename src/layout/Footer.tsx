import { useTranslation } from "react-i18next";
import useGetSettings from "../components/multi-step-form/api/useGetSettings";
import Logo from "../components/common/logo/Logo";
import {
  FaFacebook,
  FaInstagram,
  FaSnapchatGhost,
  FaWhatsapp,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const { t } = useTranslation();
  const { data } = useGetSettings();
  return (
    <div className="w-screen mt-4 bg-orangeColor">
      <div className="containerr">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 md:gap-6 lg:gap-8 xl:gap-12 text-white pt-4">
          <Logo logo={data?.logo} />

          <div>
            <h4 className="mb-3">{t("contact us")}</h4>
            <ul>
              {data?.phone && (
                <li className="mb-2">
                  <a dir="ltr" href={`https://wa.me/${data?.phone}`}>
                    {data?.phone}
                  </a>
                </li>
              )}
              {data?.email && (
                <li className="mb-2">
                  <a className=" lowercase" href={`mailto:${data?.email}`}>
                    {data?.email}
                  </a>
                </li>
              )}
              {data?.location && <li>{data?.location}</li>}
            </ul>
          </div>
          <div>
            <h4 className="mb-3">{t("follow us")}</h4>
            <ul className="flex items-center gap-2 flex-wrap text-white ">
              {data?.facebook && (
                <li className="flex items-center gap-4">
                  <a
                    href={data?.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className=" duration-300  hover:scale-110"
                  >
                    <FaFacebook size={20} />
                  </a>
                </li>
              )}
              {data?.x && (
                <li className="flex items-center gap-4">
                  <a
                    href={data?.x}
                    target="_blank"
                    rel="noreferrer"
                    className=" duration-300  hover:scale-110"
                  >
                    <FaXTwitter size={20} />
                  </a>
                </li>
              )}
              {data?.instagram && (
                <li className="flex items-center gap-4">
                  <a
                    href={data?.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className=" duration-300  hover:scale-110"
                  >
                    <FaInstagram size={20} />
                  </a>
                </li>
              )}
              {data?.whatsapp && (
                <li className="flex items-center gap-4">
                  <a
                    href={`https://wa.me/${data?.phone}`}
                    target="_blank"
                    rel="noreferrer"
                    className=" duration-300  hover:scale-110"
                  >
                    <FaWhatsapp size={20} />
                  </a>
                </li>
              )}
              {data?.youtube && (
                <li className="flex items-center gap-4">
                  <a
                    href={data?.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className=" duration-300  hover:scale-110"
                  >
                    <FaYoutube size={20} />
                  </a>
                </li>
              )}
              {data?.snapchat && (
                <li className="flex items-center gap-4">
                  <a
                    href={data?.snapchat}
                    target="_blank"
                    rel="noreferrer"
                    className=" duration-300  hover:scale-110"
                  >
                    <FaSnapchatGhost size={20} />
                  </a>
                </li>
              )}
              {data?.tiktok && (
                <li className="flex items-center gap-4">
                  <a
                    href={data?.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    className=" duration-300  hover:scale-110"
                  >
                    <FaTiktok size={20} />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
