import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const LanguageIcons = () => {
  const LANGUAGE_ICONS = [
    // Order not to be changed
    { mt: "0", bgColor: "brand.blue-10", icon: "/language-1.svg" },
    { mt: "6", bgColor: "brand.red-10", icon: "/language-2.svg" },
    { mt: "12", bgColor: "brand.green-10", icon: "/language-3.svg" },
  ];

  return (
    <Flex
      pos="relative"
      mt={{ lg: "6" }}
      minW={{ lg: "40%" }}
      justifyContent="flex-start"
      gap={{ base: "4", sm: "7", lg: "8" }}
      wrap={{ base: "nowrap", lg: "wrap" }}
      direction={{ base: "row", lg: "column" }}
      alignItems={{ base: "normal", lg: "flex-start" }}
      height={{ base: "160px", sm: "216px", lg: "455px" }}
    >
      {LANGUAGE_ICONS.map((langIconObj, index) => {
        const SECOND_ICON = langIconObj.icon === "/language-2.svg";
        return (
          <Image
            key={index}
            p={{ base: "4" }}
            alt="language-image"
            borderRadius={"3xl"}
            src={langIconObj.icon}
            bgColor={langIconObj.bgColor}
            mt={{ base: langIconObj.mt, lg: "0" }}
            padding={{ base: "4", sm: "6", lg: "8" }}
            top={{ base: "0", lg: SECOND_ICON ? "24" : "0" }}
            left={{ base: "0", lg: SECOND_ICON ? "56" : "0" }}
            minW={{ base: "96px", sm: "152px", lg: "190px" }}
            boxSize={{ base: "96px", sm: "152px", lg: "190px" }}
            pos={{ base: "relative", lg: SECOND_ICON ? "absolute" : "relative" }}
          />
        );
      })}
    </Flex>
  );
};

export default LanguageIcons;
