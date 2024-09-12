import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const API_KEY = process.env.REACT_APP_API_KEY;

export const useAnimalCardDataQuery = () => {
  return useQuery({
    queryKey: ["animalCardData"],
    // 유기동물 조회 api call(20240101 ~ 20240911)
    queryFn: async () => {
      const { data } = await api.get(
        `/abandonmentPublic?bgnde=20240101&endde=20240911&pageNo=1&numOfRows=10&serviceKey=${API_KEY}&_type=json`
      );
      return data;
    },
    select: (result) => result.response.body,
  });
};
