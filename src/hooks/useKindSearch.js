import { useQuery } from "@tanstack/react-query";
import api from "@/utils/api";

const API_KEY = process.env.REACT_APP_API_KEY;

export const useKindSearchQuery = ({ selectedKind }) => {
  // console.log('kkk', API_KEY);
  return useQuery({
    queryKey: ["kindSearch"],
    queryFn: async () => {
      const { data } = await api.get(
        `/kind?up_kind_cd=${selectedKind}&serviceKey=${API_KEY}&_type=json`
      );
      return data;
    },
    select: (result) => result.response.body,
  });
};