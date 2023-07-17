import { Badge } from "@chakra-ui/layout";

const CriticScore = ({ i }) => {
  // conditional for background color
  let color = i.metacritic > 75 ? "green" : i.metacritic > 60 ? "yellow" : "";
  return (
    <>
      <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius={5}>
        {i.metacritic}
      </Badge>
    </>
  );
}; // Badge is a small box, colorScheme change entire color of front,back,shadow etc but color changes only background

export default CriticScore;
