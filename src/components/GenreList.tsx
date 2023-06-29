import { HStack, List, ListItem, Image, Button, Spinner, Heading } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from "../store/gameQueryStore";

const GenreList = () => {
  const setGenre = useGameQueryStore((g) => g.setGenre);
  const genreId = useGameQueryStore((g) => g.gameQuery.genre?.id);

  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List>
        {data?.map((g) => (
          <ListItem key={g.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                fit="cover"
                borderRadius={8}
                src={getCroppedImageUrl(g.image_background)}
              ></Image>
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="lg"
                fontWeight={genreId === g.id ? "bold" : "normal"}
                variant="link"
                onClick={() => setGenre(g)}
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;