import { HStack, List, ListItem, Image, Button, Spinner, Heading } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';

interface Prop {
    onGenreSelect: (genre: Genre) => void;
    selectedGenre: Genre | null
}

const GenreList = ( { onGenreSelect, selectedGenre }: Prop) => {
    const { data,error, isLoading } =  useGenres();
    
    if(isLoading) return <Spinner />

    if(error) return null;

    return (
        <>
        <Heading fontSize='2xl' marginBottom={2}>Genres</Heading>
        <List>
            { data?.map(g => (
               <ListItem key={g.id} paddingY='5px'>
                   <HStack>
                        <Image boxSize='32px' fit='cover' borderRadius={8} src={getCroppedImageUrl(g.image_background)}></Image>
                        <Button whiteSpace='normal' textAlign='left' fontSize='lg' fontWeight={selectedGenre?.id === g.id ? 'bold': 'normal'} variant='link' onClick={() => onGenreSelect(g)}>{g.name}</Button>
                   </HStack>
               </ListItem>
            ))}
        </List>
        </>
    );
}

export default GenreList;