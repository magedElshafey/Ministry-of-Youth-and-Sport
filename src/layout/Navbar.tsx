import Logo from "../components/common/logo/Logo";
import { useLanguage } from "../store/LanguageProvider";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();
  return (
    <>
      <div className="containerr py-2">
        <div className="flex items-center justify-between">
          <Logo />

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
