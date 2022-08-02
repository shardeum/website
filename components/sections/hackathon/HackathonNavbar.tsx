import { Box, Container, Flex, Link, Stack, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import Logo from "components/common/Logo";
import MobileDrawer from "components/common/MobileDrawer";

const links = [
  {
    title: "About Hackathon",
    link: "#section-2",
  },
  {
    title: "Participation Perks",
    link: "#section-3",
  },
  {
    title: "Prizes",
    link: "#section-4",
  },
  {
    title: "Hackathon Schedule",
    link: "#section-5",
  },

  {
    title: "Judges",
    link: "#section-6",
  },
  {
    title: "About Shardeum",
    link: "#section-7",
  },
  {
    title: "Sponsers",
    link: "#section-8",
  },
];

const HackathonNavbar = () => {
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
              <NextLink key={link.title} href={link.link}>
                <Link variant="navlink" rel="noopener noreferrer">
                  {link.title}
                </Link>
              </NextLink>
            ))}
            {/* <Link variant="navlink">Language</Link> */}
            <Button variant="primary" size="lg">
              Register Now
            </Button>
          </Stack>
          {/* Will only show on mobile and tablets */}
          <MobileDrawer links={links} />
        </Flex>
      </Container>
    </Flex>
  );
};

export default HackathonNavbar;
