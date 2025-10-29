import { MainLayoutWithContext as MainLayout } from "../../layout/MainLayout";
import useGetPages from "../../components/multi-step-form/api/useGetPages";
import { useNavigate } from "react-router-dom";
import { CombinedFormData } from "../../components/multi-step-form/schema/combinedSchema";
import { MultiStepFormProvider } from "../../store/MultiStepFormProvider";
import { formSteps } from "../../components/multi-step-form/config/steps.config";
import FormContent from "../../components/multi-step-form/components/SteppedForm";

export default function HomePage() {
  const pagesQuery = useGetPages();

  const navigate = useNavigate();

  const handleComplete = (data: CombinedFormData) => {
    navigate("/success", {
      state: {
        data,
      },
    });
  };

  if (pagesQuery.isLoading) return <div>loading...</div>;

  return (
    <MultiStepFormProvider steps={formSteps} onComplete={handleComplete}>
      <MainLayout>
        <FormContent />
      </MainLayout>
    </MultiStepFormProvider>
  );
}
