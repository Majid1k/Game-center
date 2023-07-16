import useGames from "../hooks/useGames";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  /* we had all our hooks & effect here but to make them custom/reuseable we moved them in hooks folder inside a function, 
after importing this function we destructure that object(inside that function) & use games & error array here,code is clean and reusable */
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((i) => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
