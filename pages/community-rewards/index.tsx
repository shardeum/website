/* eslint-disable react/no-unknown-property */
import { NotionAPI } from "notion-client";
import { Container, Flex, Text, VStack } from "@chakra-ui/react";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";
import NotionPagesLinks from "constants/notion";
import { NextSeo } from "next-seo";
import { getPageTitle } from "notion-utils";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import NextLink from "next/link";
import Hero from "components/sections/Hero";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Modal } from "react-notion-x/build/third-party/modal";

const Page = ({
  recordMap,
  notionPageDetails,
}: {
  recordMap: ExtendedRecordMap;
  notionPageDetails: any;
}) => {
  console.log(recordMap);
  const title = "Community Rewards";
  const canonical = "https://shardeum.org/community-rewards/";
  const description = "";
  const image = "";
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
                / {title}
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
              __html:
                `<script type="application/ld+json">
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
                    "name": "` +
                title +
                `",
                    "item": "` +
                canonical +
                `"  
                  }]
                }
                </script>`,
            }}
          ></script>
          {/* <Text
            fontSize={{ base: "md", lg: "xl" }}
            textAlign="left"
            lineHeight={{ base: "7", md: "8" }}
            color={"#37352f"}
            paddingLeft="7.9cm"
          >
            <p>
              <NextLink href="/" passHref>
                Home
              </NextLink>{" "}
              / Privacy Policy
            </p>
          </Text> */}
          <NotionRenderer
            recordMap={recordMap}
            fullPage={true}
            darkMode={false}
            components={{ Collection, Modal }}
          />
        </Container>
      </Flex>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const notion = new NotionAPI();
  const pageId = "community-rewards";
  // console.log(NotionPagesLinks);
  let notionPageDetails = { slug: "", notionId: "", title: "", description: "", image: "" };
  for (const nPage of NotionPagesLinks) {
    // console.log(nPage);
    if (nPage.slug == pageId) notionPageDetails = nPage;
  }

  if (!notionPageDetails.notionId) {
    //Redirect to 404
    return {
      // returns the default 404 page with a status code of 404
      notFound: true,
    };
  }
  // const notionPageDetails = NotionPagesLinks[pageId];
  const recordMap = await notion.getPage("98fea29f5f5f45c1be7f28f32d147ff4");
  //  console.log(recordMap);
  return {
    props: {
      recordMap,
      notionPageDetails,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 10, // In seconds
  };
}

export default Page;
