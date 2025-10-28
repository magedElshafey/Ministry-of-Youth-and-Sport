import axios from "axios";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { apiUrl } from "./config";

export const Axios = axios.create({
  baseURL: apiUrl,
  validateStatus: (status) => status >= 200 && status < 400,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
const AxiosConfig = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const requestInterceptor = Axios.interceptors.request.use((config) => {
      config.headers["lang"] = i18n.language;
      config.headers["Accept-Language"] = i18n.language;

      return config;
    });

    const responseInterceptor = Axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return () => {
      Axios.interceptors.request.eject(requestInterceptor);
      Axios.interceptors.response.eject(responseInterceptor);
    };
  }, [i18n.language]);
  return null;
};
export default AxiosConfig;
