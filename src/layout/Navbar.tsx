import Logo from "../components/common/logo/Logo";
import useGetSettings from "../components/multi-step-form/api/useGetSettings";
import { useLanguage } from "../store/LanguageProvider";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const { data } = useGetSettings();
  return (
    <>
      <div className="containerr py-2">
        <div className="flex items-center justify-between">
          <Logo logo={data?.logo || ""} />

          <button
            className="text-slate-600 capitalize"
            onClick={() => changeLanguage(language === "ar" ? "en" : "ar")}
          >
            {language === "ar" ? t("english") : t("arabic")}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
