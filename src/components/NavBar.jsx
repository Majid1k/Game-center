import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import SearchInput from "./SearchInput";

const NavBar = ({ onSearch }) => {
  return (
    <>
      <HStack padding="10px">
        <Image src={logo} boxSize="55px" filter={"hue-rotate(-130deg)"} />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitcher />
      </HStack>
    </>
  );
};

export default NavBar;
