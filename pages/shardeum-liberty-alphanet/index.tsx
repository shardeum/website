import React, { useEffect } from "react";

import { Box, Button, Stack, Flex, Center, Text, SimpleGrid, Link } from "@chakra-ui/react";
import type { NextPage } from "next";
import Hero from "components/sections/Hero";
import JoinCommunity from "components/sections/JoinCommunity";
import Roadmap from "../../components/sections/alphanet/Roadmap";
import UseCases from "components/sections/UseCases";
import FAQs from "components/sections/FAQs";
import Image from "next/image";
import { AlphanetFeatureIcons } from "@shm/Icons";
import { NextSeo } from "next-seo";
import { CLAIM_100_SHM_LINK, DOCS_URL } from "constants/links";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import WhatCanYoDo from "@shm/components/sections/WhatCanYouDo";
import SlidingStats from "@shm/components/common/SlidingStats";
import { IconGlobe, IconTransaction, IconWeb3 } from "@shm/Icons";
import NextLink from "next/link";

const AlphanetLanding: NextPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = `{
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
      "name": "Shardeum Liberty (Alphanet)",
      "item": "https://shardeum.org/shardeum-liberty-alphanet/" 
      }]
      };`;

    document.head.appendChild(script);
  }, []);
  const { t: pageTranslation } = useTranslation(["page-alphanet"]);
  const { t: commonTranslation } = useTranslation(["common"]);
  const stats = [
    { Icon: IconTransaction, title: "total-transaction" },
    { Icon: IconGlobe, title: "total-accounts" },
    { Icon: IconGlobe, title: "total-contracts" },
    { Icon: IconGlobe, title: "active-nodes" },
    { Icon: IconTransaction, title: "total-transaction" },
    { Icon: IconGlobe, title: "total-accounts" },
    { Icon: IconGlobe, title: "total-contracts" },
    { Icon: IconGlobe, title: "active-nodes" },
  ];
  return (
    <>
      <NextSeo
        title={
          "Shardeum Liberty | Alphanet | Build scalable dApps and Web3 applications on Shardeum"
        }
        description="Shardeum is the world’s first layer 1 blockchain that truly solves scalability trilemma. It is an EVM based smart contract network that scales linearly with low gas fees forever with an aim to onboard billions of daily users and numerous DApps to Web 3"
        canonical="https://shardeum.org/shardeum-liberty-alphanet/"
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "shardeum, shardeum liberty, testnet, alphanet, blockchain,layer1 blockchain,evm compatible blockchain",
          },
          {
            property: "twitter:image",
            content: "https://shardeum.org/shardeum-liberty.jpeg",
          },
        ]}
        openGraph={{
          url: "https://shardeum.org/shardeum-liberty-alphanet/",
          title: "Shardeum Liberty | Alphanet | Build your DApps and Web3 services on Shardeum",
          description:
            "Shardeum is the world’s first layer 1 blockchain that truly solves scalability trilemma. It is an EVM based smart contract network that scales linearly with low gas fees forever with an aim to onboard billions of daily users and numerous DApps to Web 3",
          images: [
            {
              url: "https://shardeum.org/shardeum-liberty.jpeg",
              width: 800,
              height: 600,
              alt: "Shardeum Liberty | Alphanet | Build your DApps and Web3 services on Shardeum",
              type: "image/jpeg",
            },
          ],
          site_name: "Shardeum Liberty | Alphanet | Build your DApps and Web3 services on Shardeum",
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "https://shardeum.org",
          handle: "@shardeum",
        }}
      />

      {/* Hero section */}
      <Hero
        heading={pageTranslation("page-alphanet-hero-h1")}
        description={pageTranslation("page-alphanet-hero-description")}
        breadcrumb={
          <>
            <p>
              <NextLink href="/" passHref>
                Home
              </NextLink>{" "}
              / Shardeum Liberty (Alphanet)
            </p>
          </>
        }
        cta={
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: `	
                {	
                @context: "https://schema.org",	
                @type: "FAQPage",	
                mainEntity: [{	
                @type: "Question",	
                name: "What is Shardeum?",	
                acceptedAnswer: {	
                @type: "Answer",	
                text: "Shardeum is an EVM-based sharded layer 1 blockchain that uses dynamic state sharding to increase transactions per second (TPS) with the addition of every new node."	
                }	
                },{	
                @type: "Question",	
                name: "Who will use Shardeum?",	
                acceptedAnswer: {	
                @type: "Answer",	
                text: "Shardeum aims to be capable of onboarding over a billion people to Web3. Like the Internet, Shardeum is Open, Collaborative, and Community-driven with a mission to provide decentralization for everyone."	
                }	
                },{	
                @type: "Question",	
                name: "What languages can be used to write smart contracts on the Shardeum network?",	
                acceptedAnswer: {	
                @type: "Answer",	
                text: "EVM-compatible languages can be used to compile smart contracts; this includes Solidity and Vyper."	
                }	
                },{	
                @type: "Question",	
                name: "How can I contribute to Liberty as a developer?",	
                acceptedAnswer: {	
                @type: "Answer",	
                text: "You can build and deploy smart contracts on Liberty by following the developer documentation. List your smart contract here to publicize it among the community and become a leader in the Shardeum ecosystem. Pro-tip: If you already have a smart contract deployed on Ethereum, you can migrate it to Liberty within seconds."	
                }	
                },{	
                @type: "Question",	
                name: "How can the community get involved with Liberty?",	
                acceptedAnswer: {	
                @type: "Answer",	
                text: "Everyone in the Shardeum community can add the Liberty network to their wallet, request testnet SHM from the faucet and interact with smart contracts."	
                }	
                },{	
                @type: "Question",	
                name: "I already have a smart contract deployed on Ethereum. Can I easily migrate it to Liberty?",	
                acceptedAnswer: {	
                @type: "Answer",	
                text: "Since Shardeum is EVM-based, it's as simple as deploying your existing code to the Shardeum network. If you have built for Ethereum, you have built for Shardeum."	
                }	
                }]	
                }	
                `,
              }}
            />
            <Stack
              spacing="4"
              direction={{ base: "column", sm: "row" }}
              width={{ base: "full", sm: "auto" }}
            >
              <Button
                as="a"
                variant="secondary"
                size="lg"
                rel="noopener noreferrer"
                target="_blank"
                href={DOCS_URL}
              >
                {pageTranslation("page-alphanet-hero-cta")}
              </Button>
              <Button
                as="a"
                variant="primary"
                size="lg"
                rel="noopener noreferrer"
                target="_blank"
                href={CLAIM_100_SHM_LINK}
              >
                {commonTranslation("claim-100-shm-cta")}
              </Button>
            </Stack>
          </>
        }
        media={
          <Box position="relative" h="full">
            <Image
              objectFit="contain"
              src="/alphanet/alphanet-hero.png"
              alt="Shardeum Alphanet is Live"
              layout="fill"
            />
          </Box>
        }
      />
      <Box position="relative">
        <Center
          maxW="30%"
          bg="black"
          position="absolute"
          zIndex="9"
          h="100%"
          borderColor="brand.grey-50"
          borderTopWidth="1px"
          borderBottomWidth="1px"
          px={{ base: "4", md: "6", lg: "9" }}
        >
          <Text fontSize={{ base: "xl", lg: "2xl" }}>Liberty Metrics</Text>
        </Center>

        <SlidingStats stats={stats} />
      </Box>
      {/* Features of alphanet */}
      <UseCases
        heading={pageTranslation("page-alphanet-hero-features-h1")}
        content={Array(6)
          .fill(0)
          .map((_, index) => ({
            title: pageTranslation(`page-alphanet-hero-features-${index + 1}-title`),
            description: pageTranslation(`page-alphanet-hero-features-${index + 1}-description`),
            Icon: () => AlphanetFeatureIcons({ id: `${index + 1}` }),
          }))}
      />
      <WhatCanYoDo />
      {/* Alphanet roadmap */}
      <Roadmap />

      <FAQs
        heading={pageTranslation("page-alphanet-faq-h1")}
        content={Array(6)
          .fill(0)
          .map((_, index) => ({
            q: pageTranslation(`page-alphanet-faq-${index + 1}-q`),
            a: pageTranslation(`page-alphanet-faq-${index + 1}-a`),
          }))}
      />

      {/* Join community - common CTA */}
      <JoinCommunity />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "page-alphanet"])),
      // Will be passed to the page component as props
    },
  };
}

export default AlphanetLanding;
