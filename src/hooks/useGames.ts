import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    background_image: string;
    name: string;
}

interface FetchResponse {
    count: number;
    results: Game[]
}

const useGames = () => {
    const [games, setGames] =  useState<Array<Game>>();
    const [error, setError] =  useState('');

    useEffect( () => {

        const controller = new AbortController();

        apiClient.get<FetchResponse>('/games', { signal: controller.signal })
        .then((res) => {
             setGames(res.data.results);
        })
        .catch(err => { 
            if(err instanceof CanceledError) return;
            setError(err.message) });

        return () => { controller.abort() };
    }, []);

    return { games, error };
}

export default useGames;