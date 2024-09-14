import shelterApi from "@/utils/shelterApi";
import { useQuery } from "@tanstack/react-query";

const API_KEY = process.env.REACT_APP_API_KEY;

export const useShelterDetails = ({ careNm }) => {
    return useQuery({
      queryKey: ["shelterDetails", careNm],
      queryFn: async () => {
        const { data } = await shelterApi.get(
          `/shelterInfo?numOfRows=300&careNm=${encodeURIComponent(careNm)}&serviceKey=${API_KEY}&_type=json`
        );
        return data;
      },
      select: (result) => result.response.body,
    });
  };
  
