import React from "react";
import { Box, Container, Flex, IconButton, Stack, useColorMode } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import Logo from "./common/Logo";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import THEME from "../constants/theme";

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
    <Flex bg="background" w="100%" p={2} color="text">
      <Container maxW="container.xl">
        <Flex justify="space-between" align={"center"}>
          <Box>
            <Logo />
          </Box>
          <Stack direction={["column", "row"]} spacing={"1rem"} alignItems={"center"}>
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
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
