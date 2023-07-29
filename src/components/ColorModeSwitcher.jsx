import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"; // useColorMode is a color switch hook in chakra

export const ColorModeSwitcher = () => {
  // destructure useColorMode & bring out two properties (toggle changes the color & colorMode represents current color) , this hook works as switch
  const { toggleColorMode, colorMode } = useColorMode();

  // This component holds toggle button & text
  return (
    <>
      <HStack>
        <Switch
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        {/* white space property unwraps (show text is row, not in ciolumn) */}
        <Text fontSize="sm" whiteSpace="nowrap">
          Dark Mode
        </Text>
      </HStack>
    </>
  );
}; // isChecked= initial color mode should be dark
