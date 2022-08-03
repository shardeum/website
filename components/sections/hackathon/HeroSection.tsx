import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import React from "react";
import CustomButton from "./CustomButton";

function HeroSection() {
  return (
    <Box background="#000" position="relative" h="100vh" maxW="100%">
      <Image
        src="/hackathon/hero-background.png"
        position="absolute"
        width="100%"
        height="100%"
        alt="background"
      />

      <Image
        src="/hackathon/hero-floating-image.png"
        display={["none", "none", "block"]}
        width="34.365rem"
        position="absolute"
        height="31.25rem"
        bottom="0"
        right="0"
        transform="translateY(20%)"
      />

      <Container
        mx="auto"
        maxW="container.xl"
        px={{ base: 8, xs: 4, sm: 4, xl: 0 }}
        pt={{ base: 4, md: 16 }}
        pb={{ base: 20, md: 16 }}
      >
        <Box
          position="absolute"
          top="50%"
          transform="translateY(-55%)"
          minH={["fit-content", "32.375rem"]}
          maxW={["44.3rem"]}
          padding={["1rem", "1rem", "2.5rem"]}
          mt={[0, 0, 0, 0]}
          margin={[4, 6]}
          sx={{
            background:
              "linear-gradient(144.1deg, rgba(255, 255, 255, 0.252) -6.59%, rgba(255, 255, 255, 0) 103.67%)",
            border: "1px solid #808080",
            filter: "drop-shadow(0px 20px 24px rgba(0, 0, 0, 0.1))",
            borderRadius: ".25rem",
            backdropFilter: "blur(200px)",
          }}
        >
          <Text
            as="h2"
            textAlign={["center", "center", "left"]}
            lineHeight="4.5rem"
            fontSize={{ base: "4xl", sm: "6xl", lg: "7xl" }}
            fontWeight="bold"
            width="100%"
            color={"brand.white"}
          >
            #BuildWeb3
          </Text>
          <Text
            as="h2"
            textAlign={["center", "center", "left"]}
            lineHeight="4.5rem"
            fontSize={{ base: "4xl", sm: "6xl", lg: "7xl" }}
            fontWeight="bold"
            width="100%"
            bgGradient="linear-gradient(97.77deg, #00B2FF -2.3%, #579AFF 29.87%, #D93FFF 57.73%, #FC4236 84.99%, #FFF500 113.99%)"
            backgroundClip="text"
          >
            Hackathon 2022
          </Text>
          <Text
            as="h2"
            textAlign={["center", "center", "left"]}
            lineHeight="4.5rem"
            fontSize={{ base: "4xl", sm: "6xl", lg: "7xl" }}
            fontWeight="bold"
            width="100%"
            color={"brand.white"}
            marginBottom={4}
          >
            Shardeum India
          </Text>
          <Text
            bgGradient="linear-gradient(97.77deg, #00B2FF -2.3%, #579AFF 29.87%, #D93FFF 57.73%, #FC4236 84.99%, #FFF500 113.99%)"
            backgroundClip="text"
            fontWeight={700}
            fontSize="2xl"
            marginBottom={4}
            textAlign={["center", "center", "left"]}
          >
            Online Hackathon | $25K Worth Prizes | Aug 27 - Sep 24 2022
          </Text>
          <Text
            fontWeight={500}
            backgroundClip="text"
            fontSize="large"
            marginBottom={4}
            color="brand.white"
            textAlign={["center", "center", "left"]}
          >
            Build Your DApps On The World’s First EVM-Based Dynamic State Sharded L1
          </Text>
          <CustomButton text="Register Now" />
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection;
