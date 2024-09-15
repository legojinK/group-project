import shelterApi from "@/utils/shelterApi";
import { useQuery } from "@tanstack/react-query";

const API_KEY = process.env.REACT_APP_API_KEY;

export const useShelterQuery = ({ currentPage, careRegNo }) => {
  return useQuery({
    queryKey: ["shelterList", { currentPage, careRegNo }],
    queryFn: async () => {
      const { data } = await shelterApi.get(
        `/shelterInfo?numOfRows=20&care_reg_no=${careRegNo}&pageNo=${currentPage}&serviceKey=${API_KEY}&_type=json`
      );
      return data;
    },
    select: (result) => result.response.body,
  });
};
