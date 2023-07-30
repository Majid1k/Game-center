import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image } from "@chakra-ui/react";

const Emoji = ({ rating }) => {
  if (rating < 3) return null;

  // instead of using bunch of if-else statements we use object and declare which image we want to show on rating 3-5
  const emojiMap = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  // return image that will have object[as per rating number]
  return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
