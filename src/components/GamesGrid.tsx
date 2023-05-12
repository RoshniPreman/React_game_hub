import { Text, SimpleGrid } from '@chakra-ui/react'
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import useGames from '../hooks/useGames';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';

interface Prop{
    selectedGameQuery: GameQuery
}

const GamesGrid = ({ selectedGameQuery }: Prop) => {

    const { data, error, isLoading } =  useGames(selectedGameQuery);
    const skeletons = [1,2,3,4,5,6];

    if(error) return <Text>{error}</Text>;
    
    return (
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4}} paddingTop={2} spacing={3}>
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
    )
}

export default GamesGrid;