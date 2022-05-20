import { Box, Button, Flex } from "@chakra-ui/react";
import { COMMUNITY_URL } from "constants/links";

type BeASuperShardianProps = {
  title: string;
  description: string;
  joinButtonText: string;
};
const BeASuperShardian = ({ title, description, joinButtonText }: BeASuperShardianProps) => {
  return (
    <Flex bg="brand.grey-5" px={{ base: 0, sm: 0, lg: 8 }} pt={0} pb={{ base: 0, lg: 24 }}>
      <Flex
        maxW="container.xl"
        direction={"column"}
        mx={{ lg: "auto" }}
        p={{ base: 6, sm: 6, lg: 8 }}
        bg="brand.blue"
        width={{ base: "full" }}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Box
          lineHeight="normal"
          fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
          fontWeight="bold"
          color="brand.grey-5"
        >
          {title}
        </Box>
        <Box
          maxW={{ md: "full" }}
          pt={4}
          pb={5}
          fontSize={{ base: "md", lg: "lg" }}
          textAlign={{ base: "left", md: "left" }}
          color="brand.grey-10"
        >
          {description}
        </Box>
        <Button as="a" variant="secondary" size="lg" href={COMMUNITY_URL}>
          {joinButtonText}
        </Button>
      </Flex>
    </Flex>
  );
};
export default BeASuperShardian;
