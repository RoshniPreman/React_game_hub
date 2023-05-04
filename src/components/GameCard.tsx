import { Card, CardBody, CardFooter, Text, Image, HStack, Heading, Divider, Stack } from '@chakra-ui/react'
import { AiFillWindows } from 'react-icons/ai'
import { Game } from '../hooks/useGames';
interface Prop {
    game: Game
}

const GameCard = ({ game }: Prop) => {
        return (
            <>
               <Card borderRadius={10} overflow={'hidden'}>
                    <Image src={ game.background_image }/>
                    <CardBody>
                    <HStack>
                         <AiFillWindows />
                         <AiFillWindows />
                         <AiFillWindows />
                         <AiFillWindows />
                         <AiFillWindows />
                    </HStack>
                    <Stack>
                        <Heading size={'md'}>{game.name}</Heading>
                    </Stack>
                    </CardBody>
                    {/* <CardBody>
      <Stack>
        <Heading pt={6} size={'md'}>Living room sofa</Heading>
        <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text fontSize={'2xl'} color={'blue.200'}>$450</Text>
      </Stack>
        </CardBody>
        <Divider />
        <CardFooter>

        </CardFooter> */}
               </Card>
            </>
        )
}

export default GameCard;