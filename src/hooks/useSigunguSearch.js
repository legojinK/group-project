import { useQuery } from "@tanstack/react-query";
import api from "@/utils/api";

const API_KEY = process.env.REACT_APP_API_KEY;

export const useSigunguSearchQuery = ({ selectedSido }) => {
  // console.log('kkk', API_KEY);
  return useQuery({
    queryKey: ["sigunguSearch"],
    queryFn: async () => {
      const { data } = await api.get(
        `/sigungu?&pageNo=1&numOfRows=20&upr_cd=${selectedSido}&serviceKey=${API_KEY}&_type=json`
      );
      return data;
    },
    select: (result) => result.response.body,
  });
};
