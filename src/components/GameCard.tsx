import { Card, CardBody, Badge, Image, HStack, Heading } from '@chakra-ui/react'
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
interface Prop {
    game: Game
}

const GameCard = ({ game }: Prop) => {
        return (
            <>
               <Card borderRadius={10} overflow={'hidden'}>
                    <Image src={getCroppedImageUrl(game.background_image)}/>
                    <CardBody>
                        <Heading size={'md'}>{game.name}</Heading>
                        <HStack marginY={1} justifyContent='space-between'>
                            <PlatformIconList platforms={game.parent_platforms.map( platform => platform.platform)} />
                            <CriticScore score={game.metacritic}/>
                        </HStack>
                    </CardBody>
               </Card>
            </>
        )
}

export default GameCard;