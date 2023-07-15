import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App.jsx";
// 4 DarkMode- import theme dark switch, 5- set the theme={theme} in chakra provider below & import & use ColorModeScript as given below,
// after that inspect => application => local storage, you'll see light mode, delete it and refresh page, now page is dark mode coz chakra save this setting in local storage
import theme from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
