import { FC } from "react";

import { Button, ButtonProps } from "@chakra-ui/react";

export type HorizontalTileButtonProps = ButtonProps;

export const HorizontalTileButton: FC<HorizontalTileButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      p={4}
      marginInlineStart={0}
      variant="outline"
      fontSize="md"
      w="100%"
      bg="brand.grey-5"
      color="brand.grey-90"
      _hover={{ color: "brand.grey-5", bg: "brand.grey-90" }}
      _focus={{ outline: "none" }}
      {...props}
    >
      {children}
    </Button>
  );
};
