import { Badge } from "@chakra-ui/layout";

const CriticScore = ({ i }) => {
  let color = i.metacritic > 75 ? "green" : i.metacritic > 60 ? "yellow" : "";
  return (
    <>
      <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius={5}>
        {i.metacritic}
      </Badge>
    </>
  );
};

export default CriticScore;
