import { useTranslation } from "react-i18next";
import { navLinks } from "../data/data";
import { Link } from "react-router-dom";
import { socials } from "../data/data";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="w-screen mt-4 bg-orangeColor">
      <div className="containerr">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-12 text-white pt-4">
          <div>
            <h1 className="mb-1">logo</h1>
            <p>slogan</p>
          </div>
          <div>
            <h4 className="mb-3">{t("links")}</h4>
            <ul>
              {navLinks?.map((item, index) => (
                <li key={index} className="mb-2">
                  <Link to={item?.link} className="duration-300">
                    {t(item.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3">{t("contact us")}</h4>
            <ul>
              <li className="mb-2">
                <a href={`https://wa.me/+201022153359`}>+201022153359</a>
              </li>
              <li className="mb-2">
                <a
                  className=" lowercase"
                  href={`mailto:magedelshafey98@gmail.com`}
                >
                  magedelshafey98@gmail.com
                </a>
              </li>
              <li>El-Mansoura , Egypt</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3">{t("follow us")}</h4>
            <ul className="flex items-center gap-2 flex-wrap text-white ">
              {socials?.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <a
                    href={item?.url}
                    target="_blank"
                    rel="noreferrer"
                    className=" duration-300 hover:text-orangeColor hover:scale-110"
                  >
                    {item?.icon && <item.icon size={20} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
