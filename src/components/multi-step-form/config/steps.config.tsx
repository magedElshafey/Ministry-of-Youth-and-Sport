import { FormStep } from '../types/FormStep';
import { step1Schema } from '../schema/step1Schema';
import { step2Schema } from '../schema/step2Schema';
import { step3Schema } from '../schema/step3Schema';
import { step4Schema } from '../schema/step4Schema';
import { Step1 } from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import Step4 from '../components/Step4';

export const formSteps: FormStep[] = [
  {
    id: 'personal-info',
    title: 'البيانات الشخصية',
    position: 1,
    validationSchema: step1Schema,
    component: <Step1 />,
    fields: ['fullNameArabic', 'fullNameEnglish', 'email', 'mobile', 'title', 'idNumber', 'idNumberExpiredDate', 'gender'],
    meta: 'املأ بياناتك الشخصية بشكل دقيق للمتابعة.',
  },
  {
    id: 'departure-info',
    title: 'معلومات الذهاب',
    position: 2,
    validationSchema: step2Schema,
    component: <Step2 />,
    fields: ['fromStep2', 'dateStep2'],
    meta: 'أدخل بعض المعلومات الإضافية المطلوبة منك.',
  },
  {
    id: 'return-info',
    title: 'معلومات الإياب',
    position: 3,
    validationSchema: step3Schema,
    component: <Step3 />,
    fields: ['fromStep3', 'dateStep3'],
    meta: 'راجع بياناتك قبل الإرسال النهائي.',
  },
  {
    id: 'hotel-info',
    title: 'معلومات الفندق',
    position: 4,
    validationSchema: step4Schema,
    component: <Step4 />,
    fields: ['arrivingDate', 'leavingDate'],
    meta: 'راجع بياناتك قبل الإرسال النهائي.',
  },
];
