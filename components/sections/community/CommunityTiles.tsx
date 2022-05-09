import React from "react";
// import { useTranslation } from "next-i18next";
// import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";

const tilesData = [
  { title: "Discord", icon: "Hello" },
  { title: "YouTube", icon: "Hello" },
  { title: "Twitter", icon: "Hello" },
  { title: "Telegram", icon: "Hello" },
  { title: "Reddit", icon: "Hello" },
  { title: "GitHub", icon: "Hello" },
  { title: "LinkedIn", icon: "Hello" },
];

const CommunityTiles = () => {
  // const { t: pageTranslation } = useTranslation("page-language");

  return (
    <Flex bg="brand.white" as="section">
      <Container maxW="container.xl" mx="auto" pb="32">
        <Box>
          <VStack spacing={2} width="100%" alignItems="start">
            <Text
              as="h3"
              textAlign="left"
              lineHeight="normal"
              fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
              fontWeight="bold"
              width="100%"
              color="brand.grey-90"
            >
              Join the Community
            </Text>
            <Box maxW={{ base: "md", md: "full" }}>
              <Text
                fontSize={{ base: "md", lg: "md" }}
                textAlign="left"
                lineHeight={{ base: "7", md: "8" }}
                color="brand.grey-80"
              >
                Join Shardeum’s global community today via official channels and start collaborating
                with like minded Shardians to benefit from each other’s knowledge
              </Text>
            </Box>

            {tilesData?.map((tile) => (
              <Box key={tile.title}>
                <Text
                  fontSize={{ base: "md", lg: "md" }}
                  textAlign="left"
                  lineHeight={{ base: "7", md: "8" }}
                  color="brand.grey-80"
                >
                  {tile.title}
                </Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </Container>
    </Flex>
  );
};

export default CommunityTiles;
