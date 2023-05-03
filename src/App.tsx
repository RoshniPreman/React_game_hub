import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'

const App = () => {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area='nav'>
         <NavBar></NavBar>
      </GridItem>
        <Show above='lg'>
          <GridItem area='aside' bg='tomato'>aside</GridItem>
        </Show>
      <GridItem area='main' bg='gold'>main</GridItem>
  </Grid>
  )
}

export default App
