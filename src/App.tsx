import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GamesGrid from './components/GamesGrid'
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" marginX="10px">
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading />
        <Flex paddingBottom={3}>
          <Box marginRight={3}>
            <PlatformSelector />
          </Box>
          <SortSelector />
        </Flex>
        <GamesGrid></GamesGrid>
      </GridItem>
    </Grid>
  );
};

export default App
