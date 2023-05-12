import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App';

interface Prop {
    selectedGameQuery: GameQuery
}

const GameHeading = ({ selectedGameQuery }: Prop) => {

    const heading = `${selectedGameQuery.platform?.name || ''} ${selectedGameQuery.genre?.name || ''} Games`
    return (
        <Heading as='h1' marginBottom={5} marginTop={5}>{heading}</Heading>
    )
}

export default GameHeading;