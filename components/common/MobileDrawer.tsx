import {
  Avatar,
  Box,
  Button,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import NextLink from "next/link";
import { ArrowDownIcon, ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { IconHamburger } from "@shm/Icons";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import SigninContext from "context/signin-window.context";

interface MobileDrawerProps {
  placement?: DrawerProps["placement"];
  links: any[];
}

function MobileDrawer({ placement = "right", links }: MobileDrawerProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: session } = useSession();
  const { setPopup } = useContext(SigninContext);
  const { t: commonTranslation } = useTranslation(["common"]);
  const [isauthVisible, setIsauthVisible] = useState(false);

  useEffect(() => {
    const text = window.location.href;
    const position: any = text.search("ecosystem");
    if (position > -1) {
      setIsauthVisible(true);
    } else {
      setIsauthVisible(false);
    }
  }, []);

  return (
    <Flex display={{ lg: "none" }}>
      <Box onClick={onOpen}>
        <IconHamburger />
      </Box>
      <ChakraDrawer isOpen={isOpen} placement={placement} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent position="relative" bgColor="brand.grey-80">
          <DrawerCloseButton alignSelf="end" m="15" />
          {isauthVisible === true ? (
            <Menu>
              <MenuButton position="absolute" top="1.5rem" left="1.5rem">
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

          <DrawerHeader />
          <DrawerBody>
            <VStack alignItems="left" mt="16" spacing="6">
              {links.map((item) => (
                <Flex key={item.title} w="full" justifyContent="flex-end">
                  {/* <Link href={item.link} passHref>
                    <Button
                      variant="text"
                      as="a"
                      fontWeight={item.highlight ? "bold" : "normal"}
                      textAlign="end"
                      onClick={onClose}
                    >
                      {commonTranslation(item.title)}
                    </Button>
                  </Link> */}
                  {typeof item.submenu !== "undefined" ? (
                    <Menu>
                      <MenuButton>
                        {commonTranslation(item.title)} <ChevronDownIcon />
                      </MenuButton>
                      <MenuList
                        style={{
                          maxHeight: "500px",
                          overflowX: "hidden",
                          background: "#000000",
                        }}
                        onMouseEnter={onOpen}
                        onMouseLeave={onClose}
                      >
                        {item.submenu?.map((i: any) =>
                          i.newPage === true ? (
                            <MenuItem key={i.title} onClick={() => window.open(i.link)}>
                              {commonTranslation(i.title)}
                            </MenuItem>
                          ) : (
                            <MenuItem key={i.title}>
                              <NextLink key={i.title} href={i.link} passHref>
                                {commonTranslation(i.title)}
                              </NextLink>
                            </MenuItem>
                          )
                        )}
                      </MenuList>
                    </Menu>
                  ) : (
                    commonTranslation(item.title)
                  )}
                </Flex>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
    </Flex>
  );
}

export default MobileDrawer;
