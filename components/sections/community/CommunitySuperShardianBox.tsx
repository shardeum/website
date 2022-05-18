import React from "react";
import { useTranslation } from "next-i18next";
import { Box, Button, Container, Flex, LightMode, Text, VStack } from "@chakra-ui/react";
import { SUPERSHARDIAN_URL } from "constants/links";

const CommunitySuperShardianBox = () => {
  const { t: pageTranslation } = useTranslation("page-community");

  return (
    <Flex bg="brand.white" as="section">
      <Container maxW="container.xl" mx="auto" p="6" px={{ base: 6, xl: 0 }} pt="16" pb="16">
        <Box bg="#FCF4E9" p="48px">
          <VStack spacing={2} width="100%" alignItems="start">
            <Text
              as="h3"
              textAlign="left"
              lineHeight="normal"
              fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
              fontWeight="bold"
              width="100%"
              color="#EC5B29"
            >
              {pageTranslation("page-community-supershardians-h1")}
            </Text>
            <Box maxW={{ base: "md", md: "full" }}>
              <Text
                fontSize={{ base: "md", lg: "md" }}
                textAlign="left"
                lineHeight={{ base: "7", md: "8" }}
                color="brand.grey-80"
              >
                {pageTranslation("page-community-supershardians-description")}
              </Text>
            </Box>
            <LightMode>
              <Button
                as="a"
                variant="secondary"
                size="lg"
                rel="noopener noreferrer"
                target="_blank"
                href={SUPERSHARDIAN_URL}
              >
                {pageTranslation("page-community-supershardians-cta")}
              </Button>
            </LightMode>
          </VStack>
        </Box>
      </Container>
    </Flex>
  );
};

export default CommunitySuperShardianBox;
