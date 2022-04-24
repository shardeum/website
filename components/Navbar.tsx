import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, IconButton, Link, Stack, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";
import THEME from "../constants/theme";
import Logo from "./common/Logo";
import MobileDrawer from "./common/MobileDrawer";

const links = [
  {
    title: "Community",
    link: "#",
  },
  {
    title: "Whitepaper",
    link: "#",
  },
  {
    title: "Learn",
    link: "#",
  },
  {
    title: "Blog",
    link: "#",
  },
];

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();

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
                <Link variant="navlink">{link.title}</Link>
              </NextLink>
            ))}

            {/* Keeping this separate because it will mostly be a switcher */}
            <Link variant="navlink">Language</Link>

            <IconButton
              onClick={toggleColorMode}
              aria-label="Switch theme"
              icon={colorMode === THEME.DARK ? <SunIcon /> : <MoonIcon />}
            />
          </Stack>
          {/* Will only show on mobile and tablets */}
          <MobileDrawer links={links} />
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
