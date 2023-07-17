import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

const GameCard = ({ i }) => {
  return (
    <>
      {/*owerflow keeps the images equal to the size of its map container */}
      <Card overflow="hidden" borderRadius={10}>
        <Image src={i.background_image} />
        <CardBody>
          <Heading fontSize="1xl">{i.name}</Heading>
          <PlatformIconList i={i} />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
