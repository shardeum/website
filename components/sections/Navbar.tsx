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
  LITEPAPER_URL,
  COMMUNITY_URL,
  CLAIM_100_SHM_LINK,
  ECOSYSTEM_URL,
  SHARDEUM_LIBERTY_ALPHANET_URL,
  DOCS_URL,
  FAQ_URL,
  EXPLORER_LIBERTY_URL,
  SUPERSHARDIAN_URL,
} from "../../constants/links";
import { ArrowDownIcon } from "@chakra-ui/icons";
import Logo from "components/common/Logo";
import MobileDrawer from "components/common/MobileDrawer";
import { useTranslation } from "next-i18next";
import { useSession, signIn, signOut } from "next-auth/react";
import { FC, useContext, useState, useEffect } from "react";
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
    submenu: [
      {
        title: "Shardeum Community",
        link: "https://t.me/shardians",
      },
      {
        title: "Shardeum Discussion Telegram",
        link: "https://t.me/ShardeumBlockchain",
      },
      {
        title: "Shardeum Academy",
        link: "https://t.me/shardeumacademy",
      },
      {
        title: "Shardeum community",
        link: "https://t.me/shardians",
      },
      {
        title: "Russian Telegram",
        link: "t.me/Shardeum_ru",
      },
      {
        title: "Ukraininan Telegram",
        link: "t.me/shardeum_ua",
      },
      {
        title: "Indonesian Telegram",
        link: "https://t.me/shardeumid",
      },
      {
        title: "Shardeum Telegram Tamil",
        link: "https://t.me/shardeumtamil",
      },
      {
        title: "Shardeum Tamil Annoucements ",
        link: "https://t.me/shardeum_tamil",
      },
      {
        title: "Shardeum Africa",
        link: "https://t.me/ShardeumAfrica",
      },
      {
        title: "Turkish Telegram",
        link: "https://t.me/shardeumturkey",
      },
      {
        title: "Shardians YT",
        link: "https://www.youtube.com/c/Shardians",
      },
      {
        title: "Shardeum Academy YT",
        link: "https://www.youtube.com/channel/UCGC1cKfj1Z6zJp-OODD6ZXA",
      },
      {
        title: "Shardeum Yt",
        link: "https://www.youtube.com/channel/UCO20LJZBF-lYbc6PWVvwkMA",
      },
      {
        title: "Shardeum Africa",
        link: "https://twitter.com/ShardeumAfrica",
      },
      {
        title: "Shardeum",
        link: "https://twitter.com/shardeum",
      },
      {
        title: "Documenting SHM",
        link: "https://twitter.com/DocumentingSHM/",
      },
      {
        title: "Shardeum Times",
        link: "https://twitter.com/shardeumtimes",
      },
      {
        title: "Shardeum Memes ",
        link: "https://twitter.com/shardeummemes",
      },
      {
        title: "Shardeum Academy ",
        link: "https://twitter.com/shardeumacademy",
      },
      {
        title: "Shardeum Russia YouTube ",
        link: "https://youtube.com/channel/UCi8U7RaQIHuenNCYHrHOoqQ",
      },
      {
        title: "Shardeum Community",
        link: "https://twitter.com/shardeum_org",
      },
      {
        title: "shardeum swap",
        link: "https://twitter.com/ShardeumSwap",
      },
      {
        title: "Shardeum Nigeria",
        link: "https://twitter.com/ShardeumNigeria",
      },
      {
        title: "Shardeum (Twitter Communities)",
        link: "https://twitter.com/i/communities/1515268176610684934",
      },
    ],
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

const linksArr = [
  {
    title: "learn",
    link: "",
    newPage: false,
    highlight: false,
    submenu: [
      {
        title: "litepaper",
        link: LITEPAPER_URL,
        newPage: true,
      },
      {
        title: "faq",
        link: FAQ_URL,
        newPage: true,
      },
      {
        title: "blog",
        link: BLOG_URL,
        newPage: true,
      },
    ],
  },
  {
    title: "developers",
    link: "",
    newPage: false,
    highlight: false,
    submenu: [
      {
        title: "alphanet",
        link: SHARDEUM_LIBERTY_ALPHANET_URL,
        newPage: false,
      },
      {
        title: "docs",
        link: DOCS_URL,
        newPage: true,
      },
      {
        title: "explore",
        link: EXPLORER_LIBERTY_URL,
        newPage: true,
      },
    ],
  },
  {
    title: "community",
    link: "",
    newPage: false,
    highlight: false,
    submenu: [
      {
        title: "community",
        link: COMMUNITY_URL,
        newPage: false,
      },
      {
        title: "supershardian",
        link: SUPERSHARDIAN_URL,
        newPage: false,
      },
    ],
  },
  {
    title: "claim-100-shm-cta",
    link: CLAIM_100_SHM_LINK,
    newPage: true,
    highlight: true,
  },
];

export type NavbarProps = {
  mode?: "light" | "dark";
};

const Navbar: FC<NavbarProps> = ({ mode = "dark" }) => {
  const { t: commonTranslation } = useTranslation(["common"]);
  const { data: session } = useSession();
  const { setPopup } = useContext(SigninContext);
  const [isauthVisible, setIsauthVisible] = useState(false);

  useEffect(() => {
    const text = window.location.href;
    const position = text.search("ecosystem");
    if (position > -1) {
      setIsauthVisible(true);
    } else {
      setIsauthVisible(false);
    }
  }, []);

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
            {linksArr?.map((link) => (
              <NextLink key={link.title} href={link.link} passHref>
                <Link
                  variant="navlink"
                  rel="noopener noreferrer"
                  target={link.newPage ? "_blank" : "_self"}
                  fontWeight={link.highlight ? "bold" : "normal"}
                >
                  {typeof link.submenu !== "undefined" ? (
                    <Menu>
                      <MenuButton>
                        {commonTranslation(link.title)} <ArrowDownIcon />
                      </MenuButton>
                      <MenuList
                        style={{
                          maxHeight: "500px",
                          overflowX: "hidden",
                          background: "#000000",
                        }}
                      >
                        {link.submenu?.map((item) =>
                          item.newPage === true ? (
                            <MenuItem key={item.title} onClick={() => window.open(item.link)}>
                              {commonTranslation(item.title)}
                            </MenuItem>
                          ) : (
                            <MenuItem key={item.title}>
                              <NextLink key={item.title} href={item.link} passHref>
                                {commonTranslation(item.title)}
                              </NextLink>
                            </MenuItem>
                          )
                        )}
                      </MenuList>
                    </Menu>
                  ) : (
                    commonTranslation(link.title)
                  )}
                </Link>
              </NextLink>
            ))}

            {isauthVisible === true ? (
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
            ) : null}

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
