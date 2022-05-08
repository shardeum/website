import { ComponentStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const Input: ComponentStyleConfig = {
  baseStyle: (props) => ({
    field: {
      borderWidth: 1,
      borderColor: "transparent",
      _focus: {
        borderColor: mode("brand.blue", "brand.blue")(props),
        borderWidth: 1,
      },
      _placeholder: {
        color: mode("brand.grey-60", "brand.grey-10")(props),
      },
      padding: "20px 24px",
      bgColor: mode("brand.grey-30", "brand.grey-80")(props),
      color: mode("brand.grey-90", "brand.grey-20")(props),
      fontWeight: "medium",
    },
  }),
  sizes: {},
  defaultProps: {
    variant: "light",
    size: null,
    errorBorderColor: "red",
  },
};

export default Input;
