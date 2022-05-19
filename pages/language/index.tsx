import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import LanguageIcons from "components/sections/language/LanguageIcons";
import SupportedLanguages from "components/sections/language/SupportedLanguages";
import LanguageDescription from "components/sections/language/LanguageDescription";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Language = () => {
  return (
    <Flex bg="brand.black" justifyContent="center" alignItems="center">
      <Container
        mx="auto"
        height="100%"
        maxW="container.xl"
        px={{ base: "6" }}
        py={{ base: "96px" }}
      >
        <Flex direction={{ base: "column", lg: "row-reverse" }} gap={{ base: "none", lg: "10" }}>
          <LanguageIcons />
          <LanguageDescription />
        </Flex>
        <SupportedLanguages />
      </Container>
    </Flex>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "page-language"])),
      // Will be passed to the page component as props
    },
  };
}

export default Language;
