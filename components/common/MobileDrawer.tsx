import {
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
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { IconHamburger } from "@shm/Icons";
import Link from "next/link";

interface MobileDrawerProps {
  placement?: DrawerProps["placement"];
  links: { title: string; link: string }[];
}

function MobileDrawer({ placement = "right", links }: MobileDrawerProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex display={{ lg: "none" }}>
      <Box onClick={onOpen}>
        <IconHamburger />
      </Box>
      <ChakraDrawer isOpen={isOpen} placement={placement} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="brand.grey-80">
          <DrawerCloseButton alignSelf="end" m="15" />
          <DrawerHeader />
          <DrawerBody>
            <VStack alignItems="left" mt="16" spacing="6">
              {links.map((item) => (
                <Flex key={item.title} w="full" justifyContent="flex-end">
                  <Link href={item.link} passHref>
                    <Button variant="text" as="a" textAlign="end">
                      {item.title}
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
