import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  ecoSystem: string;
  description: string;
  imageLocation: string;
};

function HorizontalTile({ ecoSystem, description, imageLocation }: Props) {
  return (
    <Box padding="2.5rem" w="100%" position="relative">
      <Image
        src="/hackathon/section-3-horizontal-tile-background.png"
        position="absolute"
        zIndex="-1"
        objectFit="fill"
        left={0}
        top={0}
        w="100%"
        h="100%"
      />
      <Flex
        w="100%"
        flexDirection={["column", "column", "row"]}
        alignItems={["center", "flex-start"]}
        borderBottom="1px solid #555"
        columnGap={[0, 6, 9]}
        pb={8}
      >
        <Box
          w="8.75rem"
          minW="8.75rem"
          h="8.75rem"
          minH="8.75rem"
          p={6}
          mb={[6, 7, 0]}
          sx={{
            background:
              "linear-gradient(144.1deg, rgba(255, 255, 255, 0.252) -6.59%, rgba(255, 255, 255, 0) 103.67%)",
            border: "1px solid #7A7A7A",
            backdropFilter: "blur(30px)",
            borderRadius: "0.5rem",
          }}
        >
          <Image src={imageLocation} alt="vector" boxSize="100%" />
        </Box>
        <Box>
          <Text
            as="h2"
            textAlign={["center", "start"]}
            lineHeight="short"
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            fontWeight="bold"
            width="100%"
            color="brand.white"
            mb="0.5rem"
          >
            {ecoSystem}
          </Text>
          <Text
            textAlign={["center", "start"]}
            fontSize="2xl"
            fontWeight="normal"
            color="brand.white"
          >
            {description}
          </Text>
        </Box>
      </Flex>
      <Flex direction={["column", "column", "row"]} alignItems={["center", "flex-start"]} pt={8}>
        <Box borderRight={["none", "none", "1px solid #555"]} flexBasis="33.33%" textAlign="center">
          <Text color="brand.white" fontSize="xl" fontWeight="normal">
            First Prize
          </Text>
          <Text
            fontSize={{ base: "4xl", sm: "6xl", lg: "7xl" }}
            bgGradient="linear-gradient(97.77deg, #00B2FF -2.3%, #579AFF 29.87%, #D93FFF 57.73%, #FC4236 84.99%, #FFF500 113.99%)"
            backgroundClip="text"
            textShadow="0px 8px 24px rgba(0, 0, 0, 0.15)"
            fontWeight="bold"
          >
            $2500
          </Text>
        </Box>
        <Divider my={6} display={["block", "block", "none"]} width="50%" />
        <Box borderRight={["none", "none", "1px solid #555"]} flexBasis="33.33%" textAlign="center">
          <Text color="brand.white" fontSize="xl" fontWeight="normal">
            Second Prize
          </Text>
          <Text
            fontSize={{ base: "4xl", sm: "6xl", lg: "7xl" }}
            color="brand.white"
            textShadow="0px 8px 24px rgba(0, 0, 0, 0.15)"
            fontWeight="bold"
          >
            $1500
          </Text>
        </Box>
        <Divider my={6} display={["block", "block", "none"]} width="50%" />
        <Box flexBasis="33.33%" textAlign="center">
          <Text color="brand.white" fontSize="xl" fontWeight="normal">
            Third Prize
          </Text>
          <Text
            fontSize={{ base: "4xl", sm: "6xl", lg: "7xl" }}
            color="brand.white"
            textShadow="0px 8px 24px rgba(0, 0, 0, 0.15)"
            fontWeight="bold"
          >
            $1000
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default HorizontalTile;
