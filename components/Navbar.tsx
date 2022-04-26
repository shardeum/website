import { Box, Container, Flex, Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import { BLOG_URL, COMMUNITY_URL, WHITEPAPER_URL } from "../constants/links";
import Logo from "./common/Logo";
import MobileDrawer from "./common/MobileDrawer";

const links = [
  {
    title: "Community",
    link: COMMUNITY_URL,
  },
  {
    title: "Whitepaper",
    link: WHITEPAPER_URL,
  },
  // commenting it for now until we have page for it
  // {
  //   title: "Learn",
  //   link: "#",
  // },
  {
    title: "Blog",
    link: BLOG_URL,
  },
];

const Navbar = () => {
  return (
    <Flex bg="brand.black" w="100%" p={2} color="text">
      <Container maxW="container.xl" py="5">
        <Flex justify="space-between" align={"center"}>
          <Box>
            <Logo />
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
                <Link variant="navlink" rel="noopener noreferrer" target="_blank">
                  {link.title}
                </Link>
              </NextLink>
            ))}

            <Link variant="navlink">Language</Link>
          </Stack>
          {/* Will only show on mobile and tablets */}
          <MobileDrawer links={links} />
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
