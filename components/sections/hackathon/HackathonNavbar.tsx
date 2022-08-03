import { Box, Container, Flex, Link, Stack, Button, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import Logo from "components/common/Logo";
import MobileDrawer from "components/common/MobileDrawer";
import { useRouter } from "next/router";

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
  const router = useRouter();

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
            spacing={"1.5rem"}
            alignItems={"center"}
            display={{ base: "none", lg: "flex" }}
          >
            {/* All the links laid out horizontally */}
            {links?.map((link) => (
              <Text
                cursor="pointer"
                key={link.title}
                onClick={() => router.push(`/hackathon/${link.link}`)}
              >
                {link.title}
              </Text>
            ))}
            {/* <Link variant="navlink">Language</Link> */}
            <Button variant="primary" size="lg">
              Apply Now
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
