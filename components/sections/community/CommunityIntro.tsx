import React from "react";
import { useTranslation } from "next-i18next";
import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";

const CommunityIntro = () => {
  const { t: pageTranslation } = useTranslation("page-community");

  return (
    <Flex bg="brand.white" as="section">
      <Container maxW="container.xl" mx="auto" p="6" px={{ base: 6, xl: 0 }} pt="16" pb="32">
        <Box bg="#E9EAFC" p="48px">
          <VStack spacing={2} width="100%" alignItems="start">
            <Text
              as="h3"
              textAlign="left"
              lineHeight="normal"
              fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
              fontWeight="bold"
              width="100%"
              color="#2031E6"
            >
              {pageTranslation("page-community-occ-h1")}
            </Text>
            <Box maxW={{ base: "md", md: "full" }}>
              <Text
                fontSize={{ base: "md", lg: "md" }}
                textAlign="left"
                lineHeight={{ base: "7", md: "8" }}
                color="brand.grey-80"
              >
                {pageTranslation("page-community-occ-description")}
              </Text>
            </Box>
          </VStack>
        </Box>
      </Container>
    </Flex>
  );
};

export default CommunityIntro;
