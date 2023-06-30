import React, { useEffect } from "react";

import { Container, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NewsletterInput from "../../components/common/NewsletterInput";
import JoinCommunity from "../../components/sections/JoinCommunity";
import NextLink from "next/link";
import Hero from "components/sections/Hero";
import { Helmet } from "react-helmet";
import Head from "next/head";

function Newsletter() {
  useEffect(() => {
    // const script = document.createElement("script");
    // script.type = "application/ld+json";
    // script.text = `{
    //   "@context": "https://schema.org/",
    //   "@type": "BreadcrumbList",
    //   "itemListElement": [{
    //   "@type": "ListItem",
    //   "position": 1,
    //   "name": "Home",
    //   "item": "https://shardeum.org/"
    //   },{
    //   "@type": "ListItem",
    //   "position": 2,
    //   "name": "Newsletter",
    //   "item": "https://shardeum.org/newsletter/"
    //   }]
    //   };`;
    // document.head.appendChild(script);
  }, []);
  const { t: pageTranslation } = useTranslation("page-newsletter");
  return (
    <>
      {/* <Helmet>
        
      </Helmet> */}
      <Head>
        <title>{`Shardeum | NewsLetter`}</title>
        <meta
          name="description"
          content={`Stay up-to-date with the latest news, topics and trends on the world's fastest growing L1 ecosystem`}
        />
        <meta
          name="keywords"
          content="shardeum,blockchain,layer1 blockchain,evm based blockchain"
        />

        {/* Facebook */}
        <meta property="og:url" content={`https://shardeum.org/newsletter/`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Shardeum | NewsLetter`} />
        <meta
          property="og:description"
          content={`Stay up-to-date with the latest news, topics and trends on the world's fastest growing L1 ecosystem`}
        />
        <meta property="og:image" content={`https://shardeum.org/Shardeum.png`} />

        {/* Twiter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://shardeum.org/" />
        <meta property="twitter:url" content={`https://shardeum.org/newsletter/`} />
        <meta property="twitter:title" content={`Shardeum | NewsLetter`} />
        <meta
          property="twitter:description"
          content={`Stay up-to-date with the latest news, topics and trends on the world's fastest growing L1 ecosystem`}
        />
        <meta property="twitter:image" content={`https://shardeum.org/Shardeum.png`} />

        {/* <meta property="og:site_name" content={`Shardeum | Ecosystem ${project.name}`} /> */}

        {/* <meta name="twitter:title" content={`Shardeum | Ecosystem ${project.name}`} /> */}
        {/* <meta name="twitter:description" content={project.description.substring(0, 160)} /> */}
        {/* <meta
          name="twitter:image"
          content={project.logo || `https://shardeum.org/Shardeum.png`}
        /> */}
        <meta name="twitter:site" content="@shardeum" />
        <link rel="canonical" href="https://shardeum.org/newsletter/" />

        <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/08f8687cb2b708c3de5b4b9f/script.js"
        ></script>

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
                "name": "Newsletter",
                "item": "https://shardeum.org/newsletter/"  
              }]
            }`,
          }}
        />
      </Head>
      {/* <script
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
                "name": "Newsletter",
                "item": "https://shardeum.org/newsletter/"  
              }]
            }
            </script>	`,
        }}
      ></script> */}
      <Hero />
      <Container maxW="container" mx="auto" py="12" px={{ base: "6", xl: "0" }} bg="brand.black">
        <VStack
          spacing="6"
          maxW={{ base: "xl", lg: "3xl" }}
          mx="auto"
          my="auto"
          h={{ base: "30vh", lg: "50vh" }}
          justifyContent="center"
        >
          <VStack
            alignItems={{ base: "left", md: "center" }}
            spacing="6"
            maxWidth="2xl"
            mx="auto"
            w="full"
          >
            <Text
              fontSize={{ base: "md", lg: "xl" }}
              textAlign="left"
              lineHeight={{ base: "7", md: "8" }}
              color={"brand.grey-20"}
            >
              <p>
                <NextLink href="/" passHref>
                  Home
                </NextLink>{" "}
                / Newsletter
              </p>
            </Text>
            <Text fontSize={{ base: "base", md: "xl" }} color="brand.white">
              <h1>{pageTranslation("page-newsletter-newsletter-title")}</h1>
            </Text>
          </VStack>
          <NewsletterInput type="newsletterPage" />
        </VStack>
      </Container>
      <JoinCommunity />
    </>
  );
}
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "page-newsletter"])),
    },
  };
}

export default Newsletter;
