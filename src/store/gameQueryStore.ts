import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import { create } from "zustand";

export interface GameQuery {
  genre?: Genre | null;
  platform?: Platform | null;
  order?: string | "";
  search?: string | null;
}

interface GameQueryType {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenre: (genre: Genre) => void;
  setPlatform: (platform: Platform) => void;
  setOrder: (order: string) => void;
}

const useGameQueryStore = create<GameQueryType>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set(() => ({ gameQuery: { search: searchText } })),
  setGenre: (genre) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genre } })),
  setPlatform: (platform) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platform } })),
  setOrder: (order: string) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, order } })),
}));

export default useGameQueryStore;
