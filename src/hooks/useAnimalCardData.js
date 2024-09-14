import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const API_KEY = process.env.REACT_APP_API_KEY;

export const useAnimalCardDataQuery = ({
  selectedDataFrom = '20240101',
  selectedDataTo = `${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}`,
  selectedSido = "",
  selectedSigungu = "",
  selectedShelter = "",
  selectedKind = "",
  selectedDetailKind = "",
  selectedNeuter = "",
  pageNo = 1,
}) => {
  return useQuery({
    queryKey: ["animalCardData"],
    // 유기동물 조회 api call(20240101 ~ 20240911)
    queryFn: async () => {
      const { data } = await api.get(
        `/abandonmentPublic?bgnde=${selectedDataFrom}&endde=${selectedDataTo}&upkind=${selectedKind}&kind=${selectedDetailKind}&upr_cd=${selectedSido}&org_cd=${selectedSigungu}&care_reg_no=${selectedShelter}&neuter_yn=${selectedNeuter}&pageNo=${pageNo}&numOfRows=20&serviceKey=${API_KEY}&_type=json`
      );
      return data;
    },
    select: (result) => result.response.body,
  });
};


