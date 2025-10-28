import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../services/api/Axios";
import { apiRoutes } from "../../../services/api/config";
import { OptionType } from "../../common/inputs/MainSelect";
const useGetCities = () => {
  return useQuery({
    queryKey: [apiRoutes?.cities],
    queryFn: async () => {
      const { data } = await Axios.get(apiRoutes?.cities);
      return data?.data as OptionType[];
    },
  });
};

export default useGetCities;
