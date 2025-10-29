import { useMutation } from "@tanstack/react-query";
import { Axios } from "../../../services/api/Axios";
import { apiRoutes } from "../../../services/api/config";
import { CombinedFormData } from "../schema/combinedSchema";

const buildFormData = (formData: CombinedFormData): FormData => {
  const data = new FormData();

  const fields: Record<string, any> = {
    name: {
      en: formData.fullNameEnglish,
      ar: formData.fullNameArabic,
    },
    email: formData.email,
    phone: formData.mobile,
    position: formData.title,
    id_number: formData.idNumber,
    id_expiration: formData.idNumberExpiredDate,
    gender_id: formData.gender?.toString(),
    residence_entry_date: formData.arrivingDate,
    residence_exit_date: formData.leavingDate,
    arrival_trip_id: formData.tripId?.toString(),
    leaving_trip_id: formData.tripIdStep3?.toString(),
  };

  Object.entries(fields).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (typeof value === "object" && !Array.isArray(value)) {
        Object.entries(value).forEach(([subKey, subValue]) => {
          data.append(`${key}[${subKey}]`, subValue as any);
        });
      } else {
        data.append(key, value);
      }
    }
  });

  return data;
};

const useSubmitForm = () => {
  return useMutation({
    mutationKey: [apiRoutes.visitors],
    mutationFn: async (formData: CombinedFormData) => {
      const payload = buildFormData(formData);
      const { data } = await Axios.post(apiRoutes.visitors, payload);
      return data;
    },
  });
};

export default useSubmitForm;
