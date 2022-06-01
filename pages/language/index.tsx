import React from "react";
import { Button, VStack, Text, Image, Box } from "@chakra-ui/react";
import { IconRightArrow } from "@shm/Icons";
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
        title="Introduce Shardeum to your native community"
        description="Come help us translate resources in your native languages and introduce Shardeum to your community."
        canonical="https://shardeum.org/language/"
        additionalMetaTags={[
          {
            property: "keywords",
            content: "shardeum, blockchain, layer1 blockchain, evm based blockchain",
          },
          {
            property: "twitter:image",
            content: "https://shardeum.org/Shardeum.png",
          },
        ]}
        openGraph={{
          url: "https://shardeum.org/language/",
          title: "Introduce Shardeum to your native community",
          description:
            "Come help us translate resources in your native languages and introduce Shardeum to your community.",
          images: [
            {
              url: "https://shardeum.org/Shardeum.png",
              width: 800,
              height: 600,
              alt: "Shardeum Language | Come help us translate resources in your native languages and introduce Shardeum to your community.",
              type: "image/jpeg",
            },
          ],
          site_name:
            "Shardeum Language | Come help us translate resources in your native languages and introduce Shardeum to your community.",
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
            <Box ml="3" boxSize="6">
              <IconRightArrow />
            </Box>
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
