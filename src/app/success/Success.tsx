import { useEffect } from "react";
import MainLayout from "../../layout/MainLayout";
import { MdFlightLand } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Success = () => {
  const { i18n } = useTranslation();
  const heroData = {
    title: "تم ارسال البيانات بنجاح",
    description: "محتوى) ويُستخدم في صناعات المطابع ودوروالتي حوت أيضاً ",
    Icon: MdFlightLand,
  };
  const location = useLocation();
  const data = location?.state?.data;
  console.log("data", data);
  const navigate = useNavigate();
  useEffect(() => {
    if (!data) {
      navigate("/");
    } else {
      return;
    }
  }, []);
  return (
    <MainLayout heroData={heroData}>
      <div className="containerr">
        <div className="pb-5 border-b border-b-gray-400 my-6">
          <p className="font-semibold text-md md:text-lg lg:text-xl  uppercase mb-5">
            visitor personal informations
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-slate-700 underline"></p>
            <p className="text-slate-700 underline">come from talkha</p>
            <p className="text-slate-700 underline">to elmansoura</p>
          </div>
        </div>
        <div className="pb-5 border-b border-b-gray-400 my-6">
          <p className="font-semibold text-md md:text-lg lg:text-xl uppercase mb-5">
            event date & time
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-slate-700 underline">maged elshafey</p>
            <p className="text-slate-700 underline">come from talkha</p>
            <p className="text-slate-700 underline">to elmansoura</p>
          </div>
        </div>
        <div className="pb-5 border-b border-b-gray-400 my-6">
          <p className="font-semibold text-md md:text-lg lg:text-xl uppercase mb-5">
            arrival flight
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-slate-700 underline">maged elshafey</p>
            <p className="text-slate-700 underline">come from talkha</p>
            <p className="text-slate-700 underline">to elmansoura</p>
          </div>
        </div>
        <div className="pb-5 border-b border-b-gray-400 my-6">
          <p className="font-semibold text-md md:text-lg lg:text-xl  uppercase mb-5">
            leaving flight
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-slate-700 underline">maged elshafey</p>
            <p className="text-slate-700 underline">come from talkha</p>
            <p className="text-slate-700 underline">to elmansoura</p>
          </div>
        </div>
        <div className="my-6">
          <p className="font-semibold text-md md:text-lg lg:text-xl  uppercase mb-5">
            hospitality
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-slate-700 underline">maged elshafey</p>
            <p className="text-slate-700 underline">come from talkha</p>
            <p className="text-slate-700 underline">to elmansoura</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Success;
