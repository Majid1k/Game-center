// skeleton is a blurred copy of gamecard which will be shown when card is fetching data/loading, mimic the gameCard below
import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <>
      {/*Give same properties to card and skeleton */}
      <Card>
        <Skeleton height="200px" width="200px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};
export default GameCardSkeleton;
