import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  text: string;
  imageName: string;
  active: boolean;
  onClick: () => void;
};

function GradientButton({ text, imageName, active, onClick }: Props) {
  return (
    <Button
      flexGrow={[1, 1, 0]}
      bgGradient={
        active
          ? "linear-gradient(97.77deg, #00B2FF -2.3%, #579AFF 29.87%, #D93FFF 57.73%, #FC4236 84.99%, #FFF500 113.99%)"
          : ""
      }
      style={{
        WebkitMarginStart: 0,
      }}
      background={!active ? "brand.grey-40" : ""}
      _hover={{
        background:
          "linear-gradient(97.77deg, #00B2FF -2.3%, #579AFF 29.87%, #D93FFF 57.73%, #FC4236 84.99%, #FFF500 113.99%)",
        opacity: "0.7",
      }}
      padding="2px"
      minH={["2.5rem", "3rem", "4.5rem"]}
      onClick={onClick}
      _focus={{
        outline: "none",
      }}
    >
      <Flex
        py={4}
        px={[2, 4, 8]}
        columnGap={[2, 4, 8]}
        alignItems="center"
        width={"100%"}
        height={"100%"}
        background="brand.white"
      >
        <Image boxSize={["1.5rem", "1.875rem", "2.75rem"]} src={`/hackathon/${imageName}.svg`} />
        <Text color={active ? "brand.black" : "#7A7A7A"}>{text}</Text>
      </Flex>
    </Button>
  );
}

export default GradientButton;
