import { GameQuery } from "../App";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  background_image: string;
  name: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (selectedGameQuery: GameQuery) => {
  const apiClient = new APIClient<Game>("games");

  return useQuery<Game[], Error>({
    queryKey: ["games", selectedGameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: selectedGameQuery.genre?.id,
          parent_platforms: selectedGameQuery.platform?.id,
          ordering: selectedGameQuery.order,
          search: selectedGameQuery.search,
        },
      }),
  });
};

export default useGames;