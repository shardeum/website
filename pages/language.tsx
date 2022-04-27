import React from "react";
import Navbar from "components/Navbar";
import Footer from "layout/sections/Footer";
import { Container, Flex } from "@chakra-ui/react";
import LanguageIcons from "layout/language/LanguageIcons";
import SupportedLanguages from "layout/language/SupportedLanguages";
import LanguageDescription from "layout/language/LanguageDescription";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Language = () => {
  return (
    <>
      <Navbar />
      <Flex justifyContent="center" alignItems="center">
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
      <Footer />
    </>
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
