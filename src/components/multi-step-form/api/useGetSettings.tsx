import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../services/api/Axios";
import { apiRoutes } from "../../../services/api/config";
import { Settings } from "../../../types/Settings";
const useGetSettings = () => {
  return useQuery({
    queryKey: [apiRoutes?.setting],
    queryFn: async () => {
      const { data } = await Axios.get(apiRoutes?.setting);
      return data?.data as Settings;
    },
  });
};

export default useGetSettings;
