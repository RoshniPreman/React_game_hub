import platforms from '../data/platforms';
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => ({data: platforms, isLoading: false, error: false});

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("platforms")
        .then((data) => data.data.results),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });

export default usePlatforms;