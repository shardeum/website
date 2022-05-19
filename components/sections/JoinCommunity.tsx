import { Container, Flex, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import {
  IconDiscord,
  IconExternal,
  IconGithub,
  IconSeeMore,
  IconTelegram,
  IconTwitter,
} from "@shm/Icons";
import {
  COMMUNITY_URL,
  GITHUB_URL,
  NEWSLETTER_URL,
  TELEGRAM_URL,
  TWITTER_URL,
} from "../../constants/links";
import { useTranslation } from "next-i18next";

const socialLinks = [
  { Icon: IconDiscord, title: "Discord", href: COMMUNITY_URL, target: "_blank" },
  { Icon: IconTwitter, title: "Twitter", href: TWITTER_URL, target: "_blank" },
  { Icon: IconGithub, title: "Github", href: GITHUB_URL, target: "_blank" },
  { Icon: IconTelegram, title: "Telegram", href: TELEGRAM_URL, target: "_blank" },
  { Icon: IconSeeMore, title: "Newsletter", href: NEWSLETTER_URL, target: "_self" },
];

const JoinCommunity = () => {
  const { t: pageTranslation } = useTranslation(["common", "page-home"]);
  return (
    <Flex bg="brand.grey-90" as="section">
      <Container maxW="container.xl" mx="auto" pt="16" pb="28" px={{ base: 6, xl: 0 }}>
        <SimpleGrid columns={[1, 1, 2]} gap={["8", "12"]}>
          <VStack spacing="6" alignItems="start">
            <Text
              as="h2"
              textAlign="left"
              lineHeight="normal"
              fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
              fontWeight="bold"
              color="brand.white"
            >
              {pageTranslation("join-community-title")}
            </Text>
            <VStack maxW={{ base: "md", md: "full" }} spacing="6" alignItems="start">
              <Text fontSize={{ base: "md", lg: "base" }} textAlign="left" color="brand.grey-40">
                {pageTranslation("join-community-desc-1")}
              </Text>
              <Text fontSize={{ base: "md", lg: "base" }} textAlign="left" color="brand.grey-40">
                {pageTranslation("join-community-desc-2")}
              </Text>
            </VStack>
          </VStack>
          <Flex justifyContent="flex-end">
            <VStack w={{ base: "full", lg: "96" }} mx={{ base: "auto", lg: "0" }}>
              {socialLinks.map((link) => (
                <Link href={link.href} passHref key={link.title}>
                  <HStack
                    as="a"
                    rel="noopener noreferrer"
                    target={link.target}
                    w="full"
                    key={link.title}
                    py="5"
                    _hover={{ opacity: 0.8 }}
                    borderBottom="1px"
                    borderColor="brand.grey-80"
                    justifyContent="space-between"
                  >
                    <HStack spacing="4">
                      <link.Icon />
                      <Text
                        color="brand.white"
                        fontSize="base"
                        fontWeight="normal"
                        w="full"
                        _hover={{ color: "brand.grey-40" }}
                      >
                        {link.title}
                      </Text>
                    </HStack>
                    <IconExternal />
                  </HStack>
                </Link>
              ))}
            </VStack>
          </Flex>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default JoinCommunity;
