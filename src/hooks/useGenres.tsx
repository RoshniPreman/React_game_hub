import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Genre {
    id: number;
    name: string;
}

interface FetchResponse {
    count: number;
    results: Genre[]
}

const useGenres = () => {

    const [genres, setGenres] = useState<Genre[]>();
    const [error, setError] =  useState('');
    const [isLoading, setIsLoading] =  useState(true);

    useEffect(() => {

        const controller = new AbortController();

        apiClient.get<FetchResponse>('/genres', { signal: controller.signal })
            .then(res => {
                setGenres(res.data.results);
                setIsLoading(false);
           })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });

        return () => { controller.abort() };
            
    },[]);

    return { genres, error, isLoading };
}

export default useGenres;