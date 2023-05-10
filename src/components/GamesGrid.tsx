import { Text, SimpleGrid } from '@chakra-ui/react'
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import useGames, { Platform } from '../hooks/useGames';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

interface Prop{
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

const GamesGrid = ({ selectedGenre, selectedPlatform }: Prop) => {

    const { data, error, isLoading } =  useGames(selectedGenre, selectedPlatform);
    const skeletons = [1,2,3,4,5,6];
    
    return <>
         { error && <Text>{error}</Text> }
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5}} paddingTop={2} spacing={3}>
                { isLoading && skeletons.map(s => 
                    <GameCardContainer key={s}>
                        <GameCardSkeleton />
                    </GameCardContainer> )
                }
                {data?.map(game => 
                     <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                     </GameCardContainer> )}
          </SimpleGrid>
    </>;
}

export default GamesGrid;