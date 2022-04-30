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

const teamSocialIcons = {
  twitter: (
    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.7165 2.00016C17.0749 2.29183 16.3832 2.4835 15.6665 2.57516C16.3999 2.1335 16.9665 1.4335 17.2332 0.591829C16.5415 1.0085 15.7749 1.30016 14.9665 1.46683C14.3082 0.750163 13.3832 0.333496 12.3332 0.333496C10.3749 0.333496 8.77487 1.9335 8.77487 3.9085C8.77487 4.19183 8.8082 4.46683 8.86654 4.72516C5.89987 4.57516 3.2582 3.15016 1.49987 0.991829C1.19154 1.51683 1.01654 2.1335 1.01654 2.7835C1.01654 4.02516 1.64154 5.12516 2.6082 5.75016C2.01654 5.75016 1.46654 5.5835 0.983203 5.3335V5.3585C0.983203 7.09183 2.21654 8.54183 3.84987 8.86683C3.32548 9.01034 2.77495 9.0303 2.24154 8.92516C2.46788 9.63556 2.91115 10.2572 3.50905 10.7026C4.10695 11.148 4.82941 11.3949 5.57487 11.4085C4.31123 12.4089 2.74487 12.9496 1.1332 12.9418C0.84987 12.9418 0.566536 12.9252 0.283203 12.8918C1.86654 13.9085 3.74987 14.5002 5.76654 14.5002C12.3332 14.5002 15.9415 9.05016 15.9415 4.32516C15.9415 4.16683 15.9415 4.01683 15.9332 3.8585C16.6332 3.3585 17.2332 2.72516 17.7165 2.00016V2.00016Z"
        fill="#252836"
      />
    </svg>
  ),
  linkedIn: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.8333 0.5C14.2754 0.5 14.6993 0.675595 15.0118 0.988155C15.3244 1.30072 15.5 1.72464 15.5 2.16667V13.8333C15.5 14.2754 15.3244 14.6993 15.0118 15.0118C14.6993 15.3244 14.2754 15.5 13.8333 15.5H2.16667C1.72464 15.5 1.30072 15.3244 0.988155 15.0118C0.675595 14.6993 0.5 14.2754 0.5 13.8333V2.16667C0.5 1.72464 0.675595 1.30072 0.988155 0.988155C1.30072 0.675595 1.72464 0.5 2.16667 0.5H13.8333ZM13.4167 13.4167V9C13.4167 8.27949 13.1304 7.5885 12.621 7.07903C12.1115 6.56955 11.4205 6.28333 10.7 6.28333C9.99167 6.28333 9.16667 6.71667 8.76667 7.36667V6.44167H6.44167V13.4167H8.76667V9.30833C8.76667 8.66667 9.28333 8.14167 9.925 8.14167C10.2344 8.14167 10.5312 8.26458 10.75 8.48338C10.9688 8.70217 11.0917 8.99891 11.0917 9.30833V13.4167H13.4167ZM3.73333 5.13333C4.10464 5.13333 4.46073 4.98583 4.72328 4.72328C4.98583 4.46073 5.13333 4.10464 5.13333 3.73333C5.13333 2.95833 4.50833 2.325 3.73333 2.325C3.35982 2.325 3.0016 2.47338 2.73749 2.73749C2.47338 3.0016 2.325 3.35982 2.325 3.73333C2.325 4.50833 2.95833 5.13333 3.73333 5.13333ZM4.89167 13.4167V6.44167H2.58333V13.4167H4.89167Z"
        fill="#252836"
      />
    </svg>
  ),
};

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
                    Omar
                  </Text>
                  <Text color="brand.grey-70">
                    A blockchain architect and a scientist cum inventor with prior experience
                    working at NASA, Yahoo and Zynga
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
