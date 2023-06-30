import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import ResponsiveHero from "components/sections/ResponsiveHero";
import JoinCommunity from "components/sections/JoinCommunity";
import { NextSeo } from "next-seo";
import { DISCORD_URL } from "constants/links";
import CommunityIntro from "@shm/components/sections/community/CommunityIntro";
import CommunityTiles from "@shm/components/sections/community/CommunityTiles";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getCommunityStats } from "utils/api";
import { CommunityStat } from "types";
import CommunitySuperShardianBox from "@shm/components/sections/community/CommunitySuperShardianBox";
import NextLink from "next/link";
import Head from "next/head";

const Community = ({ communityStats }: { communityStats: CommunityStat[] }): React.ReactNode => {
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
    //   "name": "Community",
    //   "item": "https://shardeum.org/community/"
    //   }]
    //   };`;
    // document.head.appendChild(script);
  }, []);
  const { t: pageTranslation } = useTranslation("page-community");

  return (
    <>
      {/* <Helmet>
        
      </Helmet> */}
      <Head>
        <title>{"Shardeum Community | Community is the CEO of Shardeum"}</title>
        <meta
          name="description"
          content="Shardeum welcomes you to join its community of moderators, content creators, event organizers, users and you name it on the fastest growing L1 blockchain ecosystem"
        />
        <meta
          name="keywords"
          content="super shardian, shardeum, contributors, rewards, shardeum community, developers, testnet, blockchain,layer1 blockchain,evm based blockchain"
        />
        <meta property="og:title" content="Shardeum Community | Community is the CEO of Shardeum" />
        <meta
          property="og:description"
          content="Shardeum welcomes you to join its community of moderators, content creators, event organizers, users and you name it on the fastest growing L1 blockchain ecosystem"
        />
        <meta property="og:url" content="https://shardeum.org/community/" />
        <meta property="og:image" content="https://shardeum.org/Shardeum.png" />
        <meta
          name="twitter:title"
          content="Shardeum Community | Community is the CEO of Shardeum"
        />
        <meta
          name="twitter:description"
          content="Shardeum welcomes you to join its community of moderators, content creators, event organizers, users and you name it on the fastest growing L1 blockchain ecosystem"
        />
        <meta name="twitter:image" content="https://shardeum.org/Shardeum.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shardeum" />
        <link rel="canonical" href="https://shardeum.org/community/" />

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
                "name": "Community",
                "item": "https://shardeum.org/community/"  
              }]
            }`,
          }}
        />
      </Head>
      {/* <NextSeo
        title="Shardeum Community | Community is the CEO of Shardeum"
        description="Shardeum welcomes you to join its community of moderators, content creators, event organizers, users and you name it on the fastest growing L1 blockchain ecosystem"
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
          title: "Shardeum Community | Community is the CEO of Shardeum",
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
      /> */}

      {/* Hero section */}
      <ResponsiveHero
        heading={pageTranslation("page-community-hero-h1")}
        description={pageTranslation("page-community-hero-description")}
        breadcrumb={
          <>
            <p>
              <NextLink href="/" passHref>
                Home
              </NextLink>
              / Community
            </p>
          </>
        }
        cta={
          <>
            <Button
              as="a"
              variant="primary"
              size="lg"
              rel="noopener noreferrer"
              target="_blank"
              style={{ backgroundColor: "#3241e8" }}
              href={DISCORD_URL}
              mt={8}
            >
              {pageTranslation("page-community-hero-cta")}
            </Button>
          </>
        }
        src={"/community/community-hero.png"}
      />

      <CommunityIntro />

      <CommunityTiles communityStats={communityStats} />

      <CommunitySuperShardianBox />

      {/* Join community - common CTA */}
      <JoinCommunity />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const communityStats: CommunityStat[] = await getCommunityStats();

  return {
    props: {
      communityStats,
      ...(await serverSideTranslations(locale, ["common", "page-community"])),
      // Will be passed to the page component as props
    },
  };
}

export default Community;
