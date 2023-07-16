/* Chakra-Ui => Color MOde for dark mode theme , first of all we create theme file here, then we pass that 
theme to chakra provider in main.jsx file, then we set colorModeScheme, untill this step dark mode in set locally in browser
, then in colorModeSwither create switch botton (if color is dark then reverse the color)*/

import { extendTheme } from "@chakra-ui/react"; // 1- import extend theme

const config = {
  // 2- create an object for initial color property
  initialColorMode: "dark",
};

// 3- call extendTheme function and pass config object in it
const theme = extendTheme({
  config,
});

// 4- import and use in main.jsx
export default theme;

/*
colors: {
  gray: {
    50: "#f9f9f9",
    100: "#ededed",
    200: "#d3d3d3",
    300: "#b3b3b3",
    400: "#a0a0a0",
    500: "#898989",
    600: "#6c6c6c",
    700: "#202020",
    800: "#121212",
    900: "#111",
  }, */
