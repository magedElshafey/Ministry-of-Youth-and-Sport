import { useQuery } from "@tanstack/react-query";
import { apiRoutes } from "../../../services/api/config";
import { Axios } from "../../../services/api/Axios";
import { FlightType } from "../types/Flight";

const useGetFlights = (
  type: number,
  city_id: number | string,
  date: string
) => {
  return useQuery({
    queryKey: [apiRoutes.flights, city_id, date, type],
    queryFn: async () => {
      const response = await Axios.get<{ data: FlightType }>(
        apiRoutes.flights,
        {
          params: {
            city_id,
            date,
            type,
          },
        }
      );
      return response.data.data;
    },
    enabled: Boolean(city_id && date && type),
  });
};

export default useGetFlights;
