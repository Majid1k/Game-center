import { HStack, Image, Input, Switch } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize="55px" filter={"hue-rotate(-130deg)"} />
        <Input placeholder="Search Games" size="md" />
        <Switch colorScheme="teal" size="md" />
        <h1>Dark Mode</h1>
      </HStack>
    </>
  );
};

export default NavBar;
