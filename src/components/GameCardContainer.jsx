import { Box } from "@chakra-ui/layout";

const GameCardContainer = ({ children }) => {
  // box container GameCard & GameCardSkeleton
  return (
    <Box overflow="hidden" borderRadius={10}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
