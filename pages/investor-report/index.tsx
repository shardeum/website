/* eslint-disable react/no-unknown-property */
import { NotionAPI } from "notion-client";
import { Container, Flex, Text, VStack } from "@chakra-ui/react";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";
import InvestorPagesLinks from "constants/investor-pages";
import { NextSeo } from "next-seo";
import { getPageTitle } from "notion-utils";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Hero from "components/sections/Hero";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";

const Page = () => {
  const title = "Investor Report";
  const canonical = "https://shardeum.org/investor-report/";
  const description = "Investor Report";
  const image = "https://shardeum.org/Shardeum.png";
  return (
    <>
      <Hero
        cta={
          <>
            <Text
              fontSize={{ base: "md", lg: "xl" }}
              textAlign="left"
              lineHeight={{ base: "7", md: "8" }}
              // color={"#37352f"}
              // paddingLeft="7.9cm"
            >
              <p>
                <NextLink href="/" passHref>
                  Home
                </NextLink>{" "}
                / Investor Report
              </p>
            </Text>
          </>
        }
      />
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        additionalMetaTags={[
          {
            property: "keywords",
            content: "shardeum,blockchain,layer1 blockchain,evm compatible blockchain",
          },
          {
            property: "twitter:image",
            content: image,
          },
        ]}
        openGraph={{
          title: title,
          type: "website",
          url: canonical,

          description: description,
          images: [
            {
              url: image,
              alt: "Shardeum Image",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "https://shardeum.org",
          handle: "@shardeum",
        }}
      />
      <Flex bg="brand.white" as="section">
        <Container
          maxW="container.xl"
          mx="auto"
          py={{ base: "9", md: "10" }}
          px={{ base: 6, xl: 0 }}
        >
          <script
            dangerouslySetInnerHTML={{
              __html: `<script type="application/ld+json">
                {
                  "@context": "https://schema.org/", 
                  "@type": "BreadcrumbList", 
                  "itemListElement": [{
                    "@type": "ListItem", 
                    "position": 1, 
                    "name": "Home",
                    "item": "https://shardeum.org/"  
                  },{
                    "@type": "ListItem", 
                    "position": 2, 
                    "name": "Super Shardian: Proof Of Community",
                    "item": "https://shardeum.org/proof-of-community-program/"  
                  }]
                }
                </script>`,
            }}
          ></script>
          <Text
            fontSize={{ base: "md", lg: "xl" }}
            textAlign="center"
            lineHeight={{ base: "7", md: "8" }}
            color={"#37352f"}
          >
            {InvestorPagesLinks.map((links) => (
              <Text key={links.slug} py="2">
                <NextLink href={`/investor-report/${links.slug}`} passHref>
                  {links.name}
                </NextLink>
              </Text>
            ))}
          </Text>
        </Container>
      </Flex>
    </>
  );
};
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 10, // In seconds
  };
}

export default Page;
