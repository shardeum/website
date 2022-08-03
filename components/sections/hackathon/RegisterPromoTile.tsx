import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import CustomButton from "./CustomButton";

type Props = {
  gradientTitleIndex: 0 | 1;
  firstLine: string;
  secondLine: string;
  description: string;
  reverse: boolean;
};

function RegisterPromoTile({
  gradientTitleIndex,
  firstLine,
  secondLine,
  description,
  reverse,
}: Props) {
  return (
    <Flex
      flexDirection={
        reverse
          ? ["column-reverse", "column-reverse", "row-reverse"]
          : ["column-reverse", "column-reverse", "row"]
      }
      alignItems="center"
      borderRadius="0.25rem"
      backgroundColor={reverse ? "#333" : "brand.grey-90"}
    >
      <Box
        flexBasis={["100%", "100%", "50%"]}
        py={[4, 6, "3rem"]}
        pl={[4, 6, reverse ? 0 : 10, 10]}
        pr={[4, 6, reverse ? 10 : 0, 10]}
      >
        <Text
          as="h2"
          textAlign="left"
          lineHeight="1.2"
          fontSize={{ base: "4xl", sm: "6xl", md: "6xl", lg: "7xl" }}
          fontWeight="bold"
          width="100%"
          bgGradient={
            gradientTitleIndex === 0
              ? "linear-gradient(97.77deg, #00B2FF -2.3%, #579AFF 29.87%, #D93FFF 57.73%, #FC4236 84.99%, #FFF500 113.99%)"
              : "none"
          }
          backgroundClip={gradientTitleIndex === 0 ? "text" : "unset"}
        >
          {firstLine}
        </Text>
        <Text
          as="h2"
          textAlign="left"
          lineHeight="1.2"
          fontSize={{ base: "4xl", sm: "6xl", md: "6xl", lg: "7xl" }}
          fontWeight="bold"
          width="100%"
          bgGradient={
            gradientTitleIndex === 1
              ? "linear-gradient(97.77deg, #00B2FF -2.3%, #579AFF 29.87%, #D93FFF 57.73%, #FC4236 84.99%, #FFF500 113.99%)"
              : "none"
          }
          backgroundClip={gradientTitleIndex === 1 ? "text" : "unset"}
          mb="1.75rem"
        >
          {secondLine}
        </Text>
        <Text
          as="h2"
          textAlign="start"
          lineHeight="short"
          fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
          fontWeight="bold"
          width="100%"
          color="brand.white"
          mb="1.75rem"
        >
          Aug 27 - Sept 25
        </Text>

        <Text mb="1.75rem" lineHeight="1.3" fontSize="2xl">
          {description}
        </Text>
        <CustomButton text="Apply Now" />
      </Box>
      <Image
        width="23rem"
        flexBasis={["100%", "100%", "50%"]}
        src="/hackathon/section-3-last-tile-image.png"
      />
    </Flex>
  );
}

export default RegisterPromoTile;
