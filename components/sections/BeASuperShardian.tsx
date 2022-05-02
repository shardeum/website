import { Box, Button, Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";

type BeASuperShardianProps = {
  title: string;
  description: string;
};
const BeASuperShardian = ({ title, description }: BeASuperShardianProps) => {
  return (
    <Container maxW="container.xl" mx="auto" bg="brand.blue" mb={12}>
      <VStack alignItems={"flex-start"} spacing={2} p={10}>
        <Box
          lineHeight="normal"
          fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
          fontWeight="bold"
          color="brand.white"
        >
          {title}
        </Box>
        <Box maxW={{ base: "md", md: "full" }} pb={5}>
          <Box
            fontSize={{ base: "md", lg: "lg" }}
            textAlign={{ base: "center", md: "left" }}
            color="brand.white"
          >
            {description}
          </Box>
        </Box>
        <Button variant="outline" size="lg" bg="brand.white" color="brand.black">
          Join the Community
        </Button>
      </VStack>
    </Container>
  );
};
export default BeASuperShardian;
