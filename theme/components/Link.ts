import type { ComponentStyleConfig } from "@chakra-ui/theme";

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
const Link: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    cursor: "pointer",
    fontSize: "0.9rem",
  },
  // 1 variant for now : navlink
  variants: {
    navlink: {
      px: "0.5rem",
      py: "1rem",
      borderRadius: "0.25rem",
      _hover: {
        background: "var(--chakra-colors-linkHover)",
        textDecoration: "none",
      },
    },
  },
  // The default size and variant values
  defaultProps: {}, // no default props
};

export default Link;
