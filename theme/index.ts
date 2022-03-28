import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  semanticTokens: {
    colors: {
      background: {
        default: "#ffffff",
        _dark: "#080808",
      },
      error: "red.500",
      text: {
        default: "gray.900",
        _dark: "gray.50",
      },
      linkHover: {
        default: "blackAlpha.200",
        _dark: "whiteAlpha.200",
      },
    },
  },
});

export default customTheme;
