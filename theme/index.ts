import { extendTheme, ThemeOverride, ConfigColorMode } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import Button from "./components/Button";
import Link from "./components/Link";
import THEME from "../constants/theme";
import Input from "./components/Input";

type ColorProps = ThemeOverride["colors"];

const colors: ColorProps = {
  brand: {
    "blue-5": "#E9EAFC",
    "blue-10": "#DCDEFA",
    "blue-20": "#C9CDF9",
    "blue-25": "#B0B5F5",
    "blue-40": "#3241E8",
    "blue-50": "#2D3BD4",
    "blue-70": "#3735EC",
    "blue-90": "#0029DD",
    secondaryHover: "#424242",
    success: "#1A8038",
    black: "#000000",
    white: "#FFFFFF",
    secondaryTextColor: "#fff",
    "grey-95": "#101010",
    "grey-90": "#212121",
    "grey-5": "#FAFAFA",
    "grey-50": "#9E9E9E",
    "grey-10": "#F5F5F5",
    "grey-60": "#757575",
    "grey-20": "#EEEEEE",
    "grey-70": "#616161",
    "grey-30": "#E0E0E0",
    "grey-80": "#424242",
    "grey-40": "#BDBDBD",
    orange: "#EC5B29",
    blue: "#2031E2",
    "green-5": "#EDFFFA",
    "green-10": "#D7F6EE",
    "green-70": "#4EB59A",
    "green-90": "#118263",
    "yellow-5": "#FFF9F1",
    "yellow-10": "#FFEFD9",
    "yellow-70": "#FFCE88",
    "yellow-90": "#FF9900",
    "red-5": "#FCF4F4",
    "red-10": "#FFE9E9",
    "red-70": "#DE7171",
    "red-90": "#B70A0A",
    "orange-20": "#FFAE93",
    "orange-80": "#C3491F",
  },
};

const customTheme: ThemeOverride = {
  config: {
    initialColorMode: THEME.DARK as ConfigColorMode,
  },
  styles: {
    global: () => {
      return {
        body: {
          bg: "brand.red",
        },
      };
    },
  },
  colors: colors,
  semanticTokens: {
    colors: {
      background: {
        default: "#ffffff",
        _dark: "#080808",
      },
      error: "red.500",
      text: {
        default: "gray.50",
      },
      linkHover: {
        default: "whiteAlpha.200",
      },
    },
  },
  fonts: {
    body: "Satoshi-Variable, Roboto",
    heading: "Satoshi-Variable, Roboto",
  },
  components: {
    Button,
    Link,
    Input: {
      ...Input,
    },
    Container: {
      baseStyle: {
        px: 6,
      },
      sizes: {
        baseStyle: {
          base: {
            px: 6,
          },
        },
      },
    },
  },
};

export default extendTheme(customTheme);
