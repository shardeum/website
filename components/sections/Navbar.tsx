import {
  Avatar,
  Box,
  Container,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import {
  BLOG_URL,
  DOCS_URL,
  LITEPAPER_URL,
  COMMUNITY_URL,
  CLAIM_100_SHM_LINK,
  ECOSYSTEM_URL,
} from "../../constants/links";
import Logo from "components/common/Logo";
import MobileDrawer from "components/common/MobileDrawer";
import { useTranslation } from "next-i18next";
import { useSession, signIn, signOut } from "next-auth/react";
import { FC, useContext } from "react";
import SigninContext from "context/signin-window.context";

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
  // {
  //   title: "ecosystem",
  //   link: ECOSYSTEM_URL,
  //   newPage: false,
  // },
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
  {
    title: "claim-100-shm-cta",
    link: CLAIM_100_SHM_LINK,
    newPage: true,
    highlight: true,
  },
  // TODO: undo comment when global-localization feat goes live
  // {
  //   title: "Language",
  //   link: "/language",
  //   newPage: false,
  // },
];

export type NavbarProps = {
  mode?: "light" | "dark";
};

const Navbar: FC<NavbarProps> = ({ mode = "dark" }) => {
  const { t: commonTranslation } = useTranslation(["common"]);
  const { data: session } = useSession();
  const { setPopup } = useContext(SigninContext);

  return (
    <Flex
      bg={mode === "light" ? "brand.white" : "brand.black"}
      w="100%"
      py={2}
      color={mode === "light" ? "brand.grey-90" : "text"}
    >
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
                  fontWeight={link.highlight ? "bold" : "normal"}
                >
                  {commonTranslation(link.title)}
                </Link>
              </NextLink>
            ))}

            <Menu>
              <MenuButton>
                <Avatar size="sm" src={session?.user?.image || "/avatar.png"} />
              </MenuButton>

              <MenuList>
                {session ? (
                  <MenuItem onClick={() => signOut()}>Signout</MenuItem>
                ) : (
                  <MenuItem onClick={() => setPopup(true)}>Signin</MenuItem>
                )}
              </MenuList>
            </Menu>

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
