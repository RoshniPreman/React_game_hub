import { Text, SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GamesGrid = () => {

    const { games, error } =  useGames();
    console.log(games)

    return <>
         { error && <Text>{error}</Text> }
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4}} padding={10} spacing={10}>
                {games?.map(game => <GameCard key={game.id} game={game}/> )}
          </SimpleGrid>
    </>;
}

export default GamesGrid;