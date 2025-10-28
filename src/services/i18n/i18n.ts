import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import transelationAr from "../../../public/locales/ar.json";
import transelationEn from "../../../public/locales/en.json";
const resources = {
  en: {
    translation: transelationEn,
  },
  ar: {
    translation: transelationAr,
  },
};
export const supportedLngs = {
  en: "EN",
  ar: "AR",
};
const checkLang = () => {
  const currentLang = localStorage.getItem("i18nextLng");
  if (!currentLang) {
    return "en";
  }
  return currentLang;
};
i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: checkLang(),
    fallbackLng: "ar",
    supportedLngs: Object.keys(supportedLngs),

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["querystring", "localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
      lookupQuerystring: "lng",
    },

    react: {
      useSuspense: false,
    },
  });
export default i18n;
