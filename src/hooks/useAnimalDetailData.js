// // 동물 한마리에 대한 상세 정보 페이지(AnimalDetailPage)를 위한 hook
// import { useQuery } from "@tanstack/react-query";
// import api from "../utils/api";

// const API_KEY = process.env.REACT_APP_API_KEY;

// const fetchAnimalDetailData = (id) => {
//   return api.get(
//     `/abandonmentPublic/desertionNo=${id}?serviceKey=${API_KEY}&_type=json`
//   ); // baseURL 제외
// };

// export const useAnimalDetailDataQuery = ({ id }) => {
//   return useQuery({
//     queryKey: ["animalDetailData", { id }],
//     queryFn: () => fetchAnimalDetailData(id),
//     select: (result) => result.data.response.body,
//   });
// };
