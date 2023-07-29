import { Heading } from "@chakra-ui/react";

const GameHeading = ({ gameQuery }) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={4} fontSize="4xl">
      {heading}{" "}
    </Heading>
  );
};

export default GameHeading;
