import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../services/api/Axios";
import { apiRoutes } from "../../../services/api/config";
import { OptionType } from "../../common/inputs/MainSelect";
const useGetGenders = () => {
  return useQuery({
    queryKey: [apiRoutes?.genders],
    queryFn: async () => {
      const { data } = await Axios.get(apiRoutes?.genders);
      return data?.data as OptionType[];
    },
  });
};

export default useGetGenders;
