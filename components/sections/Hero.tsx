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

const Hero = ({ heading, description, cta, media, ...args }: HeroProps) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      mt={{ base: 20, xl: 0 }}
      bg="brand.black"
      {...args}
    >
      <Container maxW="container.xl" mx="auto" p="6" px={{ base: 6, xl: 0 }} py="3%">
        <SimpleGrid columns={[1, null, null, 1, 2]} gap={["8", "12"]} alignItems="center">
          <VStack alignItems="flex-start" spacing={[8]}>
            <VStack
              spacing={2}
              width="100%"
              maxW={{ base: "md", md: "lg", lg: "full" }}
              alignItems="start"
            >
              <Text
                as="h2"
                textAlign="left"
                lineHeight="normal"
                fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                fontWeight="bold"
                width="100%"
                color="brand.white"
              >
                {heading}
              </Text>
              <Box maxW={{ base: "md", md: "full" }}>
                <Text
                  fontSize={{ base: "md", lg: "xl" }}
                  textAlign="left"
                  lineHeight={{ base: "7", md: "8" }}
                  color="brand.grey-20"
                >
                  {description}
                </Text>
              </Box>
            </VStack>
            {cta}
          </VStack>

          {/* The media on the right */}
          {media ? media : <Box h={["60", "80"]} bg="brand.grey-90"></Box>}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Hero;
