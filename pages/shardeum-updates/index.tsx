/* eslint-disable react/no-unknown-property */
import { NotionAPI } from "notion-client";
import { Container, Flex, Text, VStack, useBreakpointValue, Stack, Button } from "@chakra-ui/react";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";
import CommunityUpdatesLinks from "constants/community-updates";
import { NextSeo } from "next-seo";
import { getPageTitle } from "notion-utils";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import ResponsiveHero from "components/sections/ResponsiveHero";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import { Box, Center, Heading, Avatar, useColorModeValue, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

const Page = () => {
  const reCommunityUpdatesLinks = CommunityUpdatesLinks.slice(0).reverse();
  const title = "Shardeum Updates";
  const canonical = "https://shardeum.org/shardeum-updates/";
  const description =
    "At Shardeum, we embrace an open, collaborative, and community-driven approach. Stay updated with our monthly updates as we build the future of decentralization together";
  const image =
    "https://shardeum.org/explore/wp-content/uploads/2023/08/photo_2023-08-01_12-21-46.jpg";
  return (
    <>
      <ResponsiveHero
        heading={title}
        description={
          <>
            <p>Community is the CEO of Shardeum!</p>
            <small>{description}</small>
          </>
        }
        breadcrumb={<></>}
        cta={<></>}
        src={"/community/community-hero.png"}
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
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
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
                  "name": "Shardeum Community Update",
                  "item": "https://shardeum.org/shardeum-updates/"  
                }]
              }`,
            }}
          />

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} py={6}>
            {reCommunityUpdatesLinks.map((links) => (
              <Box
                key={links.slug}
                maxW={"445px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"xl"}
                p={6}
                overflow={"hidden"}
              >
                <Box h={"210px"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
                  <NextLink href={`/shardeum-updates/${links.slug}`}>
                    <Image alt="" src={links.image} layout="fill" objectFit={"cover"} />
                  </NextLink>
                </Box>
                <Stack>
                  <Heading
                    color={useColorModeValue("gray.700", "white")}
                    fontSize={"2xl"}
                    fontFamily={"body"}
                  >
                    <NextLink href={`/shardeum-updates/${links.slug}`} legacyBehavior>
                      {links.name}
                    </NextLink>
                  </Heading>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
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
