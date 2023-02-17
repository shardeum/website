import { Container, Flex, HStack, SimpleGrid, Text, VStack, Button } from "@chakra-ui/react";
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
  DISCORD_URL,
  GITHUB_URL,
  NEWSLETTER_URL,
  TELEGRAM_URL,
  TWITTER_URL,
} from "../../constants/links";
import { useTranslation } from "next-i18next";

const socialLinks = [
  { Icon: IconDiscord, title: "Discord", href: DISCORD_URL, target: "_blank" },
  { Icon: IconTwitter, title: "Twitter", href: TWITTER_URL, target: "_blank" },
  { Icon: IconGithub, title: "Github", href: GITHUB_URL, target: "_blank" },
  { Icon: IconTelegram, title: "Telegram", href: TELEGRAM_URL, target: "_blank" },
  { Icon: IconSeeMore, title: "Newsletter", href: NEWSLETTER_URL, target: "_self" },
];

const Page404 = () => {
  const { t: pageTranslation } = useTranslation(["common", "page-home"]);
  return (
    <Flex style={{ backgroundColor: "#000000" }} as="section">
      <Container maxW="container.xl" mx="auto" pt="0" pb="28" px={{ base: 6, xl: 0 }}>
        <SimpleGrid columns={[]} gap={["8", "12"]}>
          <VStack spacing="6" pt={0} alignItems="center">
            <Text
              as="h2"
              textAlign="left"
              lineHeight="normal"
              fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
              fontWeight="bold"
              color="brand.white"
            >
              {pageTranslation("un-oh")}
            </Text>
          </VStack>
          <VStack spacing="6" pt={0} alignItems="center">
            <VStack maxW={{ base: "md", md: "full" }} spacing="6" alignItems="start">
              <Text
                fontSize={{ base: "md", lg: "base" }}
                textAlign="center"
                color="brand.grey-40"
              ></Text>
              <Text fontSize={{ base: "lg", lg: "base" }} textAlign="center" color="brand.grey-40">
                {pageTranslation("un-oh-desc")}
                {/* <br />
                {pageTranslation("un-oh-descTwo")} */}
              </Text>
            </VStack>
          </VStack>
          <Flex justifyContent="center">
            <VStack w={{ base: "full", lg: "96" }} mx={{ base: "auto", lg: "0" }}>
              <Button mt={0} as="a" variant="primary" size="lg" rel="noopener noreferrer" href="/">
                {pageTranslation("un-oh-backhome")}
              </Button>
            </VStack>
          </Flex>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Page404;
