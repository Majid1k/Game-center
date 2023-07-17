import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
const GameCard = ({ i }) => {
  return (
    <>
      {/*owerflow keeps the images equal to the size of its map container */}
      <Card overflow="hidden" borderRadius={10}>
        <Image src={i.background_image} />
        <CardBody>
          <Heading fontSize="1xl">{i.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformIconList i={i} />
            <CriticScore i={i} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
