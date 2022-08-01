import { Box, Container, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import Logo from "../common/Logo";
import {
  BLOG_URL,
  COMMUNITY_URL,
  FAQ_URL,
  GENERAL_QUERIES_LINK,
  INVESTMENT_QUERY_LINK,
  PUBLIC_DRIVE_LINK,
  LITEPAPER_URL,
  NEWSLETTER_URL,
  CLAIM_100_SHM_LINK,
} from "../../constants/links";
import { useTranslation } from "next-i18next";

const LinksMap = {
  General: [
    { title: "home", href: "/" },
    { title: "the-community", href: COMMUNITY_URL },
    { title: "blog", href: BLOG_URL },
    { title: "newsletter", href: NEWSLETTER_URL },
    { title: "Careers", href: "/careers/", target: "_BLANK" },
    { title: "Privacy Policy", href: "/privacy-policy/", target: "" },
    { title: "Terms", href: "/terms/", target: "" },
  ],
  Resources: [
    { title: "litepaper", href: LITEPAPER_URL },
    { title: "faq", href: FAQ_URL },
    { title: "public-drive-link", href: PUBLIC_DRIVE_LINK, target: "_BLANK" },
    { title: "claim-100-shm-cta", href: CLAIM_100_SHM_LINK },
  ],
  Contact: [
    { title: "general-enquiries", href: GENERAL_QUERIES_LINK, target: "_BLANK" },
    { title: "investment-queries", href: INVESTMENT_QUERY_LINK, target: "_BLANK" },
  ],
};

function Footer() {
  const { t: pageTranslation } = useTranslation(["common", "page-home"]);

  return (
    <Flex bg="brand.grey-95" as="footer">
      <Container maxW="container.xl" mx="auto" py="12" px={{ base: "6", xl: "0" }}>
        <SimpleGrid columns={[1, 1, 2]} gap={["8", "12"]}>
          <Flex direction="column" justifyContent="space-between">
            <Link href="/" passHref>
              <Box as="a">
                <Logo />
              </Box>
            </Link>
            <Text color="brand.grey-50" display={{ base: "none", md: "block" }}>
              Copyright &copy; Shardeum {new Date().getFullYear()}
            </Text>
          </Flex>
          <SimpleGrid columns={[2, 2, 3]} gap={{ base: 6 }} rowGap={{ base: 10 }}>
            {Object.entries(LinksMap).map(([title, links]) => {
              return (
                <VStack alignItems="start" spacing="4" key={title}>
                  <Text color="white" fontWeight="medium">
                    {pageTranslation(title)}
                  </Text>
                  <VStack spacing="3" alignItems="start">
                    {links.map((link) => (
                      <Link href={link.href} passHref key={link.title}>
                        <Text
                          as="a"
                          target={link.target ? link.target : ""}
                          color="brand.grey-50"
                          _hover={{ color: "brand.grey-30" }}
                        >
                          {pageTranslation(link.title)}
                        </Text>
                      </Link>
                    ))}
                  </VStack>
                </VStack>
              );
            })}
          </SimpleGrid>
        </SimpleGrid>
        <Text color="brand.grey-50" display={{ md: "none" }} mt="10">
          Copyright &copy; Shardeum {new Date().getFullYear()}
        </Text>
      </Container>
    </Flex>
  );
}

export default Footer;
