import { Badge } from '@chakra-ui/react';

interface Prop {
    score: number
}

const CriticScore = ( { score }: Prop) => {
 
    let color = score > 75 ? 'green' : score > 60 ? 'yellow': ''; 

     return (
        <Badge colorScheme={color}>{score}</Badge>
     )
}

export default CriticScore;