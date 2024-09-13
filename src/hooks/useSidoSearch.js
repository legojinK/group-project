import { useQuery } from "@tanstack/react-query";
import api from "@/utils/api";

const API_KEY = process.env.REACT_APP_API_KEY;

export const useSidoSearchQuery = () => {
  // console.log('kkk', API_KEY);
  return useQuery({
    queryKey: ["sidoSearch"],
    queryFn: async () => {
      const { data } = await api.get(`/sido?&pageNo=1&numOfRows=20&serviceKey=${API_KEY}&_type=json`);
      return data;
    },
    select: (result) => result.response.body,
  });
};