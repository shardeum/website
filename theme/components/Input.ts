import { ComponentStyleConfig } from "@chakra-ui/react";

const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      borderWidth: 1,
      borderColor: "transparent",
      _focus: {
        borderColor: "brand.blue",
        borderWidth: 1,
      },
      _placeholder: {
        color: "brand.grey-60",
      },
      padding: "20px 24px",
      bgColor: "brand.grey-30",
      color: "brand.grey-90",
      fontWeight: "medium",
    },
  },
  sizes: {},
  defaultProps: {
    variant: null,
    size: null,
    errorBorderColor: "red",
  },
};

export default Input;
