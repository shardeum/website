import { Box, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  text: string;
  variant?: "primary" | "outlined";
};

const CustomButton = ({ text, variant = "primary" }: Props) => {
  return (
    <Box
      cursor="pointer"
      textAlign={["center", "center", "left"]}
      maxW={["100%", "100%", "15rem"]}
      backgroundColor={variant === "outlined" ? "transparent" : "#4150EA"}
      border={variant === "outlined" ? "1px solid #fff" : "none"}
      px="2.3rem"
      py={["1rem", "1rem", "1.125rem"]}
    >
      <Text textAlign="center" fontSize="xl">
        {text}
      </Text>
    </Box>
  );
};

export default CustomButton;
