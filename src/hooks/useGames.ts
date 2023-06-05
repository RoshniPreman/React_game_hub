import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  background_image: string;
  name: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (selectedGameQuery: GameQuery) =>
  useQuery<Game[], Error>({
    queryKey: ["games", selectedGameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("games", {
          params: {
            genres: selectedGameQuery.genre?.id,
            platforms: selectedGameQuery.platform?.id,
            ordering: selectedGameQuery.order,
            search: selectedGameQuery.search,
          },
        })
        .then((data) => data.data.results),
  });
export default useGames;