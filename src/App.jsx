import { Grid, GridItem, Show } from "@chakra-ui/react"; // see chakra-ui web => grid section
import NavBar from "./components/NavBar";
function App() {
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
          <GridItem pl="2" bg="gray.300" area={"aside"}>
            Aside
          </GridItem>
        </Show>

        <GridItem pl="2" bg="green.300" area={"main"}>
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
