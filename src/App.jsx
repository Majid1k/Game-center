import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"; // see chakra-ui web => grid section
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  /* 01-filter, This state is to filter games by Genre, setSelectedGenre will be set in genreList.jsx & will be shared with gameGrid.jsx to filter games as per Genre
  const [selectedGenre, setSelectedGenre] = useState(null); // null is used to save only 1 selected/clicked ganre in this hook, instead of saving all selected objects
  const [selectedPlatform, setSelectedPlatform] = useState(null);  In refectoring code, we put these both variables in a Query object for all queries related to games*/
  const [gameQuery, setGameQuery] = useState({
    genre: null,
    platform: null,
    sortOrder: "",
    searchText: "",
  });

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
        templatecolumn={{
          base: "1fr", // our 1 column(1 Game grid) streches and takes up all the space
          lg: "200px 1fr", // on large screen we'll have 2 columns, first (aside) column takes 200px, 2nd column(game grid) will stretch and take up all available space
        }}
      >
        <GridItem area={"nav"}>
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>

        {/*Show/Hide component chakra-ui, conditional renders if screen size is above/below to the given size , give screen size as props*/}
        <Show above="lg">
          <GridItem pl="2" area={"aside"} paddingLeft={4}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />{" "}
            {/* 02-filter, (genre) is = genre clicked by user, we add it into the gameQuery object*/}
          </GridItem>
        </Show>

        <GridItem pl="2" area={"main"}>
          {/* 02-filter, (platform) is = platform clicked by user, we add it into the gameQuery object*/}
          <HStack spacing={7} paddingLeft={3} marginBottom={4}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
          {/* 03-filter pass (game query object) holding 3 values to gameGrid component to filter gameList as per genre/platform/sort order */}
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

/*
 <Show above="lg">
          <GridItem pl="2" area={"aside"} paddingLeft={4}>
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />{" "}
            {/* 02-filter, genre is = genre clicked by user, we set it to selected Genre}
          </GridItem>
        </Show>

        <GridItem pl="2" area={"main"}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />{" "}
          {/* 03-filter pass selectedGenre to gameGrid component to filter gameList as per selectedGenre }
        </GridItem>
      </Grid>
    </>
  );
}


*/
