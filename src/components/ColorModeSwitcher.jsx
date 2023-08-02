// Chakra Dark mode switch
import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export const ColorModeSwitcher = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <HStack>
        <Switch
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <Text fontSize="sm" whiteSpace="nowrap">
          Dark Mode
        </Text>
      </HStack>
    </>
  );
};
