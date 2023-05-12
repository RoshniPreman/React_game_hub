import { Image, ImageProps } from '@chakra-ui/react';
import  bullsEye from '../assets/bulls-eye.webp';
import meh from '../assets/meh.webp';
import thumbsUp from '../assets/thumbs-up.webp';


interface Prop {
    rating: number
}

const Emoji = ( { rating }: Prop) => {

    if(rating < 3) return null;

    const imojiMap: { [key: number]: ImageProps} = { 4: {src: bullsEye, alt: 'BullsEye', boxSize:'35px'},
                       3: {src: meh, alt: 'Meh',  boxSize:'25px'},
                       5: {src: thumbsUp, alt: 'ThumbsUp',  boxSize:'25px'}};

    return (
         <Image {...imojiMap[rating]} marginTop={1} />
    )
}

export default Emoji;