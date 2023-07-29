import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = ({ gameQuery }) => {
  /* we had all our hooks & effect here but to make them custom/reuseable we moved them in hooks folder inside a function, 
This file shows list of games so we destructure useGames() endpoint here, object holds data(from useGames endpoint) */
  const { data, error, isLoading } = useGames(gameQuery);
  // 04-filter pass selectedGenre(or whole object holding game,genre & sorting) to useGames hook, coz endpoint/fetching is shifted there from this file

  const skeltons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // will show 10 skeletons by maping when loading is true

  return (
    <>
      {error && <Text>{error}</Text>}
      {/*small screen 1 column, medium 2 colums etc */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={5}
        padding="10px"
      >
        {/* show skeleton component if loading is true,  wraping GameCard & GameCardSkeleton components in GameCardContainer as children to apply styling*/}
        {isLoading &&
          skeltons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data.map((i) => (
          <GameCardContainer key={i.id}>
            <GameCard i={i} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
