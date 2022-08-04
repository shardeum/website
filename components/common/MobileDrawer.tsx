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
import { IconHamburger } from "@shm/Icons";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useContext } from "react";
import SigninContext from "context/signin-window.context";

interface MobileDrawerProps {
  placement?: DrawerProps["placement"];
  links: { title: string; link: string; highlight?: boolean }[];
}

function MobileDrawer({ placement = "right", links }: MobileDrawerProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: session } = useSession();
  const { setPopup } = useContext(SigninContext);
  const { t: commonTranslation } = useTranslation(["common"]);
  return (
    <Flex display={{ lg: "none" }}>
      <Box onClick={onOpen}>
        <IconHamburger />
      </Box>
      <ChakraDrawer isOpen={isOpen} placement={placement} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent position="relative" bgColor="brand.grey-80">
          <DrawerCloseButton alignSelf="end" m="15" />
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
          <DrawerHeader />
          <DrawerBody>
            <VStack alignItems="left" mt="16" spacing="6">
              {links.map((item) => (
                <Flex key={item.title} w="full" justifyContent="flex-end">
                  <Link href={item.link} passHref>
                    <Button
                      variant="text"
                      as="a"
                      fontWeight={item.highlight ? "bold" : "normal"}
                      textAlign="end"
                      onClick={onClose}
                    >
                      {commonTranslation(item.title)}
                    </Button>
                  </Link>
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
