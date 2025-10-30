import React, { createContext, useContext, useState, ReactNode } from "react";
import { useForm, FormProvider as HookFormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormStep,
  MultiStepFormContextType,
} from "../components/multi-step-form/types/FormStep";
import {
  CombinedFormData,
  combinedFormSchema,
} from "../components/multi-step-form/schema/combinedSchema";
import useGetSettings from "../components/multi-step-form/api/useGetSettings";
import useSubmitForm from "../components/multi-step-form/api/useSubmitForm";
import handlePromisError from "../utils/handlePromiseError";
import { VisitorResponse } from "../components/multi-step-form/types/VisitorResponse";
interface MultiStepFormProviderProps {
  children: ReactNode;
  steps: FormStep[];
  onComplete?: (data: VisitorResponse) => void;
}

const MultiStepFormContext = createContext<
  MultiStepFormContextType | undefined
>(undefined);

export const useMultiStepFormContext = () => {
  const context = useContext(MultiStepFormContext);
  if (!context) {
    throw new Error(
      "useMultiStepFormContext must be used within MultiStepFormProvider"
    );
  }
  return context;
};

export const MultiStepFormProvider: React.FC<MultiStepFormProviderProps> = ({
  children,
  steps,
  onComplete,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const { data } = useGetSettings();
  const { mutateAsync, isPending } = useSubmitForm();
  const launchDate = data?.launch_date;
  const endDate = data?.end_date;
  // Initialize form with combined schema
  const methods = useForm<CombinedFormData>({
    resolver:
      zodResolver(combinedFormSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const clearFormState = () => {
    methods.reset();
    setCurrentStepIndex(0);
  };

  const validateCurrentStep = async (): Promise<boolean> => {
    const currentStep = steps[currentStepIndex]
    if (!currentStep) return false;
    return methods.trigger(currentStep.fields);
  };

  const nextStep = async () => {
    const isValid = await validateCurrentStep();
    if (!isValid) return false;

    if (currentStepIndex < steps.length - 1) {
      const nextIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextIndex);
      window.scrollTo(0, 0);
    } else {
      // Last step - submit form
      const formData = methods.getValues();

      try {
        await combinedFormSchema.parseAsync(formData);
        const response = await mutateAsync(formData);
        if (response?.data) {
          if (onComplete) {
            onComplete(response.data);
          }
          clearFormState();
        }
      } catch (error) {
        handlePromisError(error);
        console.error("Final form validation failed:", error);
      }
    }
    return true;
  };

  const previousStep = () => {
    if (currentStepIndex > 0) {
      const prevIndex = currentStepIndex - 1;
      setCurrentStepIndex(prevIndex);
      window.scrollTo(0, 0);
    }
  };

  const contextValue: MultiStepFormContextType = {
    currentStepIndex,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    nextStep,
    previousStep,
    clearFormState,
    isPending
  };

  return (
    <MultiStepFormContext.Provider value={contextValue}>
      <HookFormProvider {...methods}>{children}</HookFormProvider>
    </MultiStepFormContext.Provider>
  );
};
