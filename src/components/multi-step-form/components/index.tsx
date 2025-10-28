import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import { Step1 } from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import MainBtn from "../../common/buttons/MainBtn";
import HtmlConverter from "../../common/htmlConverter/HtmlConverter";
import { step1Schema, Step1Data } from "../schema/step1Schema";
import { step2Schema, Step2Data } from "../schema/step2Schema";
import { Step3Data, step3Schema } from "../schema/step3Schema";
import { step4Schema, Step4Data } from "../schema/step4Schema";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
type FormData = Step1Data & Step2Data & Step3Data & Step4Data;

export default function MultiStepForm({
  onStepChange,
}: {
  onStepChange: (index: number) => void;
}) {
  const navigate = useNavigate();
  const schemas = [step1Schema, step2Schema, step3Schema, step4Schema];
  const [currentSchemaIndex, setCurrentSchemaIndex] = useState(0);

  const methods = useForm<FormData>({
    resolver: zodResolver(schemas[currentSchemaIndex]),
    mode: "onTouched",
  });

  const { step, meta, currentStepIndex, next, back, isFirstStep, isLastStep } =
    useMultiStepForm([
      {
        component: <Step1 key="step1" methods={methods} />,
        meta: "املأ بياناتك الشخصية بشكل1 دقيق للمتابعة.",
      },
      {
        component: <Step2 key="step2" methods={methods} />,
        meta: "أدخل بعض المعلومات الإضافية ا2لمطلوبة منك.",
      },
      {
        component: <Step3 key="step3" methods={methods} />,
        meta: "راجع بياناتك قبل الإرسال النهائ3ي.",
      },
      {
        component: <Step4 key="step4" methods={methods} />,
        meta: "راجع بياناتك قبل الإرسال 4.",
      },
    ]);

  const onSubmit = methods.handleSubmit((data) => {
    if (!isLastStep) {
      next();
      onStepChange(currentStepIndex + 1);
      setCurrentSchemaIndex(currentStepIndex + 1);
      return;
    }
    navigate("/success");
    console.log("✅ Final Data:", data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="containerr my-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-1/2">
            <div>{step}</div>
            <div className="flex justify-between mt-8">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={() => {
                    back();
                    onStepChange(currentStepIndex - 1);
                    setCurrentSchemaIndex(currentStepIndex - 1);
                  }}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-md transition"
                >
                  رجوع
                </button>
              )}
              <MainBtn
                theme="secondary"
                type="submit"
                text={isLastStep ? "إرسال" : "التالي"}
                className="min-w-[150px]"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            {meta && (
              <div className="text-gray-600 text-base">
                <HtmlConverter html={meta} />
              </div>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
