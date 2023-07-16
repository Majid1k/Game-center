import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  /* we had all our hooks & effect here but to make them custom/reuseable we moved them in hooks folder inside a function, 
after importing this function we destructure that object(inside that function) & use games & error array here,code is clean and reusable */
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      {/*small screen 1 column, medium 2 colums etc */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={5}
        padding="10px"
      >
        {games.map((i) => (
          <GameCard key={i.id} i={i} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
