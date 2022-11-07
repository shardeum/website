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
  SHARDEUM_LIBERTY_ALPHANET_URL,
  DOCS_URL,
  FAQ_URL,
  EXPLORER_LIBERTY_URL,
  SUPERSHARDIAN_URL,
  EVENTBRITE,
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
        title: "community_ecosystem",
        link: COMMUNITY_URL,
        newPage: false,
      },
      {
        title: "events",
        link: EXPLORE_EVENTS,
        newPage: false,
      },
      {
        title: "supershardian",
        link: SUPERSHARDIAN_URL,
        newPage: true,
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
  const [hideNoti, setHideNoti] = useState(true);
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

    const specific_date = new Date("30/11/2022"); // TODO Need to do it dinamic
    const current_date = formatDate(new Date());

    if (current_date.getTime() > specific_date.getTime()) {
      console.log("current_date date is grater than specific_date");
      setHideNoti(true);
    } else if (current_date.getTime() === specific_date.getTime()) {
      setHideNoti(false);
    } else {
      console.log("current_date date is lower than specific_date");
      setHideNoti(false);
    }

    // loadApi()
  }, []);

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
        style={{
          background: "linear-gradient(90deg, #606EFF -5.59%, #EC5B29 103.41%);",
          textAlign: "center",
          color: "white",
          padding: "5px",
        }}
      >
        <a href={EVENTBRITE} target="_blank" rel="noreferrer">
          <b>
            {" "}
            Shardeum&apos;22 Q3 Update: Autoscaling Demo on 5 Nov 2022, 3 PM UTC. Register Now !{" "}
          </b>
        </a>
      </div>
    );
  };

  return (
    <>
      <div style={{ background: "linear-gradient(90deg, #606EFF -5.59%, #EC5B29 103.41%);" }}>
        {hideNoti === false ? <NotificationBar /> : null}
      </div>
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
              {linksArr?.map((link, index) => (
                <NextLink key={link.title} href={link.link} passHref>
                  <Link
                    variant="navlink"
                    rel="noopener noreferrer"
                    target={link.newPage ? "_blank" : "_self"}
                    fontWeight={link.highlight ? "bold" : "normal"}
                  >
                    {typeof link.submenu !== "undefined" ? (
                      <MenuComponent link={link} />
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
            <MobileDrawer links={linksArr} />
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default Navbar;
