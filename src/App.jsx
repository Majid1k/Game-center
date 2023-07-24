import { Grid, GridItem, Show } from "@chakra-ui/react"; // see chakra-ui web => grid section
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
function App() {
  // Below we have main layout (Navbar,aside & main area) of our Home page
  return (
    <>
      <Grid
        // define how display should look in templateArea to set responsiveness for different screens
        templateAreas={{
          // its a object coz we have 2 scanarios, small(base screen) & large screens
          base: `"nav" "main"`, // in base size screen we want to show only navbar & main area
          lg: `"nav nav" "aside main"`, // but on large screens(wider then 1024px) we show nav on full top area , below aside and main area
        }}
        templateColumn={{
          base: "1fr", // our 1 column(1 Game grid) streches and takes up all the space
          lg: "200px 1fr", // on large screen we'll have 2 columns, first (aside) column takes 200px, 2nd column(game grid) will stretch and take up all available space
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>

        {/*Show/Hide component chakra-ui, conditional renders if screen size is above/below to the given size , give screen size as props*/}
        <Show above="lg">
          <GridItem pl="2" area={"aside"} paddingLeft={4}>
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
