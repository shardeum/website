/* 
This is the common hero section which will be used in most of the pages
*/

import { Box, Container, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";

// Props for the Hero component
type HeroProps = {
  heading?: React.ReactNode;
  description?: React.ReactNode;
  cta?: React.ReactNode;
  media?: React.ReactNode;
};

const Hero = ({ heading, description, cta, media }: HeroProps) => {
  return (
    <Flex h={["80vh", "90vh"]} justifyContent="center" alignItems="center" mt={{ base: 10, lg: 0 }}>
      <Container maxW="container.xl" mx="auto">
        <SimpleGrid columns={[1, 1, 2]} gap={["8", "12"]}>
          <VStack alignItems={{ base: "center", md: "flex-start" }} spacing={[8]}>
            <VStack spacing={2}>
              <Text
                as="h2"
                textAlign={{ base: "center", md: "left" }}
                lineHeight="normal"
                fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
                fontWeight="bold"
                color="text"
              >
                {heading}
              </Text>
              <Box maxW={{ base: "md", md: "full" }}>
                <Text
                  fontSize={{ base: "md", lg: "xl" }}
                  textAlign={{ base: "center", md: "left" }}
                >
                  {description}
                </Text>
              </Box>
            </VStack>
            {cta}
          </VStack>
          {media ? media : <Box h={["60", "80"]} bg="brand.grey-90"></Box>}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Hero;
