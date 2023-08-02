import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

const GameCard = ({ i }) => {
  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(i.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList i={i} />
            <CriticScore i={i} />
          </HStack>
          <Heading fontSize="xl">
            {i.name}
            <Emoji rating={i.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};
export default GameCard;
