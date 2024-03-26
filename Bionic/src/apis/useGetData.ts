import { useQuery } from "@tanstack/react-query"
import axiosService from "./apiService";

interface Props {
    queryKeys: string[];
    url: string;

}

const baseURL = (process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL)

const useGetData = ({ queryKeys, url, ...props } : Props) => {
    const response = useQuery({
        ...props,
        queryKey: queryKeys,
        queryFn: async() => {
            const resp = await axiosService().get(baseURL + url)
            return resp.data
        }
    })
    
  return response;
}

export default useGetData