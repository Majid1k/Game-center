// skeleton is a blurred copy of gamecard which will be shown when card is fetching data/loading, mimic the gameCard below
import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <>
      {/*Give same properties to card and skeleton */}
      <Card width="250px" overflow="hidden" borderRadius={10}>
        <Skeleton height={200}></Skeleton>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};
export default GameCardSkeleton;
