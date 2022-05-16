import React from "react";
// import { useTranslation } from "next-i18next";
import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";

const CommunityIntro = () => {
  // const { t: pageTranslation } = useTranslation("page-language");

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
              What is OCC?
            </Text>
            <Box maxW={{ base: "md", md: "full" }}>
              <Text
                fontSize={{ base: "md", lg: "md" }}
                textAlign="left"
                lineHeight={{ base: "7", md: "8" }}
                color="brand.grey-80"
              >
                OCC is short for Open, Collaborative and Community driven approach in the effort to
                install a truly decentralized network to connect billions of unserved, underserved
                and ordinary people across the world. It is no different from the initial days of
                the internet where the only CEO was the community who believed when others around
                dismissed the idea. But the community would not have found long lasting success if
                not for the open source architecture of the internet. If it was privatized or
                commoditized, it could still be successful but not at a scale we see today uplifting
                billions out of poverty. With the introduction of cryptography in open source
                blockchain, we have a great opportunity to make that success reach more people and
                communities than ever without compromising on privacy or security.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Container>
    </Flex>
  );
};

export default CommunityIntro;
