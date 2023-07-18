import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  /* we had all our hooks & effect here but to make them custom/reuseable we moved them in hooks folder inside a function, 
after importing this function we destructure that object(inside that function) & use games & error array here,code is clean and reusable */
  const { games, error, isLoading } = useGames();

  const skeltons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // will show 10 skeletons by maping when loading is true

  return (
    <>
      {error && <Text>{error}</Text>}
      {/*small screen 1 column, medium 2 colums etc */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
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

        {games.map((i) => (
          <GameCardContainer key={i.id}>
            <GameCard i={i} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
