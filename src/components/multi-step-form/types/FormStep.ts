import { ZodType } from 'zod';
import { FormFieldKeys } from '../schema/combinedSchema';

export interface FormStep {
  id: string;
  title: string;
  position: number;
  validationSchema: ZodType<any>;
  component: React.ReactElement;
  fields: FormFieldKeys[];
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
}
