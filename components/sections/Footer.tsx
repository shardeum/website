import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Text,
  VStack,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  LightMode,
  HStack,
  Button,
} from "@chakra-ui/react";
import {
  IconDiscord,
  IconExternal,
  IconGithub,
  IconSeeMore,
  IconTelegram,
  IconTwitter,
  brandSocialIcons,
  IconFacebook,
  IconYoutube,
  IconLinkedin,
} from "@shm/Icons";
import { YOUTUBE_URL, LINKEDIN_URL, TWITTER_URL } from "../../constants/links";
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
  PARTNER_SHARDEUM,
  BRAND_ASSET,
  NEWS_LETTER_UPDATES,
} from "../../constants/links";
import { useTranslation } from "next-i18next";
import useNewsLetterForm from "../../hooks/useNewsletter";
import Feature from "../common/Feature";
import { IconRightArrow } from "../common/Icons";

const JoinNewsletterComp = () => {
  const {
    form: { error, status, success, value },
    handleOnChange,
    handleSubmit,
  } = useNewsLetterForm();
  const [title, setTitle] = useState("join-newsletter-title-footer");
  const [disc, setDisc] = useState("join-newsletter-desc");
  const [newsLetterBottom, setNewsLetterBottom] = useState(["newsletterBottom"]);
  const [developerPage, setDeveloperPage] = useState(["developerPage"]);
  const [newsLetterEmail, setNewsLetterEmail]: any = useState([""]);
  const router = useRouter();

  useEffect(() => {
    router.pathname == "/developer"
      ? setTitle("join-newsletter-title-footer-dev")
      : setTitle("join-newsletter-title-footer");

    router.pathname == "/developer"
      ? setDisc("join-newsletter-desc-dev")
      : setDisc("join-newsletter-desc");

    router.pathname == "/developer"
      ? setNewsLetterEmail(developerPage)
      : setNewsLetterEmail(newsLetterBottom);
  }, [router.pathname]);
  const { t: pageTranslation } = useTranslation(["common"]);

  return (
    <VStack py="6" px="0" bgColor="#101010" w="full" alignItems="start" spacing="6">
      <Feature type="h2" title={pageTranslation(title)} description={pageTranslation(disc)} />
      <FormControl isInvalid={!!error}>
        <LightMode>
          <InputGroup>
            <Input
              placeholder={pageTranslation("your-email")}
              type="email"
              name="email"
              onChange={handleOnChange}
              value={value}
            />
            <InputRightAddon
              onClick={() => handleSubmit(newsLetterEmail)}
              children={
                <LightMode>
                  <IconButton
                    variant="secondary"
                    p="5"
                    icon={<IconRightArrow />}
                    h="full"
                    px="4"
                    aria-label="Submit Button"
                    isLoading={status === "loading"}
                  />
                </LightMode>
              }
            />
          </InputGroup>
        </LightMode>
        {error ? (
          <FormHelperText fontWeight="medium" color="red">
            {error}
          </FormHelperText>
        ) : success ? (
          <FormHelperText fontWeight="medium" color="green">
            Subscribed! Stay tuned for SHM updates in your inbox ;)
          </FormHelperText>
        ) : null}
      </FormControl>
    </VStack>
  );
};
const socialLinks = [
  { Icon: IconFacebook, title: "Facebook", href: YOUTUBE_URL, target: "_blank" },
  { Icon: IconTwitter, title: "Twitter", href: TWITTER_URL, target: "_blank" },
  { Icon: IconYoutube, title: "Youtube", href: YOUTUBE_URL, target: "_blank" },
  { Icon: IconLinkedin, title: "LinkedIn", href: LINKEDIN_URL, target: "_blank" },
];
const LinksMap = {
  General: [
    { title: "home", href: "/" },
    { title: "Mainnet Roadmap", href: "https://shardeum.org/roadmap/mainnet/", target: "_BLANK" },
    { title: "the-community", href: COMMUNITY_URL },
    { title: "newsletter", href: NEWSLETTER_URL },
    { title: "Careers", href: "/careers/", target: "_BLANK" },
    { title: "OCC", href: "/occ/", target: "" },
    { title: "Privacy Policy", href: "/privacy-policy/", target: "" },
    { title: "Terms", href: "/terms/", target: "" },
  ],
  Resources: [
    { title: "litepaper", href: LITEPAPER_URL },
    { title: "blog", href: BLOG_URL, target: "_BLANK" },
    { title: "faq", href: FAQ_URL },
    { title: "public-drive-link", href: PUBLIC_DRIVE_LINK, target: "_BLANK" },
    { title: "claim-100-shm-cta", href: CLAIM_100_SHM_LINK },
    { title: "Newsletter Updates", href: NEWS_LETTER_UPDATES, target: "_BLANK" },
    { title: "Brand Assets", href: BRAND_ASSET },
  ],
  Contact: [
    { title: "general-enquiries", href: GENERAL_QUERIES_LINK, target: "_BLANK" },
    { title: "partner-shardeum", href: PARTNER_SHARDEUM, target: "_BLANK" },
  ],
};

function Footer() {
  const { t: pageTranslation } = useTranslation(["common", "page-home"]);

  return (
    <Flex bg="brand.grey-95" as="footer">
      <Container maxW="container.xl" mx="auto" py="12" px={{ base: "6", xl: "0" }}>
        <SimpleGrid columns={[1, 1, 2]} gap={["8", "12"]}>
          <Flex direction="column" justifyContent="space-between">
            <Flex direction="column" justifyContent="left" alignItems="left">
              <Link href="/" passHref legacyBehavior>
                <Box as="a">
                  <Logo />
                </Box>
              </Link>
              {/* <Flex direction="row" justifyContent="center" mt={2}>
                {socialLinks.map((link) => (
                  <a href={link.href} target={link.target} key={link.title}>
                    <Button
                      className="footer-social-icon"
                      leftIcon={<link.Icon />}
                      size="xs"
                      colorScheme="Gray"
                      variant="outline"
                    />
                  </a>
                ))}
              </Flex> */}
            </Flex>
            <JoinNewsletterComp />
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
                      <Link href={link.href} passHref key={link.title} legacyBehavior>
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
