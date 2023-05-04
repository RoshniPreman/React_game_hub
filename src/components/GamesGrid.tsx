import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react'

interface Game {
    id: number;
    name: string;
}

interface FetchResponse {
    count: number;
    results: Game[]
}

const GamesGrid = () => {

    const [games, setGames] =  useState<Array<Game>>();
    const [error, setError] =  useState('');

    useEffect( () => {
        apiClient.get<FetchResponse>('games')
        .then((res) => {
             console.log(res);
             setGames(res.data.results);
        })
        .catch(err => { setError(err.message) });
    }, [ games ]);

    return <>
         { error && <Text>{error}</Text> }
         <ul>
            { games?.map(g => <li key={g.id}>{g.name}</li>)}
         </ul>
    </>;
}

export default GamesGrid;