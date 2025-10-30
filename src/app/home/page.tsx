import { MainLayoutWithContext as MainLayout } from "../../layout/MainLayout";
import useGetPages from "../../components/multi-step-form/api/useGetPages";
import { useNavigate } from "react-router-dom";
import { VisitorResponse } from "../../components/multi-step-form/types/VisitorResponse";
import { MultiStepFormProvider } from "../../store/MultiStepFormProvider";
import { formSteps } from "../../components/multi-step-form/config/steps.config";
import FormContent from "../../components/multi-step-form/components/SteppedForm";
import Loader from "../../components/common/loader/spinner/Loader";
import useGetSettings from "../../components/multi-step-form/api/useGetSettings";

export default function HomePage() {
  const pagesQuery = useGetPages();
  const settingQuery = useGetSettings();

  const navigate = useNavigate();

  const handleComplete = (data: VisitorResponse) => {
    navigate("/success", {
      state: {
        data,
      },
    });
  };

  if (pagesQuery.isLoading || settingQuery.isLoading) return (
    <div className="h-screen w-screen overflow-hidden flex justify-center items-center">
      <Loader />
    </div>
  ) 

  return (
    <MultiStepFormProvider steps={formSteps} onComplete={handleComplete}>
      <MainLayout>
        <FormContent />
      </MainLayout>
    </MultiStepFormProvider>
  );
}
