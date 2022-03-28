/*
 Used for styling the links in the navbar
 Will display children
*/

import { Link as ChakraLink } from "@chakra-ui/react";
import { css } from "@emotion/css";

const Link = (props: any) => {
  const getStyling = (variant: string | null) => {
    switch (variant) {
      case "navlink":
        return css`
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          cursor: pointer;
          border-radius: 0.25rem;
          &:hover {
            background: var(--chakra-colors-linkHover);
            text-decoration: none;
          }
        `;
        break;

      default:
        break;
    }
  };

  return (
    <ChakraLink color="text" className={getStyling(props.variant)} {...props}>
      {props.children}
    </ChakraLink>
  );
};

export default Link;
