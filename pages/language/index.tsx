import React from "react";
import { Button, VStack, Text, Image } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import SupportedLanguages from "components/sections/language/SupportedLanguages";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import ResponsiveHero from "@shm/components/sections/ResponsiveHero";
import { useTranslation } from "next-i18next";
import { CROWDIN_PROJECT_LINK } from "constants/links";

const Language = () => {
  const { t: pageTranslation } = useTranslation("page-language");

  return (
    <>
      <NextSeo
        title="Community is the CEO of Shardeum"
        description="Shardeum welcomes you to join its community of creators, developers, translators and users to build a layer 1 blockchain that finally solves blockchain trilemma."
        canonical="https://shardeum.org/shardeum-liberty-alphanet/"
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "super shardian, shardeum, contributors, rewards, shardeum community, developers, testnet, blockchain,layer1 blockchain,evm based blockchain",
          },
          {
            property: "twitter:image",
            content: "https://shardeum.org/shardeum-liberty.jpeg",
          },
        ]}
        openGraph={{
          url: "https://shardeum.org/community/",
          title: "Community is the CEO of Shardeum",
          description:
            "Shardeum welcomes you to join its community of creators, developers, translators and users to build a layer 1 blockchain that finally solves blockchain trilemma",
          images: [
            {
              url: "https://shardeum.org/shardeum-liberty.jpeg",
              width: 800,
              height: 600,
              alt: "Shardeum Community | Shardeum welcomes you to join its community of creators, developers, translators and users to build a layer 1 blockchain that finally solves blockchain trilemma",
              type: "image/jpeg",
            },
          ],
          site_name:
            "Shardeum Community | Shardeum welcomes you to join its community of creators, developers, translators and users to build a layer 1 blockchain that finally solves blockchain trilemma",
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "https://shardeum.org",
          handle: "@shardeum",
        }}
      />
      <ResponsiveHero
        heading={pageTranslation("page-language-h1")}
        description={
          <VStack spacing={6}>
            <p>{pageTranslation("page-language-description-p1")}</p>
            <p>{pageTranslation("page-language-description-p2")}</p>
          </VStack>
        }
        cta={
          <Button
            as="a"
            variant="primary"
            size="lg"
            rel="noopener noreferrer"
            target="_blank"
            href={CROWDIN_PROJECT_LINK}
            mt={4}
          >
            <Text display={{ base: "block", sm: "none" }}>
              {pageTranslation("page-language-contribute")}
            </Text>
            <Text display={{ base: "none", sm: "block" }}>
              {pageTranslation("page-language-contribute-full-text")}
            </Text>
            <ArrowForwardIcon ml="3" boxSize="6" />
          </Button>
        }
        respHeroImg={
          <>
            {/* Mobile Image */}
            <Image
              mb={6}
              display={{ base: "block", md: "none" }}
              objectFit="contain"
              src={"/language/language-hero-mobile.svg"}
              width="490px"
            />
            {/* Desktop/Tablet Image */}
            <Image
              display={{ base: "none", md: "block" }}
              objectFit="contain"
              src={"/language/language-hero-desktop.svg"}
              width="490px"
            />
          </>
        }
      />
      <SupportedLanguages />
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
