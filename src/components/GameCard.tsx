import { Card, CardBody, CardFooter, Text, Image, HStack, Heading, Divider, Stack } from '@chakra-ui/react'
import { AiFillWindows } from 'react-icons/ai'
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
interface Prop {
    game: Game
}

const GameCard = ({ game }: Prop) => {
        return (
            <>
               <Card borderRadius={10} overflow={'hidden'}>
                    <Image src={ game.background_image }/>
                    <CardBody>
                        <Heading fontSize={'2xl'}>{game.name}</Heading>
                        <HStack marginY={1}>
                            <PlatformIconList platforms={game.parent_platforms.map( platform => platform.platform)} />
                        </HStack>
                    </CardBody>
               </Card>
            </>
        )
}

export default GameCard;