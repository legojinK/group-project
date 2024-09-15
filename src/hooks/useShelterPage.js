import { useQuery } from "@tanstack/react-query";

export const useShelterPage = ({currentPage} ) => {
  return useQuery(['shelters', currentPage], async () => {
    const response = await fetch(`/api/shelters?page=${currentPage}&limit=20`);
    const data = await response.json();
    return data;
  });
};
