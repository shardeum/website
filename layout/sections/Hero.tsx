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
      h={["80vh", "90vh"]}
      justifyContent="center"
      alignItems="center"
      mt={{ base: 10, lg: 0 }}
    >
      <Container maxW="container.xl" mx="auto">
        <SimpleGrid columns={[1, 1, 2]} gap={["8", "12"]}>
          <VStack
            alignItems={{ base: "center", md: "flex-start" }}
            spacing={[8]}
          >
            <VStack spacing={2}>
              <Text
                as="h2"
                textAlign={{ base: "center", md: "left" }}
                lineHeight="normal"
                fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
                fontWeight="bold"
                color="text"
              >
                Decentralization for everyone
              </Text>
              <Box maxW={{ base: "md", md: "full" }}>
                <Text
                  fontSize={{ base: "md", lg: "xl" }}
                  textAlign={{ base: "center", md: "left" }}
                >
                  Shardeum is the first linearly scalable smart contract
                  blockchain being built by the people for the people
                </Text>
              </Box>
            </VStack>
            <Button variant="secondary" size="lg">
              Join Discord
            </Button>
          </VStack>
          <Box h={["60", "80"]} bg="brand.grey-90"></Box>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Hero;
