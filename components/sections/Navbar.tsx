import { Box, Container, Flex, Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import { BLOG_URL, COMMUNITY_URL, DOCS_URL, LITEPAPER_URL } from "../../constants/links";
import Logo from "components/common/Logo";
import MobileDrawer from "components/common/MobileDrawer";

const links = [
  {
    title: "Alphanet",
    link: "/shardeum-liberty-alphanet",
    newPage: false,
  },
  {
    title: "Community",
    link: COMMUNITY_URL,
    newPage: true,
  },
  {
    title: "Litepaper",
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
    title: "Blog",
    link: BLOG_URL,
    newPage: true,
  },
  {
    title: "Docs",
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
  return (
    <Flex bg="brand.black" w="100%" py={2} color="text">
      <Container maxW="container.xl" py="5" px={{ base: "6", xl: '0'}}>
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
                  {link.title}
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
