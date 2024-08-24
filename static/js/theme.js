import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: {
    body: {
      bgColor: "#000",
      color: "#ddd",
      /*
      bg: 'url("/assets/img/background.jpg")',
      bgRepeat: "repeat",
      bgPosition: "0 0",
      bgSize: "100vh auto",
      imageRendering: "pixelated",
      color: "#ddd",
      animation: "bg-move-loop 100000s linear infinite",
      */
    },
  },
};

export default extendTheme({ config, styles });
