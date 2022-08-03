import { Box, Container, Image, Text } from "@chakra-ui/react";
import TimelineGrid from "./TimelineGrid";

function HackathonTimeline() {
  return (
    <Box id="section-5" position="relative">
      <Image
        src="/hackathon/section-4-background.png"
        position="absolute"
        width="100%"
        height="100%"
        objectFit="fill"
        top={0}
        zIndex="-1"
        left={0}
        alt="background-image"
      />
      <Container
        mx="auto"
        maxW="container.xl"
        px={[4, 4, 8]}
        pt={{ base: 20, md: 16 }}
        pb={{ base: 20, md: 16 }}
      >
        <Text
          as="h2"
          textAlign="center"
          lineHeight="normal"
          fontSize={{ base: "4xl", sm: "6xl", lg: "7xl" }}
          fontWeight="bold"
          width="100%"
          color="brand.white"
          mb="3.25rem"
        >
          Hackathon Schedule
        </Text>

        <TimelineGrid />
      </Container>
    </Box>
  );
}

export default HackathonTimeline;
