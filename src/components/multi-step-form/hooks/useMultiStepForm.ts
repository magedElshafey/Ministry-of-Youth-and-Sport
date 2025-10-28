import { useState } from "react";

interface StepItem {
  component: React.ReactNode;
  meta?: string;
}

export function useMultiStepForm(steps: StepItem[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => (i < steps.length - 1 ? i + 1 : i));
    window.scrollTo(0, 0);
  }

  function back() {
    setCurrentStepIndex((i) => (i > 0 ? i - 1 : i));
    window.scrollTo(0, 0);
  }

  const currentStep = steps[currentStepIndex];

  return {
    currentStepIndex,
    step: currentStep.component,
    meta: currentStep.meta,
    next,
    back,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
}
