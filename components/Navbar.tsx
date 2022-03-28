import {
  Box,
  Container,
  Flex,
  IconButton,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import Link from "./common/Link";
import NextLink from "next/link";
import Logo from "./common/Logo";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

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
            <Logo width={"200px"} height={"20px"} />
          </Box>
          <Stack direction={["column", "row"]} spacing={"1rem"}>
            {/* All the links laid out horiozontally */}
            {links?.map((l) => (
              <NextLink key={l.title} href={l.link} passHref>
                <Link variant="navlink">{l.title}</Link>
              </NextLink>
            ))}

            {/* Keeping this separate because it will mostly be a switcher */}
            <Link variant="navlink">Language</Link>

            <Link varian="navlink" onClick={toggleColorMode}>
              <IconButton
                aria-label="Switch theme"
                icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              />
            </Link>
          </Stack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
