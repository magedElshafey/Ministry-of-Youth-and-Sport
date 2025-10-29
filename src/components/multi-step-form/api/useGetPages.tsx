import { useQuery } from "@tanstack/react-query"
import { Axios } from "../../../services/api/Axios"
import { apiRoutes } from "../../../services/api/config"
import { PageType } from "../types/pages.types"

const useGetPages = () => {
    return useQuery({
        queryKey: [apiRoutes.pages],
        queryFn: async () => {
            const response = await Axios.get<{data: PageType[]}>(apiRoutes.pages);
            return response.data;
        } 
    })
}

export default useGetPages;