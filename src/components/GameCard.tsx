import { Card, CardBody, Image, HStack, Heading } from '@chakra-ui/react'
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';
interface Prop {
    game: Game
}

const GameCard = ({ game }: Prop) => {
        return (
            <>
               <Card>
                    <Image src={getCroppedImageUrl(game.background_image)}/>
                    <CardBody>
                        <HStack marginY={1} justifyContent='space-between'>
                            <PlatformIconList platforms={game.parent_platforms.map( platform => platform.platform)} />
                            <CriticScore score={game.metacritic}/>
                        </HStack>  
                        <Heading size={'md'}>{game.name} <Emoji rating={game.rating_top} /></Heading>
                    </CardBody>
               </Card>
            </>
        )
}

export default GameCard;