import React from "react";
import { useMultiStepFormContext } from "../../../store/MultiStepFormProvider";
import MainBtn from "../../common/buttons/MainBtn";
import HtmlConverter from "../../common/htmlConverter/HtmlConverter";
import useGetPages from "../api/useGetPages";
import { PageType } from "../types/pages.types";
import { useTranslation } from "react-i18next";

const FormContent: React.FC = () => {
  const { t } = useTranslation();
  const {
    currentStepIndex,
    steps,
    isFirstStep,
    isLastStep,
    nextStep,
    previousStep,
  } = useMultiStepFormContext();
  const currentStep = steps[currentStepIndex];

  const { data } = useGetPages();
  const content = (data?.data?.[currentStepIndex] as PageType)?.content;

  const handleNext = async () => {
    await nextStep();
  };

  const handlePrevious = () => {
    previousStep();
  };

  return (
    <div className="containerr my-8">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="w-full md:w-1/2">
          <div>{currentStep.component}</div>
          <div className="flex justify-between mt-8">
            {!isFirstStep && (
              <button
                type="button"
                onClick={handlePrevious}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-md transition"
              >
                {t("back")}
              </button>
            )}
            <MainBtn
              theme="secondary"
              type="button"
              text={isLastStep ? "submit" : "next"}
              className="min-w-[150px]"
              onClick={handleNext}
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          {content && (
            <div className="text-gray-600 pt-10 text-lg/9">
              <HtmlConverter html={content} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormContent;
