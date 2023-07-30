import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

const GameCard = ({ i }) => {
  return (
    <>
      {/*owerflow keeps the images equal to the size of its map container */}
      <Card>
        {/*getCroppedImage coming from image-url.js to reduce the image size */}
        <Image src={getCroppedImageUrl(i.background_image)} />
        <CardBody>
          <HStack justifyContent={"space-between"} marginBottom="3px">
            <PlatformIconList i={i} />
            <CriticScore i={i} />
          </HStack>
          <Heading fontSize="1xl">{i.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
