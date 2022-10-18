import { Menu, MenuButton, MenuItem, MenuList, useDisclosure } from "@chakra-ui/react";
import NextLink from "next/link";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useTranslation } from "next-i18next";
import { useState, Key } from "react";
import { UrlObject } from "url";

const MenuComponent = (props: any) => {
  const { t: commonTranslation } = useTranslation(["common"]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [link, setLink] = useState(props.link);

  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        // _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
        aria-label="Courses"
        fontWeight="normal"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        {commonTranslation(link.title)} {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
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
        {link.submenu?.map((item: any) =>
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
  );
};

export default MenuComponent;
