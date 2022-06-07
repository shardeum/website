import { ComponentStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "none",
    paddingTop: "17px",
    paddingBottom: "17px",
    paddingLeft: "28px",
    paddingRight: "28px",
    fontWeight: "medium",
  },
  variants: {
    primary: () => {
      return {
        backgroundColor: "brand.blue",
        color: "brand.white",
        _hover: {
          backgroundColor: "brand.blue-40",
        },
        _active: {
          backgroundColor: "brand.blue-50",
        },
        "&:disabled": {
          backgroundColor: "brand.blue-40",
          cursor: "not-allowed",
          _hover: {
            backgroundColor: "brand.blue-40",
          },
        },
      };
    },
    secondary: (props) => {
      return {
        backgroundColor: mode("brand.grey-90", "brand.grey-5")(props),
        color: mode("brand.white", "brand.black")(props),
        _hover: {
          backgroundColor: mode("brand.secondaryHover", "brand.grey-30")(props),
        },
        "&:active": {
          backgroundColor: mode("brand.black", "brand.grey-10")(props),
        },
        "&:disabled": {
          backgroundColor: mode("brand.grey-90", "brand.grey-90")(props),
          color: "brand.grey-40",
          "&:hover": {
            backgroundColor: mode("brand.grey-90", "brand.grey-90")(props),
            cursor: "not-allowed",
          },
        },
      };
    },
    tertiary: {
      backgroundColor: "brand.blue-10",
      color: "brand.blue",
      _hover: {
        backgroundColor: "brand.blue-80",
      },
      "&:active": {
        backgroundColor: "brand.blue-20",
      },
    },
    orange: () => {
      return {
        backgroundColor: "brand.orange",
        _hover: {
          backgroundColor: "brand.orange-80",
        },
      };
    },
  },
  defaultProps: {
    colorScheme: "facebook",
    variant: "primary",
    size: "lg",
  },
};

export default Button;
