import {
  Box,
  Button,
  Container,
  Flex,
  SimpleGrid,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      h={["80vh"]}
      justifyContent="center"
      alignItems="center"
      mt={{ base: 20, xl: 0 }}
      bg="brand.black"
    >
      <Container maxW="container.xl" mx="auto" p="6" px={{ base: 6, lg: 0 }}>
        <SimpleGrid columns={[1, null, 1, 2]} gap={["8", "12"]}>
          <VStack alignItems="flex-start" spacing={[8]}>
            <VStack spacing={2} width="100%" maxW={{ base: "md", md: "lg", lg: "full" }}>
              <Text
                as="h2"
                textAlign="left"
                lineHeight="normal"
                fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                fontWeight="bold"
                width="100%"
                color="brand.white"
              >
                Decentralization for Everyone
              </Text>
              <Box maxW={{ base: "md", md: "full" }}>
                <Text
                  fontSize={{ base: "md", lg: "xl" }}
                  textAlign="left"
                  lineHeight={{ base: "7", md: "8" }}
                  color="brand.grey-20"
                >
                  Shardeum is the first linearly scalable smart contract blockchain being built by
                  the people for the people
                </Text>
              </Box>
            </VStack>
            <Button variant="primary" size="lg">
              Join Us
            </Button>
          </VStack>
          <Box h={["60", "80"]} bg="brand.grey-90"></Box>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Hero;
