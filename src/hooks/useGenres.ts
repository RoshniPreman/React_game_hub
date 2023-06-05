import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => ({ data: genres, isLoading: false, error: false})

const useGenres = () => {
  return useQuery({
    queryKey: ["genre"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("genres")
        .then((data) => data.data.results),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres,
  });
};

export default useGenres;
