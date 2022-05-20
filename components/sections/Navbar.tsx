import { Box, Container, Flex, Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import { BLOG_URL, DOCS_URL, LITEPAPER_URL, COMMUNITY_URL } from "../../constants/links";
import Logo from "components/common/Logo";
import MobileDrawer from "components/common/MobileDrawer";
import { useTranslation } from "next-i18next";

const links = [
  {
    title: "alphanet",
    link: "/shardeum-liberty-alphanet",
    newPage: false,
  },
  {
    title: "community",
    link: COMMUNITY_URL,
    newPage: false,
  },
  {
    title: "Super Shardians",
    link: "/super-shardian",
    newPage: false,
  },
  {
    title: "Super Shardians",
    link: "/super-shardian",
    newPage: false,
  },
  {
    title: "litepaper",
    link: LITEPAPER_URL,
    newPage: true,
  },
  // commenting it for now until we have page for it
  // {
  //   title: "Learn",
  //   link: "#",
  // newPage:false,
  // },
  {
    title: "blog",
    link: BLOG_URL,
    newPage: true,
  },
  {
    title: "docs",
    link: DOCS_URL,
    newPage: true,
  },
  // TODO: undo comment when global-localization feat goes live
  // {
  //   title: "Language",
  //   link: "/language",
  //   newPage: false,
  // },
];

const Navbar = () => {
  const { t: commonTranslation } = useTranslation(["common"]);

  return (
    <Flex bg="brand.black" w="100%" py={2} color="text">
      <Container maxW="container.xl" py="5" px={{ base: "6", xl: "0" }}>
        <Flex justify="space-between" align={"center"}>
          <Box>
            <NextLink href="/" passHref>
              <Link>
                <Logo />
              </Link>
            </NextLink>
          </Box>
          <Stack
            direction={["column", "row"]}
            spacing={"1rem"}
            alignItems={"center"}
            display={{ base: "none", lg: "flex" }}
          >
            {/* All the links laid out horizontally */}
            {links?.map((link) => (
              <NextLink key={link.title} href={link.link} passHref>
                <Link
                  variant="navlink"
                  rel="noopener noreferrer"
                  target={link.newPage ? "_blank" : "_self"}
                >
                  {commonTranslation(link.title)}
                </Link>
              </NextLink>
            ))}

            {/* <Link variant="navlink">Language</Link> */}
          </Stack>
          {/* Will only show on mobile and tablets */}
          <MobileDrawer links={links} />
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
