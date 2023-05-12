import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    background_image: string;
    name: string;
    parent_platforms: { platform: Platform}[];
    metacritic: number;
    rating_top: number;
}

const useGames = (selectedGameQuery: GameQuery) => useData<Game>('/games', 
        { params: { 
            genres: selectedGameQuery.genre?.id, 
            platforms: selectedGameQuery.platform?.id,
            ordering: selectedGameQuery.order,
            search: selectedGameQuery.search
        } }, 
        [selectedGameQuery]);

export default useGames;