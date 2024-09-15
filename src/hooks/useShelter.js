import shelterApi from "@/utils/shelterApi";
import { useQuery } from "@tanstack/react-query";

const API_KEY = process.env.REACT_APP_API_KEY;

export const useShelterQuery = ({ currentPage = 1, care_nm = "" } = {}) => {
  return useQuery({
    queryKey: ["shelterList", { currentPage, care_nm }],
    queryFn: async () => {
      const { data } = await shelterApi.get(
        `/shelterInfo?numOfRows=20&care_nm=${care_nm}&pageNo=${currentPage}&serviceKey=${API_KEY}&_type=json`
      );
      return data;
    },
    select: (result) => result.response.body,
  });
};
