import { HStack } from "@chakra-ui/layout";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa"; //importing icons from font awesome
import { MdPhoneIphone } from "react-icons/md"; // icon from matirial design, no need npm i
import { SiNintendo } from "react-icons/si"; // no need npm i
import { BsGlobe } from "react-icons/bs"; // from bootstarp   no need npm i
import { Icon } from "@chakra-ui/icon";

const PlatformIconList = ({ i }) => {
  // to show imported icons we create an object so we display them easily, in Icon we connect this object with platform.slug to render icons as per slug
  const iconMap = {
    pc: FaWindows, // using slug as key instead of platform name, slug is lower case name, defined in is
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={"10px"}>
      {i.parent_platforms.map(({ platform }) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};
/*we destructure .map({platform}) & bring out platform property, because in console we see,parent_platform array has further (platform object that has propertiies in it)
instead of direct properties, and each object has a platform object, thats why we bring in out*/

export default PlatformIconList;
