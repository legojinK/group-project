import { useQuery } from "@tanstack/react-query";
import api from "@/utils/api";

const API_KEY = process.env.REACT_APP_API_KEY;

export const useShelterSearchQuery = ({ selectedSido, selectedSigungu }) => {
  // console.log('kkk', API_KEY);
  return useQuery({
    queryKey: ["shelterSearch"],
    queryFn: async () => {
      const { data } = await api.get(
        `/shelter?&pageNo=1&numOfRows=20&upr_cd=${selectedSido}&org_cd=${selectedSigungu}&serviceKey=${API_KEY}&_type=json`
      );
      return data;
    },
    select: (result) => result.response.body,
  });
};