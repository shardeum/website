import {
  AspectRatio,
  Box,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../../components/common/SectionHeading";
import { COMMUNITY_URL } from "../../constants/links";
import { teamSocialIcons } from "@shm/Icons";

function Team() {
  return (
    <Flex as="section" bg="brand.grey-10">
      <Container maxW="container.xl" mx="auto" py={{ base: "20", lg: "24" }}>
        <VStack alignItems="start" spacing="12">
          <SectionHeading color="brand.black">Team Shardeum</SectionHeading>
          <SimpleGrid columns={[1, 1, 2]} gap="6" alignItems="start">
            <SimpleGrid columns={[1, 1, 2]} gap="6">
              <VStack spacing="6" alignItems="start">
                <AspectRatio ratio={270 / 300} w="full">
                  <Image objectFit="cover" src="/Nischal.png" alt="Nischal Image" layout="fill" />
                </AspectRatio>
                <VStack alignItems="start">
                  <Text fontSize="xl" color="brand.black" fontWeight="medium">
                    Nischal Shetty
                  </Text>
                  <Text color="brand.grey-70">
                    Founder of WazirX, Crowdfire and a steward of the cryptocurrency industry in
                    India
                  </Text>
                </VStack>
                <HStack>
                  <ChakraLink
                    pr="4"
                    href="https://twitter.com/NischalShetty"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {teamSocialIcons.twitter}
                  </ChakraLink>
                  <ChakraLink
                    pr="4"
                    href="https://www.linkedin.com/in/nischalshetty/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {teamSocialIcons.linkedIn}
                  </ChakraLink>
                </HStack>
              </VStack>
              <VStack spacing="6" alignItems="start">
                <AspectRatio ratio={270 / 300} w="full">
                  <Image objectFit="cover" src="/Omar.png" alt="Omar Image" layout="fill" />
                </AspectRatio>
                <VStack alignItems="start">
                  <Text fontSize="xl" color="brand.black" fontWeight="medium">
                    Omar Syed
                  </Text>
                  <Text color="brand.grey-70">
                    A distributed systems architect with 30 years of experience at NASA, Yahoo,
                    Raytheon and Zynga.
                  </Text>
                </VStack>
                <HStack>
                  <ChakraLink
                    pr="4"
                    href="https://twitter.com/OmarUnblocked"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {teamSocialIcons.twitter}
                  </ChakraLink>
                  <ChakraLink
                    pr="4"
                    href="https://www.linkedin.com/in/omarsyed1/  "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {teamSocialIcons.linkedIn}
                  </ChakraLink>
                </HStack>
              </VStack>
            </SimpleGrid>
            <VStack spacing="6">
              <Box position="relative" width="100%">
                <AspectRatio w="full" ratio={564 / 300}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src="/community-thumbnail.png"
                    alt="Community Image"
                  />
                </AspectRatio>
              </Box>
              <VStack alignItems="start">
                <Text fontSize="xl" color="brand.black" fontWeight="medium">
                  The Community
                </Text>
                <Flex direction="column">
                  <Text color="brand.grey-70">
                    Community is the reason how and why Shardeum will remain decentralized, secure
                    and infinitely scalable
                  </Text>
                  <Link href={COMMUNITY_URL} passHref>
                    <Text
                      as="a"
                      color="brand.blue"
                      mt="2"
                      _hover={{ color: "brand.blue-70" }}
                      fontWeight="medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Know More
                    </Text>
                  </Link>
                </Flex>
              </VStack>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>
    </Flex>
  );
}

export default Team;
