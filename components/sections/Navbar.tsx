import {
  Avatar,
  Box,
  color,
  Container,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import {
  BLOG_URL,
  LITEPAPER_URL,
  COMMUNITY_URL,
  CLAIM_100_SHM_LINK,
  EXPLORE_EVENTS,
  COMMUNITY_UPDATE,
  COMMUNITY_REWARDS,
  SHM_CALCULATOR,
  DOCS_URL,
  FAQ_URL,
  EXPLORER_LIBERTY_URL,
  SUPERSHARDIAN_URL,
  EVENTBRITE,
  BETANET_URL,
  ECOSYSTEM_URL,
  CAREERS_URL,
  EXPLORER_NEW_LIBERTY_URL,
  REPORT_BUGS,
  DEV_URL,
  SHARDEUM_UPDATES_URL,
  PROOF_OF_COMMUNITY_OVERVIEW,
  PROOF_OF_COMMUNITY_PROGRAM,
  PROOF_OF_COMMUNITY_BACKPACKING_INDIA,
  PROOF_OF_COMMUNITY_BACKPACKING_UPDATES,
} from "../../constants/links";
import { ArrowDownIcon, ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Logo from "components/common/Logo";
import MobileDrawer from "components/common/MobileDrawer";
import { useTranslation } from "next-i18next";
import { useSession, signIn, signOut } from "next-auth/react";
import { FC, useContext, useState, useEffect } from "react";
import SigninContext from "context/signin-window.context";
import MenuComponent from "./MenuComponent";
// import { getNotificationById } from "../../utils/api"

const linksArr = [
  {
    title: "developers",
    link: "",
    newPage: false,
    highlight: false,
    submenuLevel: 1,
    submenu: [
      // {
      //   title: "alphanet",
      //   link: SHARDEUM_LIBERTY_ALPHANET_URL,
      //   newPage: false,
      // },
      {
        title: "Developer Home",
        link: DEV_URL,
        newPage: false,
        highlight: false,
      },
      {
        title: "Betanet Sphinx",
        link: BETANET_URL,
        newPage: false,
        highlight: false,
      },
      {
        title: "Dapps Ecosystem",
        link: ECOSYSTEM_URL,
        newPage: false,
        highlight: false,
      },
      {
        title: "docs",
        link: DOCS_URL,
        newPage: true,
        highlight: false,
      },
      {
        title: "Explorer",
        link: EXPLORER_NEW_LIBERTY_URL,
        newPage: true,
        highlight: false,
      },
      // {
      //   title: "Report Bugs",
      //   link: REPORT_BUGS,
      //   newPage: true,
      // },
    ],
  },
  {
    title: "community",
    link: "",
    newPage: false,
    highlight: false,
    submenuLevel: 1,
    submenu: [
      {
        title: "community_ecosystem",
        link: COMMUNITY_URL,
        newPage: false,
        highlight: false,
      },
      {
        title: "shardeum_events",
        link: EXPLORE_EVENTS,
        newPage: false,
        highlight: false,
      },
      {
        title: "shardeum_updates",
        link: SHARDEUM_UPDATES_URL,
        newPage: false,
        highlight: false,
      },
      {
        title: "community_rewards",
        link: COMMUNITY_REWARDS,
        newPage: true,
        highlight: false,
      },
      {
        title: "proof-of-community",
        link: "",
        newPage: false,
        highlight: false,
        submenuLevel: 2,
        submenu: [
          {
            title: "proof-of-community-overview",
            link: PROOF_OF_COMMUNITY_OVERVIEW,
            newPage: true,
            highlight: false,
          },
          {
            title: "proof-of-community-program",
            link: PROOF_OF_COMMUNITY_PROGRAM,
            newPage: true,
            highlight: false,
          },
          {
            title: "proof-of-community-backpacking-india",
            link: PROOF_OF_COMMUNITY_BACKPACKING_INDIA,
            newPage: true,
            highlight: false,
          },
          {
            title: "proof-of-community-backpacking-updates",
            link: PROOF_OF_COMMUNITY_BACKPACKING_UPDATES,
            newPage: true,
            highlight: false,
          },
        ],
      },
      // {
      //   title: "careers",
      //   link: CAREERS_URL,
      //   newPage: true,
      //   highlight: false,
      // },
    ],
  },
  {
    title: "learn",
    link: "",
    newPage: false,
    highlight: false,
    submenuLevel: 1,
    submenu: [
      {
        title: "SHM_Tokenomics",
        link: SHM_CALCULATOR,
        newPage: true,
        highlight: false,
      },
      {
        title: "litepaper",
        link: LITEPAPER_URL,
        newPage: true,
        highlight: false,
      },
      {
        title: "faq",
        link: FAQ_URL,
        newPage: true,
        highlight: false,
      },
      {
        title: "blog",
        link: BLOG_URL,
        newPage: true,
        highlight: false,
      },
    ],
  },
  { title: "Mainnet Roadmap", link: "https://shardeum.org/roadmap/mainnet/" },
  {
    title: "claim-100-shm-cta",
    link: CLAIM_100_SHM_LINK,
    newPage: true,
    highlight: true,
  },
  // {
  //   title: "Report Bugs on Sphinx",
  //   link: REPORT_BUGS,
  //   newPage: true,
  //   highlight: false,
  // },
];

export type NavbarProps = {
  mode?: "light" | "dark";
};

const Navbar: FC<NavbarProps> = ({ mode = "dark" }) => {
  const { t: commonTranslation } = useTranslation(["common"]);
  const { data: session } = useSession();
  const { setPopup } = useContext(SigninContext);
  const [hideNoti, setHideNoti] = useState(true);
  const [scrollHideNoti, setScrollHideNoti] = useState(true);
  const [height, setHeight] = useState(0);
  const [isauthVisible, setIsauthVisible] = useState(false);
  const [projectNotification, setprojectNotification] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const text = window.location.href;
    const position = text.search("ecosystem");
    if (position > -1) {
      setIsauthVisible(true);
    } else {
      setIsauthVisible(false);
    }

    const specific_date = new Date("12/11/2022"); // TODO Need to do it dinamic
    const current_date = formatDate(new Date());

    if (current_date.getTime() > specific_date.getTime()) {
      setHideNoti(true);
    } else if (current_date.getTime() === specific_date.getTime()) {
      setHideNoti(false);
    } else {
      setHideNoti(false);
    }

    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
    // loadApi()
  }, []);
  const listenToScroll = () => {
    const heightToHideFrom = 5;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      scrollHideNoti && setScrollHideNoti(false);
    } else {
      setScrollHideNoti(true);
    }
  };
  // const loadApi = async () => {
  //   const project:any  = await getNotificationById();
  //   console.log('project',project)
  //   setprojectNotification(project)
  // }

  const formatDate = (value: any) => {
    const dateValue = value;
    const yyyy = dateValue.getFullYear();
    let mm: any = dateValue.getMonth() + 1; // Months start at 0!
    let dd: any = dateValue.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "/" + mm + "/" + yyyy;
    return new Date(formattedToday);
  };

  const NotificationBar = () => {
    return (
      <div
        className="navNotificationShow"
        style={{
          // background: "linear-gradient(90deg, #606EFF -5.59%, #EC5B29 103.41%)",
          textAlign: "center",
          color: "white",
          padding: "5px",
        }}
      >
        <a
          // href={"https://shardeum.org/blog/shardeum-open-source/"}
          href={"https://shm.gg/shm-oct-2023-updates"}
          target="_blank"
          rel="noreferrer"
        >
          <b>Join us on Nov 8 for our monthly update & whitepaper release. Register now!</b>
          {/* <b> Explore and Contribute to the Open Source Shardeum Codebase </b> */}
        </a>
      </div>
    );
  };

  return (
    <>
      <div
        style={{ position: "fixed", zIndex: 9999, width: "100%" }}
        // id="hide"
        // style={{ background: "linear-gradient(90deg, #606EFF -5.59%, #EC5B29 103.41%);" }}
        // className={!scrollHideNoti ? "navNotificationHide" : "navNotificationShow"}
        // className="navNotificationShow"
      >
        <NotificationBar />
        {/* {hideNoti === false ? <NotificationBar /> : null} */}
        <Flex
          bg={mode === "light" ? "brand.white" : "brand.black"}
          w="100%"
          py={2}
          color={mode === "light" ? "brand.grey-90" : "text"}
        >
          <Container maxW="container.xl" py="5" px={{ base: "6", xl: "0" }}>
            <Flex justify="" align={"center"}>
              <Box>
                <NextLink href="/" passHref legacyBehavior>
                  <Link>
                    <Logo />
                  </Link>
                </NextLink>
              </Box>
              <Spacer />
              <Stack
                direction={["column", "row"]}
                spacing={"1rem"}
                alignItems={"center"}
                display={{ base: "none", lg: "flex" }}
              >
                {/* All the links laid out horizontally */}
                {linksArr?.map((link, index) =>
                  typeof link.submenu !== "undefined" ? (
                    <MenuComponent link={link} />
                  ) : (
                    <NextLink key={link.title} href={link.link} passHref legacyBehavior>
                      <Link
                        variant="navlink"
                        rel="noopener noreferrer"
                        target={link.newPage ? "_blank" : "_self"}
                        fontWeight={link.highlight ? "bold" : "normal"}
                        fontSize={"16px"}
                      >
                        {commonTranslation(link.title)}
                      </Link>
                    </NextLink>
                  )
                )}

                {/* {isauthVisible === true ? (
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
              ) : null} */}

                {/* <Link variant="navlink">Language</Link> */}
              </Stack>
              {/* Will only show on mobile and tablets */}
              <Box>
                {/* <NextLink href="/" passHref>
                <Link>
                  <Logo />
                </Link>
              </NextLink> */}
              </Box>
            </Flex>
            <Flex justify="end">
              <MobileDrawer links={linksArr} />
            </Flex>
          </Container>
        </Flex>
      </div>

      <Box
        style={{ width: "100%", padding: "3rem" }}
        bg={mode === "light" ? "brand.white" : "brand.black"}
      ></Box>
    </>
  );
};

export default Navbar;
