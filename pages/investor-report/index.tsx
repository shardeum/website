/* eslint-disable react/no-unknown-property */
import { NotionAPI } from "notion-client";
import { Container, Flex, Text, VStack, useBreakpointValue, Stack, Button } from "@chakra-ui/react";
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
import { Box, Center, Heading, Avatar, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

const Page = () => {
  const title = "Shardeum Investor Report";
  const canonical = "https://shardeum.org/investor-report/";
  const description =
    "Stay ahead of the curve and unlock valuable insights with Shardeum's Investor Report that will be published on our website every month. You don't want to miss this!";
  const image =
    "https://shardeum.org/explore/wp-content/uploads/2023/05/Shardeum-Investor-Report.jpg";
  return (
    <>
      <Hero
        heading="Shardeum Investor Report"
        backgroundImage={
          "url(https://shardeum.org/explore/wp-content/uploads/2023/05/charles-forerunner-3fPXt37X6UQ-unsplash-1.png)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        description=""
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
                    "name": "Shardeum Investor Report",
                    "item": "https://shardeum.org/investor-report/"  
                  }]
                }
                </script>`,
            }}
          ></script>
          <Text fontSize="3xl" color="#000">
            Investor Updates
          </Text>
          <Center gap={6} py={6}>
            {InvestorPagesLinks.reverse().map((links) => (
              <Box
                key={links.slug}
                maxW={"445px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
              >
                <Box h={"210px"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
                  <NextLink href={`/investor-report/${links.slug}`}>
                    <a>
                      <Image src={links.image} layout={"fill"} />
                    </a>
                  </NextLink>
                </Box>
                <Stack>
                  <Heading
                    color={useColorModeValue("gray.700", "white")}
                    fontSize={"2xl"}
                    fontFamily={"body"}
                  >
                    <NextLink href={`/investor-report/${links.slug}`}>{links.name}</NextLink>
                  </Heading>
                </Stack>
              </Box>
            ))}
          </Center>
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
