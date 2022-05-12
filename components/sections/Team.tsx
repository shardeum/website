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
import { useTranslation } from "next-i18next";

function Team() {
  const { t: pageTranslation } = useTranslation(["common", "page-home"]);
  return (
    <Flex as="section" bg="brand.grey-10">
      <Container
        maxW="container.xl"
        mx="auto"
        py={{ base: "20", lg: "24" }}
        px={{ base: "6", xl: "0" }}
      >
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
                    {pageTranslation("founder-1-title")}
                  </Text>
                  <Text color="brand.grey-70">{pageTranslation("founder-1-desc")}</Text>
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
                    {pageTranslation("founder-2-title")}
                  </Text>
                  <Text color="brand.grey-70">{pageTranslation("founder-2-desc")}</Text>
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
                  {pageTranslation("community")}
                </Text>
                <Flex direction="column">
                  <Text color="brand.grey-70">{pageTranslation("community-desc")}</Text>
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
                      {pageTranslation("join-now-cta")}
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
