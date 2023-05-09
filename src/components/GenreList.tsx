import { HStack, List, ListItem, Image, Text, Spinner } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
    const { data,error, isLoading } =  useGenres();
    
    if(isLoading) return <Spinner />

    if(error) return null;

    return (
        <List>
            { data?.map(g => (
               <ListItem key={g.id} paddingY='5px'>
                   <HStack>
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(g.image_background)}></Image>
                        <Text fontSize='lg'>{g.name}</Text>
                   </HStack>
               </ListItem>
            ))}
        </List>
    );
}

export default GenreList;