import { extendTheme } from "@chakra-ui/react";
import THEME from "../constants/theme";

const customTheme = extendTheme({
  config: {
    initialColorMode: THEME.DARK,
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
