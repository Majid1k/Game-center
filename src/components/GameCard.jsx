import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

const GameCard = ({ i }) => {
  return (
    <>
      {/*owerflow keeps the images equal to the size of its map container */}
      <Card width="250px" overflow="hidden" borderRadius={10}>
        {/*getCroppedImage coming from image-url.js to reduce the image size */}
        <Image src={getCroppedImageUrl(i.background_image)} />{" "}
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
