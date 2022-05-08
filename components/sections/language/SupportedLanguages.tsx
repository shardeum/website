import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { LANGUAGES } from "constants/languages";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";

const SupportedLanguages = () => {
  const {
    push,
    asPath,
    pathname,
    locales, // total langage options from config
    locale: currentLocale, // selected language
  } = useRouter();
  const { t: commonTranslation } = useTranslation("common");
  const { t: pageTranslation } = useTranslation("page-language");
  const handleChangeLanguage = (locale: string) => push(pathname, asPath, { locale });

  return (
    <>
      <Heading
        mt={{ base: "16", sm: "20", lg: "36" }}
        fontWeight={{ base: 400, sm: 500 }}
        fontSize={{ base: "xl", sm: "2xl" }}
        mr={{ md: "96px" }}
      >
        {pageTranslation("page-language-supported-languages")}
      </Heading>
      <Flex gap="8" wrap="wrap" mt="6">
        {locales?.map((localeLang, index) => (
          <Box
            key={index}
            display="flex"
            flexDir="column"
            cursor="pointer"
            overflow="hidden"
            bgColor="brand.grey-10"
            alignItems="flex-start"
            justifyContent="flex-start"
            p={{ base: "3", sm: "4", lg: "5" }}
            pb={{ base: "4", sm: "6", lg: "8" }}
            gap={{ base: "2", sm: "4", lg: "6" }}
            borderWidth={currentLocale === localeLang ? "2px" : "1px"}
            minW={{ base: "156px", sm: "220px", lg: "266px" }}
            borderColor={currentLocale === localeLang ? "brand.orange-80" : "brand.orange-20"}
            onClick={() => handleChangeLanguage(localeLang)}
          >
            <Text
              color={currentLocale === localeLang ? "brand.orange-80" : "brand.grey-80"}
              fontSize={{ base: "xs", sm: "md", lg: "lg" }}
              fontWeight={{ base: currentLocale === localeLang ? 500 : 400 }}
              textTransform="uppercase"
            >
              {commonTranslation(`language-${localeLang}`)}
            </Text>
            <Text
              color={currentLocale === localeLang ? "brand.orange-80" : "brand.grey-80"}
              fontSize={{ base: "md", sm: "2xl", lg: "3xl" }}
              fontWeight={{ base: 400, sm: 500 }}
            >
              {Object.keys(LANGUAGES).includes(localeLang)
                ? LANGUAGES[localeLang]["language"]
                : "-"}
            </Text>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default SupportedLanguages;
