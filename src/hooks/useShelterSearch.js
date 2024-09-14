import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

const fetchShelterSearch = async ({ keyword }) => {
  const response = await axios.get(`/shelters?query=${keyword}`);
  return response.data;
};

export const useShelterSearch = (keyword) => {
  return useQuery({
    queryKey: ["shelter-search", keyword],
    queryFn: () => fetchShelterSearch({ keyword }),
    enabled: !!keyword, 
  });
};
