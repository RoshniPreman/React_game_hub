import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GamesGrid from './components/GamesGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/usePlatforms'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'

export interface GameQuery {
  genre: Genre | null,
  platform: Platform | null,
  order: string | '',
  search: string| null
}

const App = () => {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
    templateColumns={{
      base: '1fr',
      lg:'200px 1fr'
    }}>
      <GridItem area='nav'>
         <NavBar submitSearch={(search) => setGameQuery({...gameQuery, search})}></NavBar>
      </GridItem>
        <Show above='lg'>
          <GridItem area='aside' marginX='10px'>
            <GenreList selectedGenre={gameQuery.genre} onGenreSelect={(genre) => setGameQuery({...gameQuery, genre})}></GenreList>
          </GridItem>
        </Show>
      <GridItem area='main'>
        <GameHeading selectedGameQuery={gameQuery}/>
        <Flex paddingBottom={3}>
          <Box marginRight={3}>
             <PlatformSelector selectedPlatform={gameQuery.platform} onPlatformSelect={(platform) => setGameQuery({...gameQuery, platform})} />
          </Box>
          <SortSelector selectedSortOrder={gameQuery.order} selectSortOrder={(order) => setGameQuery({...gameQuery, order})} />
        </Flex>
        <GamesGrid selectedGameQuery={gameQuery}></GamesGrid>
      </GridItem>
  </Grid>
  )
}

export default App
