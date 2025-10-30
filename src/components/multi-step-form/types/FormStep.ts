import { ZodType } from 'zod';

export interface FormStep {
  id: string;
  title: string;
  position: number;
  validationSchema: ZodType<any>;
  component: React.ReactElement;
  fields: string[];
  meta?: string;
}

export interface MultiStepFormContextType {
  currentStepIndex: number;
  steps: FormStep[];
  isFirstStep: boolean;
  isLastStep: boolean;
  nextStep: () => Promise<boolean | undefined>;
  previousStep: () => void;
  clearFormState: () => void;
  isPending: boolean
}
