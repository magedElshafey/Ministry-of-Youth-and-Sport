import { useQuery } from "@tanstack/react-query";
import { apiRoutes } from "../../../services/api/config";
import { Axios } from "../../../services/api/Axios";
import { FlightType } from "../types/Flight";

const useGetFlights = (city_id: number | string, date: string) => {
    return useQuery({
        queryKey: [apiRoutes.flights, city_id, date],
        queryFn: async () => {
            const response = await Axios.get<{data: FlightType}>(apiRoutes.flights, {
                params: {
                    city_id,
                    date
                }
            })
            return response.data.data
        },
        enabled: Boolean(city_id && date)
    });
}

export default useGetFlights;