import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const API_KEY = process.env.REACT_APP_API_KEY;

export const useShelterList = () => {
  return useQuery({
    queryKey: ["shelterList"],
    queryFn: async () => {
      const { data } = await api.get(
        `/shelterInfo?numOfRows=200&pageNo=1&serviceKey=${API_KEY}&_type=json`
      );
      console.log("API Response Data:", data);
      return data;
    },
    select: (result) => result.response.body,
  });
};
