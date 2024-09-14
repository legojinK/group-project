import shelterApi from "@/utils/shelterApi";
import { useQuery } from "@tanstack/react-query";

const API_KEY = process.env.REACT_APP_API_KEY;

export const useShelterQuery = (pageNo) => {
  return useQuery({
    queryKey: ["shelterList", pageNo],
    queryFn: async () => {
      const { data } = await shelterApi.get(
        `/shelterInfo?numOfRows=20&pageNo=${pageNo}&serviceKey=${API_KEY}&_type=json`
      );
      return data;
    },
    select: (result) => result.response.body,
  });
};
