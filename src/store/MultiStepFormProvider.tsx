import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useForm, FormProvider as HookFormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormStep, MultiStepFormContextType } from '../components/multi-step-form/types/FormStep';
import { CombinedFormData, combinedFormSchema } from '../components/multi-step-form/schema/combinedSchema';

interface MultiStepFormProviderProps {
  children: ReactNode;
  steps: FormStep[];
  onComplete?: (data: CombinedFormData) => void;
}

const MultiStepFormContext = createContext<MultiStepFormContextType | undefined>(undefined);

export const useMultiStepFormContext = () => {
  const context = useContext(MultiStepFormContext);
  if (!context) {
    throw new Error('useMultiStepFormContext must be used within MultiStepFormProvider');
  }
  return context;
};

export const MultiStepFormProvider: React.FC<MultiStepFormProviderProps> = ({
  children,
  steps,
  onComplete
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Initialize form with combined schema
  const methods = useForm<CombinedFormData>({
    resolver: zodResolver(combinedFormSchema),
    mode: "onBlur",
    reValidateMode: "onChange"
  });

  const clearFormState = () => {
    methods.reset();
    setCurrentStepIndex(0);
  };

  const validateCurrentStep = async (): Promise<boolean> => {
    const currentStep = steps[currentStepIndex];
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
        if (onComplete) {
          onComplete(formData);
        }
        clearFormState();
      } catch (error) {
        console.error('Final form validation failed:', error);
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
  };

  return (
    <MultiStepFormContext.Provider value={contextValue}>
      <HookFormProvider {...methods}>
        {children}
      </HookFormProvider>
    </MultiStepFormContext.Provider>
  );
};
