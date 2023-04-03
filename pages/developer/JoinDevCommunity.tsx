import { Container, Flex, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { PhoneIcon, AddIcon, WarningIcon, EmailIcon } from "@chakra-ui/icons";
import {
  IconDiscord,
  IconExternal,
  IconGithub,
  IconSeeMore,
  IconTelegram,
  IconTwitter,
  IconReddit,
  IconYoutube,
  IconGitLab,
} from "@shm/Icons";
import {
  DISCORD_URL,
  GITHUB_URL,
  GITLAB_URL,
  NEWSLETTER_URL,
  TELEGRAM_URL,
  TWITTER_URL,
  REDDIT_URL,
  YOUTUBE_URL,
} from "../../constants/links";
import { useTranslation } from "next-i18next";

const socialLinks = [
  { Icon: IconGithub, title: "GitHub", href: GITHUB_URL, target: "_blank" },
  { Icon: IconGitLab, title: "GitLab", href: GITLAB_URL, target: "_blank" },
  { Icon: IconDiscord, title: "Discord", href: DISCORD_URL, target: "_blank" },
  { Icon: IconReddit, title: "Reddit", href: REDDIT_URL, target: "_blank" },
];

const JoinDevCommunity = () => {
  const { t: pageTranslation } = useTranslation(["common", "page-home"]);
  return (
    <Flex bg="brand.grey-90" as="section">
      <Container maxW="container.xl" py="8" px={{ base: 6, xl: "5%" }}>
        <HStack
          spacing="12"
          // className=""
          // style={{ margin: 0, display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}
        >
          <SimpleGrid
            columns={[4]}
            gap={{ base: 12 }}
            rowGap={{ base: 12 }}
            style={{
              margin: 0,
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {socialLinks.map((link) => (
              <a href={link.href} target="_blank" key={link.title} rel="noreferrer">
                <HStack
                  className="joimCommunitySocaialLinks"
                  style={{ margin: "0", cursor: "pointer" }}
                >
                  {link.title === "Newsletter" ? <EmailIcon /> : <link.Icon />}

                  <Text
                    color="brand.white"
                    fontSize="base"
                    fontWeight="normal"
                    w="full"
                    m="0"
                    _hover={{ color: "brand.grey-40" }}
                  >
                    {link.title}
                  </Text>
                  {/* <IconExternal /> */}
                </HStack>
              </a>
            ))}
          </SimpleGrid>
          {/* <Link href={"/ecosystem"} passHref key={"all"}>
            <HStack style={{ margin: "0", cursor: "pointer" }}>
              <link.Icon />
              <Text
                color="brand.white"
                fontSize="base"
                fontWeight="normal"
                w="full"
                _hover={{ color: "brand.grey-40" }}
              >
                {"View all communities"}
              </Text>
              <IconExternal />
            </HStack>
          </Link> */}
        </HStack>
        {/* <SimpleGrid columns={[1, 1, 2]} gap={["8", "12"]}>
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
        </SimpleGrid> */}
      </Container>
    </Flex>
  );
};

export default JoinDevCommunity;
