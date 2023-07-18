import { Grid, GridItem, Show } from "@chakra-ui/react"; // see chakra-ui web => grid section
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
function App() {
  // Below we have main layout (Navbar,aside & main area) of our Home page
  return (
    <>
      <Grid
        // we pass an object in templateArea to set responsiveness for different screens
        templateAreas={{
          base: `"nav" "main"`, // in base size screen we want to show only navbar & main area
          lg: `"nav nav" "aside main"`, // but on large screens(wider then 1024px) we show nav on full top area & aside and main area on bottom
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>

        <Show above="lg">
          {" "}
          {/*Show/Hide component chakra-ui, conditional renders if screen size is above/below to the given size , give screen size as props*/}
          <GridItem pl="2" area={"aside"}>
            <GenreList />
          </GridItem>
        </Show>

        <GridItem pl="2" area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
