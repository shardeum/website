import React, { useEffect } from "react";
import { Box, Flex, Container, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Hero from "components/sections/Hero";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Script from "next/script";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Head from "next/head";
import { Helmet } from "react-helmet";

const Quest: NextPage = () => {
  const router = useRouter();

  const { t: pageTranslation } = useTranslation(["page-quest"]);
  const { t: commonTranslation } = useTranslation(["common"]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.bandit.network/static/js/index.js";
    script.async = true;
    script.onload = () => {
      // Call the function from the loaded script here
      renderStats({
        launchpad: {
          buttonTitle: "Launchpad",
          allowedChains: [8081],
        },
        allowedChains: [8081],
      });
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the dynamically added script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Head>
        <title>{`Shardeum Quest`}</title>
        <meta name="title" content="Shardeum Quests: Engage, Contribute, and Earn Rewards!" />
        <meta
          name="description"
          content="Join the Shardeum quests and immerse yourself in challenges that inspire and reward. Complete the missions and win exclusive rewards like NFTs, cash prizes, and more. Be part of the rising Shardeum ecosystem and contribute to building the future of decentralized platforms."
        />
        <meta
          name="keywords"
          content="Shardeum quests, Blockchain, EVM, Crypto, Missions, Users, NFT, Challenges, Participate, Network, Platform, rewards, Rising, contests, Decentralized, Projects"
        />
        <meta
          property="og:title"
          content="Shardeum Quests: Engage, Contribute, and Earn Rewards!"
        />
        <meta
          property="og:description"
          content="Join the Shardeum quests and immerse yourself in challenges that inspire and reward. Complete the missions and win exclusive rewards like NFTs, cash prizes, and more. Be part of the rising Shardeum ecosystem and contribute to building the future of decentralized platforms."
        />
        <meta
          property="og:image"
          content="https://shardeum.org/blog/wp-content/uploads/2023/07/Shardeum-Quests-2000x1000-1.png"
        />

        <meta property="og:url" content="https://shardeum.org/quests/" />
        <meta
          name="twitter:title"
          content="Shardeum Quests: Engage, Contribute, and Earn Rewards!"
        />
        <meta
          name="twitter:description"
          content="Join the Shardeum quests and immerse yourself in challenges that inspire and reward. Complete the missions and win exclusive rewards like NFTs, cash prizes, and more. Be part of the rising Shardeum ecosystem and contribute to building the future of decentralized platforms."
        />
        <meta
          property="twitter:image"
          content="https://shardeum.org/blog/wp-content/uploads/2023/07/Shardeum-Quests-2000x1000-1.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://shardeum.org/quests/" />
      </Head>

      {/* Hero section */}
      <Hero
        heading="Shardeum Quest!"
        description={
          <>
            <b>Engage, Contribute, and Earn Rewards!</b>
            <Text
              marginY="4"
              fontSize={{ base: "sm", lg: "md" }}
              color={"#fff"}
              // paddingLeft="7.9cm"
            >
              Participate in campaigns organized by Shardeum, the Shardeum community, and Dapps
              building on Shardeum, and stand a chance to win exclusive rewards like NFTs, cash
              prize, merch and much more
            </Text>
          </>
        }
      />
      <Flex bg="brand.white" as="section">
        <Container
          maxW="container.xl"
          mx="auto"
          py={{ base: "9", md: "10" }}
          px={{ base: 6, xl: 0 }}
        >
          <div data-access-key="55d91a8c797948aa842bf6d1bfe1fc70" id="bad-stats"></div>
        </Container>
      </Flex>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "page-quest"])),
      // Will be passed to the page component as props
    },
  };
}

export default Quest;
