// as we know our gameCard & GameCard skeleton has the same sizing & display styles, we define them here & use this to avoid style repeating

import { Box } from "@chakra-ui/layout";

const GameCardContainer = ({ children }) => {
  // create a box container and assign the styling, wrap GameCard & GameCardSkeleton in GameCardContainer as children in GameGrid.jsx
  return (
    <Box width="250px" overflow="hidden" borderRadius={10}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
