import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
const GameCard = ({ i }) => {
  return (
    <>
      {/*owerflow keeps the images equal to the size of its map container */}
      <Card overflow="hidden" borderRadius={10}>
        <Image src={getCroppedImageUrl(i.background_image)} />{" "}
        {/*getCroppedImage coming from image-url.js */}
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
