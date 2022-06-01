import { Box, Flex, Heading, Text, Container, SimpleGrid } from "@chakra-ui/react";
import { LANGUAGES } from "constants/languages";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";

const LanguageCard = (props: {
  localeLang: string;
  handleChangeLanguage: (locale: string) => Promise<boolean>;
}) => {
  const { localeLang, handleChangeLanguage } = props;
  const { locale: currentLocale } = useRouter();
  const { t: commonTranslation } = useTranslation("common");

  return (
    <Box
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
        fontSize={{ base: "md", sm: "xl", lg: "2xl" }}
        fontWeight={{ base: 400, sm: 500 }}
      >
        {Object.keys(LANGUAGES).includes(localeLang) ? LANGUAGES[localeLang]["language"] : "-"}
      </Text>
    </Box>
  );
};

const SupportedLanguages = () => {
  const {
    push,
    asPath,
    pathname,
    locales, // total langage options from config
    locale: currentLocale, // selected language
  } = useRouter();

  const { t: pageTranslation } = useTranslation("page-language");
  const handleChangeLanguage = (locale: string) => push(pathname, asPath, { locale });

  return (
    <Flex bg="brand.white" as="section">
      <Container
        maxW="container.xl"
        mx="auto"
        px={{ base: 6, sm: 6, md: 6, lg: 6, xl: 0 }}
        pt={{ base: 8, lg: 16 }}
        pb={{ base: 8, lg: 16 }}
      >
        <Heading
          color="brand.grey-90"
          fontWeight={{ base: 400, sm: 500 }}
          fontSize={{ base: "xl", sm: "2xl" }}
          mr={{ md: "96px" }}
          mb={8}
        >
          {pageTranslation("page-language-supported-languages")}
        </Heading>
        <SimpleGrid spacing={8} columns={{ base: 1, sm: 2, md: 3, lg: 4 }} w="100%">
          {/* first language card is always selected language */}
          {currentLocale && (
            <LanguageCard localeLang={currentLocale} handleChangeLanguage={handleChangeLanguage} />
          )}
          {locales?.map((locale, index) => {
            return locale == currentLocale ? null : (
              <LanguageCard
                key={index}
                localeLang={locale}
                handleChangeLanguage={handleChangeLanguage}
              />
            );
          })}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default SupportedLanguages;
