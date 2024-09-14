import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const API_KEY = process.env.REACT_APP_API_KEY;

export const useShelterQuery = (pageNo) => {
  return useQuery({
    queryKey: ["shelterList", pageNo],
    queryFn: async () => {
      const { data } = await api.get(
        `/shelterInfo?numOfRows=20&pageNo=${pageNo}&serviceKey=${API_KEY}&_type=json`
      );
      console.log("API Response Data:", data);
      return data;
    },
    select: (result) => result.response.body,
  });
};
