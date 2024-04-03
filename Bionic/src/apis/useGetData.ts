import { useQuery } from "@tanstack/react-query"
import axiosService from "./apiService";

interface Props {
    queryKeys: string[];
    url: string;

}

const useGetData = ({ queryKeys, url, ...props } : Props) => {
    const response = useQuery({
        ...props,
        queryKey: queryKeys,
        queryFn: async() => {
            const resp = await axiosService().get(`/${url}`)
            return resp.data
        }
    })
    
  return response;
}

export default useGetData