import { Heading } from '@chakra-ui/react'
import useGameQueryStore from "../store/gameQueryStore";

const GameHeading = () => {
  const genreName = useGameQueryStore((g) => g.gameQuery.genre?.name);
  const platformName = useGameQueryStore((g) => g.gameQuery.platform?.name);

  const heading = `${platformName ?? ""} ${genreName ?? ""} Games`;
  return (
    <Heading as="h1" marginBottom={5} marginTop={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;