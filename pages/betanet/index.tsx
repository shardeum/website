/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Head from "next/head";

import {
  Box,
  Button,
  Stack,
  Flex,
  Center,
  Text,
  SimpleGrid,
  Link,
  Heading,
  Img,
  background,
} from "@chakra-ui/react";
import { Container, VStack, ListItem, OrderedList, Grid, GridItem } from "@chakra-ui/react";

import type { NextPage } from "next";
import Hero from "components/sections/Hero";
import JoinCommunity from "components/sections/JoinCommunity";
import Roadmap from "../../components/sections/alphanet/Roadmap";
import UseCases from "components/sections/UseCases";
import FAQs from "components/sections/FAQs";
import SectionHeading from "../../components/common/SectionHeading";
import Image from "next/image";
import { AlphanetFeatureIcons } from "@shm/Icons";
import { NextSeo } from "next-seo";
import { CLAIM_100_SHM_LINK, DOCS_URL, BETANETIMAGE, REPORT_BUGS } from "constants/links";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import WhatCanYoDo from "@shm/components/sections/WhatCanYouDo";
import SlidingStats from "@shm/components/common/SlidingStats";
import { IconGlobe, IconTransaction, IconWeb3 } from "@shm/Icons";
import { CheckIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const AlphanetLanding: NextPage = () => {
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
    //   "name": "Shardeum Liberty (Alphanet)",
    //   "item": "https://shardeum.org/shardeum-liberty-alphanet/"
    //   }]
    //   };`;
    // document.head.appendChild(script);
  }, []);
  const { t: pageTranslation } = useTranslation(["page-alphanet"]);
  const { t: commonTranslation } = useTranslation(["common"]);
  const [showMoreFAQ, setShowMoreFAQ] = useState(false);

  const stats = [
    { Icon: IconTransaction, title: "total-transaction-sphinx" },
    { Icon: IconGlobe, title: "total-accounts-sphinx" },
    { Icon: IconGlobe, title: "total-contracts-sphinx" },
    { Icon: IconGlobe, title: "total-stake-transactions-sphinx" },
    { Icon: IconGlobe, title: "total-unstake-transactions-sphinx" },
    { Icon: IconGlobe, title: "active-nodes-sphinx" },
    { Icon: IconGlobe, title: "active-nodes-shm-sphinx" },
    { Icon: IconGlobe, title: "active-nodes-stakeShm-sphinx" },
    { Icon: IconTransaction, title: "total-transaction-sphinx" },
    { Icon: IconGlobe, title: "total-accounts-sphinx" },
    { Icon: IconGlobe, title: "total-contracts-sphinx" },
    { Icon: IconGlobe, title: "total-stake-transactions-sphinx" },
    { Icon: IconGlobe, title: "total-unstake-transactions-sphinx" },
    { Icon: IconGlobe, title: "active-nodes-sphinx" },
    { Icon: IconGlobe, title: "active-nodes-shm-sphinx" },
    { Icon: IconGlobe, title: "active-nodes-stakeShm-sphinx" },
  ];

  const showFAQ = () => {
    setShowMoreFAQ(true);
  };

  const setGotoPage = (value: any) => {
    window.open(value, "_blank");
  };
  return (
    <>
      <Head>
        <title>{`Shardeum | Betanet`}</title>
        <meta
          name="description"
          content={`Join the fastest-growing L1 ecosystem as a node validator, smart contract developer, or community contributor in the mission to onboard billions of people to Web3`}
        />
        <meta
          name="keywords"
          content="shardeum,blockchain,layer1 blockchain,evm based blockchain"
        />

        {/* Facebook */}
        <meta property="og:url" content={`https://shardeum.org/betanet/`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Shardeum | Betanet`} />
        <meta
          property="og:description"
          content={`Join the fastest-growing L1 ecosystem as a node validator, smart contract developer, or community contributor in the mission to onboard billions of people to Web3`}
        />
        <meta property="og:image" content={`https://shardeum.org` + BETANETIMAGE} />

        {/* Twiter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://shardeum.org/" />
        <meta property="twitter:url" content={`https://shardeum.org/betanet/`} />
        <meta property="twitter:title" content={`Shardeum | Betanet`} />
        <meta
          property="twitter:description"
          content={`Join the fastest-growing L1 ecosystem as a node validator, smart contract developer, or community contributor in the mission to onboard billions of people to Web3`}
        />
        <meta property="twitter:image" content={`https://shardeum.org` + BETANETIMAGE} />

        {/* <meta property="og:site_name" content={`Shardeum | Ecosystem ${project.name}`} /> */}

        {/* <meta name="twitter:title" content={`Shardeum | Ecosystem ${project.name}`} /> */}
        {/* <meta name="twitter:description" content={project.description.substring(0, 160)} /> */}
        {/* <meta
          name="twitter:image"
          content={project.logo || BETANETIMAGE}
        /> */}
        <meta name="twitter:site" content="@shardeum" />
        <link rel="canonical" href="https://shardeum.org/betanet/" />
        <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/08f8687cb2b708c3de5b4b9f/script.js"
        ></script>
      </Head>

      {/* Hero section */}
      <Hero
        heading={pageTranslation("page-betanet-hero-h1")}
        description={pageTranslation("page-betanet-hero-description")}
        breadcrumb={
          <>
            <p>
              <NextLink href="/" passHref>
                Home
              </NextLink>{" "}
              / Betanet
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
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [{
                    "@type": "Question",
                    "name": "What are the requirements to run a node on betanet?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Minimum hardware requirements :
                
                -250 GB ssd storage
                -Quad core CPU less than 10 years old if self hosting
                -Dual core CPU works if hosted with newer Xeons / EPYC
                -16 GB of ram, 4+ GB of virtual memory recommended
                -Hosting: 8 GB RAM + 8 GB Virtual Memory"
                    }
                  },{
                    "@type": "Question",
                    "name": "How do GUI and CLI features help me in operating a node?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "With GUI, you can start running a node with a few clicks of your mouse. Shardeum is one of the first L1 networks to enable user-friendly GUI feature for node validators
                CLI is the primary interface used by the vast majority of blockchain networks. It is enabled for more advanced users and developers who intend to work with nodes more deeply and technically"
                    }
                  },{
                    "@type": "Question",
                    "name": "What is the reward I will get by running an honest node on betanet?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Your node will earn Betanet SHM, but these will not have any value. That said, we will be keeping track of the addresses that helped out during Betanet. While we haven’t yet decided on Mainnet rewards for Betanet users, we’ll announce in due time if and when it is decided."
                    }
                  },{
                    "@type": "Question",
                    "name": "My Node status is Standby. What does it mean and when does it become active?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "When you have the needed amount of SHM staked and you start your node, your Node starts with a Standby status. This means that it is ready to be included in the network. Whenever network rotation occurs, your node will get the opportunity to become Active. This will entirely depend on the network demand and there is no fixed timeline when your node will become Active."
                    }
                  },{
                    "@type": "Question",
                    "name": "My transaction is failing whenever I try to add stake on my Validator.",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Please Reset your Metamask Wallet. (Settings > Advanced > Reset Account)"
                    }
                  },{
                    "@type": "Question",
                    "name": "Can I run a Shardeum Validator on Windows?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "While the team has not done extensive testing on windows, technically if you have Windows Subsystem for Linux (WSL) in your system, you should be able to run a Shardeum validator node."
                    }
                  },{
                    "@type": "Question",
                    "name": "Troubleshoot Error: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock:",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Run the following command in your shell --> sudo usermod -a -G docker $USER && newgrp docker
                Then run the shell script again."
                    }
                  },{
                    "@type": "Question",
                    "name": "I see my Validator IP as 0.0.0.0 and get the error of Node cannot join with invalid external IP: 0.0.0.0. What should I do?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Go into the operator dashboard docker (may be different if you customized install location)
                
                cd ~/.shardeum
                ./shell.sh
                
                Get your node's external IP:
                curl https://ipinfo.io/ip
                
                The returned IP in the format of nnn.nnn.nnn.nnn is your EXTERNAL_IP.
                Set the number above in place of EXTERNAL_IP:
                export APP_IP="EXTERNAL_IP"
                    }
                  },{
                    "@type": "Question",
                    "name": "How to do a fresh install of a Shardeum Node?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Use the following commands in your shell:
                
                cd ~/.shardeum
                ./cleanup.sh
                cd ~/
                rm -rf .shardeum
                rm installer.sh
                
                After these, Start from Step 2 from the Validator Node Installation Guide"
                    }
                  },{
                    "@type": "Question",
                    "name": "Can I operate archive nodes on betanet?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "During betanet the community can operate Validator nodes. After mainnet, community can also operate Archiver nodes."
                    }
                  },{
                    "@type": "Question",
                    "name": "What would be the requirement and incentive to run an archive node?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Requirements for running an Archiver will be determined during betanet, but approximately, it would be: 32 core, 256GB RAM, 4TB SSD"
                    }
                  },{
                    "@type": "Question",
                    "name": "What is the process for bug bounties and where do I report bugs on betanet?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Please report bugs on betanet here. Details of the bounties will be announced after the release of Betanet."
                    }
                  },{
                    "@type": "Question",
                    "name": "When can we expect whitepaper to be released?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Whitepaper will be released around the same time as the launch of betanet"
                    }
                  },{
                    "@type": "Question",
                    "name": "When will the protocol be made open-source?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The Shardeum code will be open-sourced around the same time as the launch of betanet"
                    }
                  },{
                    "@type": "Question",
                    "name": "What are the unique features in Shardeum apart from typical features that comes with a L1 blockchain network?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Dynamic State Sharding
                Consensus and processing are done at transaction level on Shardeum instead of the block level which you find with existing blockchain networks. Through dynamic state sharding, the network will shard its state by evenly and dynamically distributing compute workload, storage, and bandwidth among all the nodes. This not only allows for parallel processing of transactions but also very low overhead for validator nodes as they will store only the state data of transactions they are involved in. Shardeum will be the first Web3 network to scale linearly . Dynamic state sharding is the most advanced version of state, transaction/network and static state sharding employed by more recent sharded chains which runs into both inter-related and standalone problems such as high latency, vertical scaling (as opposed to linear scaling), sybil attack, weak finality and lack of cross shard composability. Shardeum, will further maintain atomic and cross-shard composability.
                Linear Scalability
                With the help of dynamic state sharding, every node added to the network will increase the transaction throughput instantly. So basically, by simply adding more nodes from the network’s ‘standby’ validator pool during peak demand, the TPS will increase proportionally making Shardeum the first Web3 network to scale linearly. And this is the main X factor that impacts every other outcome on a blockchain network favorably including throughput, decentralization, security and constant transaction fees irrespective of the demand in the network."
                    }
                  },{
                    "@type": "Question",
                    "name": "Low & Constant Gas Fees",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "As noted previously, linear scaling on Shardeum allows the validator nodes on the network to download only the latest state of the transactions they are handling while historical transactions are handled by archiver nodes on the network. Combined with autoscaling where the network independently increases and decrease its capacity during peaks and troughs, cost of running the operations on Shardeum will be low which directly ensures low and constant transaction fees for users and developers."
                    }
                  },{
                    "@type": "Question",
                    "name": "EVM-based Smart Contract Platform",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "There is a popular saying among the Shardeum community members aka Shardians, that “If you have built for Ethereum, you have built for Shardeum”. What it means is that, any dApp/product/service built atop Ethereum can be migrated to Shardeum seamlessly in a matter of few minutes. Since you just need to deploy a smart contract written in Solidity or Vyper on Shardeum (with a bonus that you will never have to worry about rising gas fees again), the environment is tailor-made for both new and experienced developers."
                    }
                  },{
                    "@type": "Question",
                    "name": "Anyone can operate a node on Shardeum and earn rewards",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "As of a result of linear scaling and low hardware requirements to run a node, average users can run a validator node and keep the network safe in return for networks tokens. By scaling horizontally, network will be decentralized. No blockchain network has demonstrated its ability to scale linearly and instead were mostly able to scale vertically making it expensive for average users to run a node on such networks. As a result, large institutions and node providers fill the vacuum created and operate nodes on them leading to centralization and increased chances for sybil attacks."
                    }
                  },{
                    "@type": "Question",
                    "name": "Solid Security with Unique Consensus Mechanism",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Shardeum will use a combination of two consensus algorithms namely proof of stake (PoS) and proof of quorum (PoQ). Staking native coins will be mandatory for validators to participate in the transaction validation process in return for rewards. Nodes that act maliciously will be penalized. Proof of Quorum, in a nutshell, allows the network validators of a transaction to approve it only if it receives 51% of votes which is then followed by batching such transactions together and passing it onto archive nodes. Moreover, consensus algorithm on Shardeum will randomly rotate validator and standby nodes in and out of the system which will make it extremely difficult for bad actors to attack the network."
                    }
                  },{
                    "@type": "Question",
                    "name": "When and how can I apply for grants?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The Shardeum Foundation plans to launch a grants program in 2023. Early adopters that have demonstrated measurable progress in development and community growth on Shardeum's testnets will be prioritized."
                    }
                  },{
                    "@type": "Question",
                    "name": "I am not looking for grants but I am keen to get your support in promoting the dApp I am building on Shardeum",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Please submit this form ."
                    }
                  },{
                    "@type": "Question",
                    "name": "Can I get advisory support from the team for my project?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Shardeum’s Leadership Advisory Group is available to brainstorm and discuss the potential of projects and its GTM strategy. These leaders have led and helped world-class projects launch and succeed, and they are available to help and advise."
                    }
                  },{
                    "@type": "Question",
                    "name": "Where can I look for active projects that are deployed on Shardeum so far?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can find and interact with the active projects building on Shardeum here"
                    }
                  },{
                    "@type": "Question",
                    "name": "How can I get my dApp to be enlisted or added as part of active projects on Shardeum?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Please list your dApps that you are building on Shardeum here"
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
              style={{ paddingBottom: "0px" }}
            >
              <Button
                as="a"
                variant="secondary"
                size="lg"
                rel="noopener noreferrer"
                target="_blank"
                href={DOCS_URL}
              >
                {pageTranslation("page-betanet-hero-cta")}
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
            <Text fontSize={{ base: "m", lg: "m" }}>
              <a
                href={REPORT_BUGS}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: "20px", fontWeight: "800" }}
              >
                {" "}
                <span style={{ fontSize: "25px" }}>👉</span> Report Bugs on Sphinx Here{" "}
              </a>
            </Text>
          </>
        }
        media={
          <Box
            position="relative"
            h="full"
            style={{ borderRadius: "100px", backgroundColor: "transparent" }}
          >
            <Image
              objectFit="contain"
              src="/betanet/spinx.png"
              alt="Shardeum Alphanet is Live"
              layout="fill"
            />
          </Box>
        }
      />

      {/* <Box position="relative">
        <Center
          maxW="300px"
          bg="black"
          position="absolute"
          zIndex="9"
          h="100%"
          borderColor="brand.grey-50"
          borderTopWidth="1px"
          borderBottomWidth="1px"
          px={{ base: "4", md: "6", lg: "9" }}
        >
          <Text fontSize={{ base: "xl", lg: "2xl" }}>Sphinx 1.2 Metrics</Text>
        </Center>
        <SlidingStats stats={stats} />
      </Box> */}

      {/* Features of alphanet */}
      {/* <UseCases
        heading={pageTranslation("page-alphanet-hero-features-h1")}
        content={Array(6)
          .fill(0)
          .map((_, index) => ({
            title: pageTranslation(`page-alphanet-hero-features-${index + 1}-title`),
            description: pageTranslation(`page-alphanet-hero-features-${index + 1}-description`),
            Icon: () => AlphanetFeatureIcons({ id: `${index + 1}` }),
          }))}
      /> */}
      {/* <WhatCanYoDo /> */}
      {/* Alphanet roadmap */}
      {/* <Roadmap /> */}

      {/* What is Betnanet */}
      <Container
        maxW="container.xl"
        mx="auto"
        py={{ base: "9", md: "2", lg: "2" }}
        px={{ base: 6, xl: 0 }}
        style={{ paddingTop: "50px" }}
      >
        <VStack spacing={{ base: "12", md: "12" }} alignItems="start" w="full" pb="16">
          <SimpleGrid columns={[1, 2]} justifyContent="space-between" w="full">
            <VStack alignItems="center" spacing="20">
              <img className="globeImage" src={"/betanet/Betanet2.png"} alt="Nischal Image" />
            </VStack>
            <VStack alignItems="left" spacing="20" mt={5}>
              <SectionHeading color="brand.grey-90">
                <h2>The Final Testnet</h2>

                <Text className="betanetquestionSubHed xyz">
                  Shardeum's journey to mainnet requires thorough testing of prototype networks. The
                  alphanet, Shardeum Liberty, tested EVM compatibility and sharding features.
                  Shardeum Sphinx simulates Shardeum’s mainnet environment, ensuring production
                  readiness and allowing safe application testing. Sphinx is the final step before
                  the mainnet launch.
                </Text>

                <p className="betanetquestionSubTiltedColor" style={{ marginTop: "10px" }}>
                  Before that, let's see the progress made on
                </p>
                <span className="betanetquestionSubTiltedColor" style={{ color: "black" }}>
                  Liberty!
                </span>
              </SectionHeading>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Shardium Alphanet */}
      <Container
        maxW="container"
        mx="auto"
        py={{ base: "9", md: "2", lg: "2" }}
        px={{ base: 0, xl: 0 }}
        style={{ paddingTop: "0px", background: "#000000" }}
      >
        <div className="baseContainer" />
        <Container
          maxW="container.xl"
          mx="auto"
          py={{ base: "9", md: "2", lg: "2" }}
          px={{ base: 6, xl: 0 }}
          style={{ paddingTop: "0px", background: "#000000" }}
        >
          <VStack
            spacing={{ base: "12", md: "12" }}
            className="titleIndex"
            alignItems="start"
            w="full"
            pb="16"
          >
            <SimpleGrid columns={[1, 1]} justifyContent="space-between" w="full">
              <VStack alignItems="left" spacing="10" mt={10}>
                <SectionHeading color="brand.grey-90">
                  <h2 className="betaAlphanetTitle">
                    Shardeum Testnets: A Preview of the Future of Web3
                  </h2>
                </SectionHeading>
              </VStack>
            </SimpleGrid>
          </VStack>

          <Grid className="responciveGrid">
            <GridItem rowSpan={2} colSpan={2}>
              <div className="borderGrid">
                <h4 className="betanetHighlights">Top Testnet Highlights</h4>

                <div className="chekMark">
                  <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#de7171" />
                  <p className="checkMarkText">
                    Built a user friendly GUI/dashboard for node operators
                  </p>
                </div>
                {/* <div className="chekMarkNextline">
                    <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#de7171" />
                    <p className="checkMarkText">
                      First smart contract platform to implement EIP2930
                    </p>
                  </div> */}
                <div className="chekMarkNextline">
                  <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#de7171" />
                  <p className="checkMarkText">
                    Open-sourced Shardeum validator and the validator dashboard code
                  </p>
                </div>
                <div className="chekMarkNextline">
                  <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#de7171" />
                  <p className="checkMarkText">
                    First demonstration of a state sharded blockchain with cross shard atomic
                    composability
                  </p>
                </div>
                <div className="chekMarkNextline">
                  <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#de7171" />
                  <p className="checkMarkText">
                    EIP 2930 automation for a streamlined developer experience
                  </p>
                </div>
                <div className="chekMarkNextline">
                  <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#de7171" />
                  <p className="checkMarkText">
                    Ongoing betanet 'Sphinx' touched a high of 35,000+ validators
                  </p>
                </div>
                <div className="chekMarkNextline">
                  <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#de7171" />
                  <p className="checkMarkText">180 TPS average network capacity</p>
                </div>
              </div>
            </GridItem>
            <GridItem colSpan={3}>
              <div className="borderGridTwo">
                <h4 className="betanetHighlightsTwo">Network Growth Metrics</h4>

                <div className="borderGridTwoAddSpace">
                  <div className="chekMark">
                    <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#ffae93" />
                    <p className="checkMarkText">230,000+ smart contracts</p>
                  </div>
                  <div className="chekMark">
                    <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#ffae93" />
                    <p className="checkMarkText">820,000+ accounts</p>
                  </div>
                </div>
                <div className="borderGridTwoAddSpace">
                  <div className="chekMark">
                    <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#ffae93" />
                    <p className="checkMarkText">7.4 million+ transactions &nbsp;&nbsp;&nbsp;</p>
                  </div>
                  <div className="chekMark">
                    <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#ffae93" />
                    <p className="checkMarkText">145+ ecosystem projects</p>
                  </div>
                </div>
              </div>
            </GridItem>
            <GridItem colSpan={3}>
              <div className="borderGridTwoMob">
                <h4 className="betanetHighlightsThree">Community Growth Metrics</h4>

                <div className="borderGridTwoAddSpace">
                  <div className="chekMark">
                    <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#ffce88" />
                    <p className="checkMarkText">800,000+ Community members &nbsp;</p>
                  </div>
                  <div className="chekMark">
                    <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#ffce88" />
                    <p className="checkMarkText">90,000+ newsletter subscribers</p>
                  </div>
                </div>
                <div className="borderGridTwoAddSpace">
                  <div className="chekMark">
                    <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#ffce88" />
                    <p className="checkMarkText">
                      190+ Proof of Community Events
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                  </div>
                  <div className="chekMark">
                    <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#ffce88" />
                    <p className="checkMarkText">
                      50+ community-led Shardeum Leagues across the world
                    </p>
                  </div>
                </div>
              </div>
            </GridItem>
          </Grid>
        </Container>
      </Container>

      {/* Shardium Alphanet dpps*/}
      <Container
        maxW="container"
        mx="auto"
        py={{ base: "9", md: "2", lg: "2" }}
        px={{ base: 6, xl: 0 }}
        style={{ paddingTop: "60px", position: "relative", zIndex: 1 }}
      >
        <Container
          maxW="container.xl"
          mx="auto"
          py={{ base: "9", md: "2", lg: "2" }}
          px={{ base: 6, xl: 0 }}
          style={{ paddingBottom: "0px" }}
        >
          {/* <VStack spacing={{ base: "12", md: "12" }} alignItems="start" w="full" pb="16">
            <SimpleGrid columns={[1, 1]} justifyContent="space-between" w="full">
              <div>
                <VStack alignItems="left" className="backgroundBorder" spacing="10" mt={0}>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <div className="backgroundBorderLine"></div>
                    <h2 className="betaAlphanetTitleColor">
                      dApps/Projects that gained cult status on alphanet
                    </h2>
                    <div className="backgroundBorderLine"></div>
                  </div>
                </VStack>
              </div>
            </SimpleGrid>
          </VStack> */}

          <VStack spacing={{ base: "12", md: "12" }} alignItems="start" w="full" pb="16">
            <SimpleGrid columns={[1, 1]} justifyContent="space-between" w="full">
              <VStack alignItems="left" spacing="10" mt={10}>
                <SectionHeading color="brand.grey-90">
                  <h2 className="betaAlphanetTitleDark">
                    Apps Deployed on Shardeum Liberty Grew Fast!
                  </h2>
                </SectionHeading>
              </VStack>
            </SimpleGrid>
          </VStack>

          <VStack
            spacing={{ base: "12", md: "12" }}
            mt={10}
            mb={0}
            alignItems="start"
            w="full"
            pb="16"
          >
            <SimpleGrid
              className="simpleGridDesign"
              columns={[1, 3]}
              justifyContent="space-evenly"
              w="full"
              style={{ padding: "0px 0px 0px 0px" }}
            >
              <div className="dropBoxBporder">
                <VStack alignItems="center" className="imageBox" spacing="20">
                  <Img
                    src={"/betanet/SwappedFinance.png"}
                    margin={["0 auto", 0]}
                    boxSize={["7.5rem", "11.25rem"]}
                    alt="logo"
                  />
                </VStack>
                <h5 className="dropBoxTitle">Swapped Finance</h5>
                <p className="dropBoxTitleParra">
                  {/* <span className="dropBoxTitleBold">1000</span> Galacticore NFT sold out in less
                  5hrs. */}
                  <Box className="list-wrap2">
                    <ul>
                      <li>{"Recorded 21k+ txs worth 245k test SHM by 7.5k unique wallets"}</li>
                      <li>{"738k profile visits & 28.5 mentions on Twitter"}</li>
                    </ul>
                  </Box>
                </p>
              </div>

              <div className="dropBoxBporder">
                <VStack alignItems="center" className="imageBox" spacing="20">
                  <Img
                    src={"/betanet/Spriyo.png"}
                    margin={["0 auto", 0]}
                    boxSize={["7.5rem", "11.25rem"]}
                    alt="logo"
                  />
                </VStack>
                <h5 className="dropBoxTitle">Spriyo NFT Marketplace</h5>
                <p className="dropBoxTitleParra">
                  {/* <span className="dropBoxTitleBold" >1000</span> Galacticore NFT sold out in less
                  5hrs. */}

                  <Box className="list-wrap2">
                    <ul>
                      <li>{"50k users registered with 30k NFTs minted approx"}</li>
                      <li>{"19k Twitter followers & 14k Discord members"}</li>
                    </ul>
                  </Box>
                </p>
              </div>

              <div
                className="dropBoxBporder"
                // style={{ borderRight: "2px solid black", borderStyle: "dashed" }}
              >
                <VStack alignItems="center" className="imageBox" spacing="20">
                  <Img
                    src={"/betanet/ChainHash.png"}
                    margin={["0 auto", 0]}
                    boxSize={["7.5rem", "11.25rem"]}
                    alt="logo"
                  />
                </VStack>
                <h5 className="dropBoxTitle">ChainHash</h5>
                <p className="dropBoxTitleParra">
                  <Box className="list-wrap2">
                    <ul>
                      <li>{"Ranking in top 25 projects globally on Guild.xyz"}</li>
                      <li>{"22k Twitter followers & 27k Discord members"}</li>
                    </ul>
                  </Box>
                </p>
              </div>

              <div className="dropBoxBporder">
                <VStack alignItems="center" className="imageBox" spacing="20">
                  <Img
                    src={"/betanet/DotSHM.png"}
                    margin={["0 auto", 0]}
                    boxSize={["7.5rem", "11.25rem"]}
                    alt="logo"
                  />
                </VStack>
                <h5 className="dropBoxTitle">DotSHM</h5>
                <p className="dropBoxTitleParra">
                  <Box className="list-wrap2">
                    <ul>
                      <li>{"Over 5k product feedbacks by users"}</li>
                      <li>{"30k+ domains minted on shardeum liberty"}</li>
                    </ul>
                  </Box>
                </p>
              </div>

              <div className="dropBoxBporder">
                <VStack alignItems="center" className="imageBox" spacing="20">
                  <Img
                    src={"/betanet/shardex.jpg"}
                    margin={["0 auto", 0]}
                    boxSize={["7.5rem", "11.25rem"]}
                    alt="logo"
                  />
                </VStack>
                <h5 className="dropBoxTitle">Shardex</h5>
                <p className="dropBoxTitleParra">
                  <Box className="list-wrap2">
                    <ul>
                      <li>{"More than 5k interacted users"}</li>
                      <li>{"2 Million Share Points Genesis Giveaway"}</li>
                    </ul>
                  </Box>
                </p>
              </div>

              <div
                className="dropBoxBporder"
                // style={{ borderRight: "2px solid black", borderStyle: "dashed" }}
              >
                <VStack alignItems="center" className="imageBox" spacing="20">
                  <Img
                    src={"/betanet/Bandit.png"}
                    margin={["0 auto", 0]}
                    boxSize={["7.5rem", "11.25rem"]}
                    alt="logo"
                  />
                </VStack>
                <h5 className="dropBoxTitle">Bandit</h5>
                <p className="dropBoxTitleParra">
                  <Box className="list-wrap2">
                    <ul>
                      <li>{"Recorded 200k+ txs worth ~100k test SHM by ~50k unique wallets"}</li>
                      <li>{"200k profile visits & 20k mentions on Twitter"}</li>
                    </ul>
                  </Box>
                </p>
              </div>
            </SimpleGrid>
          </VStack>
        </Container>
      </Container>

      {/* Shardium Alphanet Release H*/}
      <div
        className="benefit-section"
        style={{ paddingTop: "1rem", paddingBottom: "1rem", backgroundColor: "#000000" }}
      >
        <Container
          maxW="container.xl"
          mx="auto"
          py={{ base: "9", md: "2", lg: "2" }}
          px={{ base: 6, xl: 0 }}
          style={{ paddingTop: "50px" }}
        >
          <VStack spacing={{ base: "12", md: "12" }} alignItems="start" w="full" pb="16">
            <SimpleGrid columns={[1, 1]} justifyContent="space-between" w="full">
              <VStack alignItems="left" spacing="10" mt={10}>
                <SectionHeading color="brand.grey-90">
                  <h2 className="betaAlphanetTitle">
                    Don’t Miss the Opportunity to <br /> Participate on Shardeum Sphinx
                  </h2>
                </SectionHeading>
              </VStack>
            </SimpleGrid>
          </VStack>

          <VStack spacing={{ base: "12", md: "12" }} alignItems="start" w="full" pb="16">
            {/* <SimpleGrid columns={[1, 1]} justifyContent="space-between" w="full"> */}
            {/* <Box className="containerForThreeNode " > */}
            <Box className="containerForThreeNode" w="full">
              <SimpleGrid
                className="BackgroundShaed"
                columns={[1, 3]}
                justifyContent="space-between"
                w="full"
              >
                <Box className="borderGridNoborder">
                  <h4 className="betanetHighlightsLeft" style={{ color: "#de7171" }}>
                    Become a Validator:
                  </h4>

                  <Box className="list-wrap">
                    <ul>
                      <li>{"Run a validator via GUI or CLI with no permission required"}</li>
                      <li>{"Stake test SHM"}</li>
                      <li>{"Validate transactions and keep the network secure"}</li>
                      <li>{"Prepare your node infrastructure business for Shardeum’s mainnet"}</li>
                      <li>{"Experience participating in a truly permissionless network"}</li>
                    </ul>
                  </Box>
                  <Box className="chekMarkNextlineButtonBox">
                    <Button
                      onClick={() => setGotoPage("https://docs.shardeum.org/node/run/validator")}
                      className="btn btn-primary chekMarkNextlineButton"
                    >
                      {"How to run a node?"}
                    </Button>
                  </Box>
                </Box>

                <Box className="borderGridNoborder">
                  <h4 className="betanetHighlightsLeft" style={{ color: "#ffae93" }}>
                    Benefits for Developers:
                  </h4>

                  <Box className="list-wrap">
                    <ul>
                      <li>{"Stable low gas fees forever"}</li>
                      <li>{"Linear scalability while retaining cross shard composibility"}</li>
                      <li>
                        {
                          "Marketing support from the Shardeum Foundation providing 10-15k users to your app on testnet within 1-month "
                        }
                      </li>
                      <li>
                        {
                          "Opportunity to become a leading app in the Shardeum ecosystem prior to mainnet"
                        }
                      </li>
                      <li>
                        {
                          "Early adopters will be prioritized when Shardeum’s grant program launches"
                        }
                      </li>
                      <li>{"Guidance from visionaries such as Nischal Shetty & Omar Syed"}</li>
                    </ul>
                  </Box>
                  <Box className="chekMarkNextlineButtonBox">
                    <Button
                      onClick={() => setGotoPage("https://docs.shardeum.org/")}
                      className="btn btn-primary chekMarkNextlineButtonTwo"
                    >
                      {"Developer Docs"}
                    </Button>
                  </Box>
                </Box>

                <Box className="borderGridNoborder" style={{ color: "#ffce88" }}>
                  <h4 className="betanetHighlightsLeft">Opportunities for Everyone:</h4>
                  <Box className="list-wrap">
                    <ul>
                      <li>{"Participate in bounties"}</li>
                      <li>
                        {
                          "Earn rewards by engaging in Shardeum initiatives such as Shardeum Leagues, Shardeum Missions and Super Shardian"
                        }
                      </li>
                      <li>{"Earn POAPs by participating in Shardeum community events"}</li>
                      <li>{"Moderate social media channels"}</li>
                      <li>
                        {
                          "Benefit from a rare learning experience by directly supporting a L1 blockchain project"
                        }
                      </li>
                      <li>{"Play a role in enabling decentralization for everyone"}</li>
                    </ul>
                  </Box>
                  <Box className="chekMarkNextlineButtonBox">
                    <Button
                      onClick={() => setGotoPage("https://discord.gg/shardeum")}
                      className="btn btn-primary chekMarkNextlineButtonThree"
                    >
                      {"Join Shardeum community"}
                    </Button>
                  </Box>
                </Box>
              </SimpleGrid>
            </Box>
            {/* </Box> */}
            {/* </SimpleGrid> */}
          </VStack>
        </Container>
      </div>
      {/* roadmap */}

      <div
        className="roadmap-section"
        style={{ paddingTop: "1rem", paddingBottom: "1rem", backgroundColor: "#000000" }}
      >
        <Container
          maxW="container.xl"
          mx="auto"
          py={{ base: "9", md: "2", lg: "2" }}
          px={{ base: 6, xl: 0 }}
          style={{ paddingTop: "50px" }}
        >
          <VStack spacing={{ base: "12", md: "12" }} alignItems="start" w="full" pb="16">
            <SimpleGrid columns={[1, 1]} justifyContent="space-between" w="full">
              <VStack alignItems="left" spacing="10" mt={10} pl={5}>
                <span style={{ color: "#EC5B29" }}>{"2023"}</span>
                <h2 className="betaAlphanetTitle " style={{ margin: "0" }}>
                  {"Sphinx Roadmap"}
                </h2>
              </VStack>
            </SimpleGrid>
          </VStack>

          <VStack spacing={{ base: "12", md: "12" }} alignItems="start" w="full" pb="16">
            {/* <SimpleGrid columns={[1, 1]} justifyContent="space-between" w="full"> */}
            {/* <Box className="containerForThreeNode " > */}
            <Box className="" w="full">
              <SimpleGrid className="" columns={[1, 3]} justifyContent="space-between" w="full">
                <Box className="roadmap-li-box ">
                  <Box className="roadmap-li-heading">
                    <span className="roadmap-li-heading-text" style={{ marginTop: "20px" }}>
                      {"Q1 2023"}
                    </span>
                    {/* <span className="roadmap-li-heading-green-line"></span> */}
                  </Box>

                  <Box className="road-list-wrap">
                    <ul>
                      <li>{"Sphinx 1.0 with 150 TPS, 150 validators and 21 node shard size"}</li>
                      <li>
                        {"Sphinx 1.1 with 250 TPS, 1280 validators and a 128 node shard size"}
                      </li>
                      <li>{"Nodes and validators are open source to run by the community"}</li>
                      <li>{"Validator Dashboard (GUI) launch"}</li>
                      <li>{"Staking, auto scaling, node rotation and node rewards enabled"}</li>
                    </ul>
                  </Box>
                </Box>

                <Box className="roadmap-li-box dashBorder">
                  <Box className="roadmap-li-heading">
                    <span className="roadmap-li-heading-text" style={{ marginTop: "20px" }}>
                      {"Q2 2023"}
                    </span>
                    {/* <span className="roadmap-li-heading-green-line"></span> */}
                  </Box>

                  <Box className="road-list-wrap">
                    <ul>
                      <li>{"Sphinx 1.2"}</li>
                      <li>{"Sphinx 1.3"}</li>
                    </ul>
                  </Box>
                </Box>

                <Box className="roadmap-li-box dashBorder">
                  <Box className="roadmap-li-heading">
                    <span className="roadmap-li-heading-text" style={{ marginTop: "20px" }}>
                      {"Q3/Q4 2023"}
                    </span>
                    {/* <span className="roadmap-li-heading-green-line"></span> */}
                  </Box>

                  <Box className="road-list-wrap">
                    <ul>
                      <li>{"Feature completion"}</li>
                      <li>{"Bug bounties"}</li>
                      <li>{"Security audit"}</li>
                    </ul>
                  </Box>
                </Box>
              </SimpleGrid>
              {/* <SimpleGrid className="" columns={[1, 2]} justifyContent="space-between" w="full">
                
              </SimpleGrid> */}
            </Box>
            {/* </Box> */}
            {/* </SimpleGrid> */}
          </VStack>
        </Container>
      </div>

      {/* <FAQs
        heading={pageTranslation("page-betanet-faq-h1")}
        content={Array(8)
          .fill(0)
          .map((_, index) => ({
            q: pageTranslation(`page-betanet-faq-${index + 1}-q`),
            a: pageTranslation(`page-betanet-faq-${index + 1}-a`),
          }))}
      /> */}

      {/* FAQ */}
      <Flex bg="brand.grey-10" as="section">
        <Container maxW="container.xl" mx="auto" pt="32" pb="32">
          <Heading size="2xl" color="brand.grey-90" mb={20}>
            <h2>FAQs</h2>
          </Heading>
          <VStack spacing="40" alignItems="start" w="full">
            <Accordion
              allowMultiple
              defaultIndex={0}
              allowToggle
              w="full"
              py={10}
              color="brand.grey-90"
            >
              {/* Q3 */}
              <div>
                <AccordionItem bg="brand.white" mb={4}>
                  <AccordionButton
                    px={5}
                    py={5}
                    _hover={{ bg: "brand.white" }}
                    _expanded={{ border: "none" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading size={"lg"} className="faqHeading">
                        <h3>{`What are the requirements to run a node on betanet?`}</h3>
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                    <>
                      Minimum hardware requirements :
                      <br />
                      <br />
                      -250 GB ssd storage
                      <br />
                      -Quad core CPU less than 10 years old if self hosting
                      <br />
                      -Dual core CPU works if hosted with newer Xeons / EPYC
                      <br />
                      -16 GB of ram, 4+ GB of virtual memory recommended
                      <br />
                      -Hosting: 8 GB RAM + 8 GB Virtual Memory
                    </>
                    {/* <ReactMarkdown linkTarget="_blank">
                      </ReactMarkdown> */}
                  </AccordionPanel>
                </AccordionItem>
              </div>

              {/* Q4 */}
              <div>
                <AccordionItem bg="brand.white" mb={4}>
                  <AccordionButton
                    px={5}
                    py={5}
                    _hover={{ bg: "brand.white" }}
                    _expanded={{ border: "none" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading size={"lg"} className="faqHeading">
                        <h3>{`How do GUI and CLI features help me in operating a node?`}</h3>
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                    <>
                      With GUI, you can start running a node with a few clicks of your mouse.
                      Shardeum is one of the first L1 networks to enable user-friendly GUI feature
                      for node validators
                      <br />
                      CLI is the primary interface used by the vast majority of blockchain networks.
                      It is enabled for more advanced users and developers who intend to work with
                      nodes more deeply and technically
                    </>
                    {/* <ReactMarkdown linkTarget="_blank">
                    </ReactMarkdown> */}
                  </AccordionPanel>
                </AccordionItem>
              </div>

              {/* Q5 */}
              <div>
                <AccordionItem bg="brand.white" mb={4}>
                  <AccordionButton
                    px={5}
                    py={5}
                    _hover={{ bg: "brand.white" }}
                    _expanded={{ border: "none" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading size={"lg"} className="faqHeading">
                        <h3>{`What is the reward I will get by running an honest node on betanet?`}</h3>
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                    <>
                      Your node will earn Betanet SHM, but these will not have any value. That said,
                      we will be keeping track of the addresses that helped out during Betanet.
                      While we haven’t yet decided on Mainnet rewards for Betanet users, we’ll
                      announce in due time if and when it is decided.
                    </>
                    {/* <ReactMarkdown linkTarget="_blank">
                      </ReactMarkdown> */}
                  </AccordionPanel>
                </AccordionItem>
              </div>

              {/* Q5 */}
              <div>
                <AccordionItem bg="brand.white" mb={4}>
                  <AccordionButton
                    px={5}
                    py={5}
                    _hover={{ bg: "brand.white" }}
                    _expanded={{ border: "none" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading size={"lg"} className="faqHeading">
                        <h3>{`My Node status is Standby. What does it mean and when does it become active?`}</h3>
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                    <>
                      When you have the needed amount of SHM staked and you start your node, your
                      Node starts with a Standby status. This means that it is ready to be included
                      in the network. Whenever network rotation occurs, your node will get the
                      opportunity to become Active. This will entirely depend on the network demand
                      and there is no fixed timeline when your node will become Active.
                    </>
                    {/* <ReactMarkdown linkTarget="_blank">
                      </ReactMarkdown> */}
                  </AccordionPanel>
                </AccordionItem>
              </div>

              {/* Q5 */}
              <div>
                <AccordionItem bg="brand.white" mb={4}>
                  <AccordionButton
                    px={5}
                    py={5}
                    _hover={{ bg: "brand.white" }}
                    _expanded={{ border: "none" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading size={"lg"} className="faqHeading">
                        <h3>{`My transaction is failing whenever I try to add stake on my Validator.`}</h3>
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                    <>
                      {`Please Reset your Metamask Wallet. (Settings > Advanced > Reset Account)`}
                    </>
                    {/* <ReactMarkdown linkTarget="_blank">
                      </ReactMarkdown> */}
                  </AccordionPanel>
                </AccordionItem>
              </div>

              {/* Q5 */}
              <div>
                <AccordionItem bg="brand.white" mb={4}>
                  <AccordionButton
                    px={5}
                    py={5}
                    _hover={{ bg: "brand.white" }}
                    _expanded={{ border: "none" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading size={"lg"} className="faqHeading">
                        <h3>{`Can I run a Shardeum Validator on Windows?`}</h3>
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                    <>
                      While the team has not done extensive testing on windows, technically if you
                      have Windows Subsystem for Linux (WSL) in your system, you should be able to
                      run a Shardeum validator node.
                    </>
                    {/* <ReactMarkdown linkTarget="_blank">
                      </ReactMarkdown> */}
                  </AccordionPanel>
                </AccordionItem>
              </div>

              {/* Q5 */}
              <div>
                <AccordionItem bg="brand.white" mb={4}>
                  <AccordionButton
                    px={5}
                    py={5}
                    _hover={{ bg: "brand.white" }}
                    _expanded={{ border: "none" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading size={"lg"} className="faqHeading">
                        <h3>
                          Troubleshoot Error: Got permission denied while trying to connect to the
                          Docker daemon socket at
                          <br />
                          <span style={{ fontSize: "20px" }}>
                            unix:///var/run/docker.sock:
                          </span>{" "}
                        </h3>
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                    <>
                      Run the following command in your shell {`-->`} sudo usermod -a -G docker
                      $USER && newgrp docker
                      <br />
                      Then run the shell script again.
                    </>
                    {/* <ReactMarkdown linkTarget="_blank">
                      </ReactMarkdown> */}
                  </AccordionPanel>
                </AccordionItem>
              </div>

              {/* Q5 */}
              <div>
                <AccordionItem bg="brand.white" mb={4}>
                  <AccordionButton
                    px={5}
                    py={5}
                    _hover={{ bg: "brand.white" }}
                    _expanded={{ border: "none" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading size={"lg"} className="faqHeading">
                        <h3>{`I see my Validator IP as 0.0.0.0 and get the error of "Node cannot join with invalid external IP: 0.0.0.0". What should I do?`}</h3>
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                    <>
                      Go into the operator dashboard docker (may be different if you customized
                      install location)
                      <br />
                      <br />
                      cd ~/.shardeum
                      <br />
                      ./shell.sh
                      <br />
                      <br />
                      Get your node's external IP:
                      <br />
                      curl https://ipinfo.io/ip
                      <br />
                      <br />
                      The returned IP in the format of nnn.nnn.nnn.nnn is your EXTERNAL_IP.
                      <br />
                      Set the number above in place of EXTERNAL_IP:
                      <br />
                      export APP_IP="EXTERNAL_IP"
                    </>
                    {/* <ReactMarkdown linkTarget="_blank">
                      </ReactMarkdown> */}
                  </AccordionPanel>
                </AccordionItem>
              </div>

              {/* Q5 */}
              <div>
                <AccordionItem bg="brand.white" mb={4}>
                  <AccordionButton
                    px={5}
                    py={5}
                    _hover={{ bg: "brand.white" }}
                    _expanded={{ border: "none" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading size={"lg"} className="faqHeading">
                        <h3>{`How to do a fresh install of a Shardeum Node?`}</h3>
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                    <>
                      Use the following commands in your shell:
                      <br />
                      <br />
                      cd ~/.shardeum
                      <br />
                      ./cleanup.sh
                      <br />
                      cd ~/
                      <br />
                      rm -rf .shardeum
                      <br />
                      rm installer.sh
                      <br />
                      <br />
                      After these, Start from{" "}
                      <a
                        target="_blank"
                        href="https://docs.shardeum.org/node/run/validator#step-2-download-and-install-validator"
                        rel="noreferrer"
                      >
                        Step 2
                      </a>{" "}
                      from the Validator Node Installation Guide
                    </>
                    {/* <ReactMarkdown linkTarget="_blank">
                      </ReactMarkdown> */}
                  </AccordionPanel>
                </AccordionItem>
              </div>

              {showMoreFAQ === false && (
                <a href="javascript:void(0)" className="showFAQBTN" onClick={showFAQ}>
                  Show More
                </a>
              )}

              {showMoreFAQ && (
                <>
                  <div>
                    <AccordionItem bg="brand.white" mb={4}>
                      <AccordionButton
                        px={5}
                        py={5}
                        _hover={{ bg: "brand.white" }}
                        _expanded={{ border: "none" }}
                      >
                        <Box flex="1" textAlign="left">
                          <Heading size={"lg"} className="faqHeading">
                            <h3>{`Can I operate archive nodes on betanet?`}</h3>
                          </Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>

                      <AccordionPanel className="brand-orange-href" px={5} py={8}>
                        <>
                          During betanet the community can operate Validator nodes. After mainnet,
                          community can also operate Archiver nodes.
                        </>
                        {/* <ReactMarkdown linkTarget="_blank">
                            </ReactMarkdown> */}
                      </AccordionPanel>
                    </AccordionItem>
                  </div>

                  <div>
                    <AccordionItem bg="brand.white" mb={4}>
                      <AccordionButton
                        px={5}
                        py={5}
                        _hover={{ bg: "brand.white" }}
                        _expanded={{ border: "none" }}
                      >
                        <Box flex="1" textAlign="left">
                          <Heading size={"lg"} className="faqHeading">
                            <h3>{`What would be the requirement and incentive to run an archive node?`}</h3>
                          </Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>

                      <AccordionPanel className="brand-orange-href" px={5} py={8}>
                        <>
                          Requirements for running an Archiver will be determined during betanet,
                          but approximately, it would be: 32 core, 256GB RAM, 4TB SSD
                        </>
                        {/* <ReactMarkdown linkTarget="_blank">
                            </ReactMarkdown> */}
                      </AccordionPanel>
                    </AccordionItem>
                  </div>

                  {/* Q6 */}
                  <div>
                    <AccordionItem bg="brand.white" mb={4}>
                      <AccordionButton
                        px={5}
                        py={5}
                        _hover={{ bg: "brand.white" }}
                        _expanded={{ border: "none" }}
                      >
                        <Box flex="1" textAlign="left">
                          <Heading size={"lg"} className="faqHeading">
                            <h3>{`What is the process for bug bounties and where do I report bugs on betanet?`}</h3>
                          </Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>

                      <AccordionPanel className="brand-orange-href" px={5} py={8}>
                        <>
                          Please report bugs on betanet{" "}
                          <a
                            href="https://github.com/Shardeum/shardeum-bug-reporting"
                            target="_blank"
                            rel="noreferrer"
                          >
                            here
                          </a>
                          . Details of the bounties will be announced after the release of Betanet.
                        </>
                        {/* <ReactMarkdown linkTarget="_blank">
                        </ReactMarkdown> */}
                      </AccordionPanel>
                    </AccordionItem>
                  </div>

                  {/* Q7 */}
                  <div>
                    <AccordionItem bg="brand.white" mb={4}>
                      <AccordionButton
                        px={5}
                        py={5}
                        _hover={{ bg: "brand.white" }}
                        _expanded={{ border: "none" }}
                      >
                        <Box flex="1" textAlign="left">
                          <Heading size={"lg"} className="faqHeading">
                            <h3>{`When can we expect whitepaper to be released?`}</h3>
                          </Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>

                      <AccordionPanel className="brand-orange-href" px={5} py={8}>
                        <>Whitepaper will be released during betanet phase of the project.</>
                        {/* <ReactMarkdown linkTarget="_blank">
                          </ReactMarkdown> */}
                      </AccordionPanel>
                    </AccordionItem>
                  </div>

                  {/* Q8 */}
                  <div>
                    <AccordionItem bg="brand.white" mb={4}>
                      <AccordionButton
                        px={5}
                        py={5}
                        _hover={{ bg: "brand.white" }}
                        _expanded={{ border: "none" }}
                      >
                        <Box flex="1" textAlign="left">
                          <Heading size={"lg"} className="faqHeading">
                            <h3>{`When will the protocol be made open-source?`}</h3>
                          </Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>

                      <AccordionPanel className="brand-orange-href" px={5} py={8}>
                        <>
                          Shardeum has begun open-sourcing its codebase on 09th March 2023. Public
                          can now access and contribute to
                          <a
                            href="https://shardeum.org/blog/shardeum-open-source/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {" "}
                            these{" "}
                          </a>
                          validator source codes considering validator nodes are now run by
                          community since the launch of Betanet. The project intends to open source
                          all the repositories by the time it reaches mainnet in 2023.
                        </>
                        {/* <ReactMarkdown linkTarget="_blank">
                          </ReactMarkdown> */}
                      </AccordionPanel>
                    </AccordionItem>
                  </div>

                  {/* Q2 */}
                  <div>
                    <AccordionItem bg="brand.white" mb={4}>
                      <AccordionButton
                        px={5}
                        py={5}
                        _hover={{ bg: "brand.white" }}
                        _expanded={{ border: "none" }}
                      >
                        <Box flex="1" textAlign="left">
                          <Heading size={"lg"} className="faqHeading">
                            <h3>
                              What are the unique features in Shardeum apart from typical features
                              that comes with a L1 blockchain network?
                            </h3>
                          </Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>

                      <AccordionPanel className="brand-orange-href" px={5} py={8}>
                        <>
                          {/* MORE SUb MEnu */}

                          <VStack spacing="40" alignItems="start" w="full">
                            <Accordion
                              allowMultiple
                              defaultIndex={0}
                              allowToggle
                              w="full"
                              py={10}
                              color="brand.grey-90"
                            >
                              {/* 2 */}
                              <div>
                                <AccordionItem bg="brand.white" mb={4}>
                                  <AccordionButton
                                    px={5}
                                    py={5}
                                    _hover={{ bg: "brand.white" }}
                                    _expanded={{ border: "none" }}
                                  >
                                    <Box flex="1" textAlign="left">
                                      <Heading size={"lg"} className="faqHeading">
                                        <h3>Dynamic State Sharding</h3>
                                      </Heading>
                                    </Box>
                                    <AccordionIcon />
                                  </AccordionButton>

                                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                                    <>
                                      Consensus and processing are done at transaction level on
                                      Shardeum instead of the block level which you find with
                                      existing blockchain networks. Validators on the network will
                                      be assigned dynamic address spaces across multiple shards with
                                      significant overlap. Through dynamic state sharding, the
                                      network will shard its state by evenly and dynamically
                                      distributing compute workload, storage, and bandwidth among
                                      all the nodes. This not only allows for parallel processing of
                                      transactions but also very low overhead for validator nodes as
                                      they will store only the state data of transactions they are
                                      involved in. Shardeum will be the first Web3 network to scale
                                      linearly . Dynamic state sharding is the most advanced version
                                      of state, transaction/network and static state sharding
                                      employed by more recent sharded chains which runs into both
                                      inter-related and standalone problems such as high latency,
                                      vertical scaling (as opposed to linear scaling), sybil attack,
                                      weak finality and lack of cross shard composability. Shardeum
                                      will retain atomic and cross-shard composability.
                                    </>
                                    {/* <ReactMarkdown linkTarget="_blank">
                                  </ReactMarkdown> */}
                                  </AccordionPanel>
                                </AccordionItem>
                              </div>

                              {/* 1 */}
                              <div>
                                <AccordionItem bg="brand.white" mb={4}>
                                  <AccordionButton
                                    px={5}
                                    py={5}
                                    _hover={{ bg: "brand.white" }}
                                    _expanded={{ border: "none" }}
                                  >
                                    <Box flex="1" textAlign="left">
                                      <Heading size={"lg"} className="faqHeading">
                                        <h3>Linear Scalability </h3>
                                      </Heading>
                                    </Box>
                                    <AccordionIcon />
                                  </AccordionButton>

                                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                                    <>
                                      With the help of dynamic state sharding, every node added to
                                      the network will increase the transaction throughput
                                      instantly. So basically, by simply adding more nodes from the
                                      network’s ‘standby’ validator pool during peak demand, the TPS
                                      will increase proportionally making Shardeum the first Web3
                                      network to scale linearly.{" "}
                                      <b>
                                        And this is the main X factor that impacts every other
                                        outcome on a blockchain network favorably including
                                        throughput, decentralization, security and constant
                                        transaction fees irrespective of the demand in the network.
                                      </b>
                                    </>
                                    {/* <ReactMarkdown linkTarget="_blank">
                                  </ReactMarkdown> */}
                                  </AccordionPanel>
                                </AccordionItem>
                              </div>

                              {/* 3 */}
                              <div>
                                <AccordionItem bg="brand.white" mb={4}>
                                  <AccordionButton
                                    px={5}
                                    py={5}
                                    _hover={{ bg: "brand.white" }}
                                    _expanded={{ border: "none" }}
                                  >
                                    <Box flex="1" textAlign="left">
                                      <Heading size={"lg"} className="faqHeading">
                                        <h3>Low & Constant Gas Fees</h3>
                                      </Heading>
                                    </Box>
                                    <AccordionIcon />
                                  </AccordionButton>

                                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                                    <>
                                      As noted previously, linear scaling on Shardeum allows the
                                      validator nodes on the network to download only the latest
                                      state of the transactions they are handling while historical
                                      transactions are handled by archiver nodes on the network.
                                      Combined with autoscaling where the network independently
                                      increases and decrease its capacity during peaks and troughs,
                                      cost of running the operations on Shardeum will be low which
                                      directly ensures low and constant transaction fees for users
                                      and developers.
                                    </>
                                    {/* <ReactMarkdown linkTarget="_blank">
                                  </ReactMarkdown> */}
                                  </AccordionPanel>
                                </AccordionItem>
                              </div>

                              {/* 4 */}
                              <div>
                                <AccordionItem bg="brand.white" mb={4}>
                                  <AccordionButton
                                    px={5}
                                    py={5}
                                    _hover={{ bg: "brand.white" }}
                                    _expanded={{ border: "none" }}
                                  >
                                    <Box flex="1" textAlign="left">
                                      <Heading size={"lg"} className="faqHeading">
                                        <h3>EVM-based Smart Contract Platform</h3>
                                      </Heading>
                                    </Box>
                                    <AccordionIcon />
                                  </AccordionButton>

                                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                                    <>
                                      There is a popular saying among the Shardeum community members
                                      aka Shardians, that “If you have built for Ethereum, you have
                                      built for Shardeum”. What it means is that, any
                                      dapp/product/service built atop Ethereum can be migrated to
                                      Shardeum seamlessly in a matter of few minutes. Since you just
                                      need to deploy a smart contract written in Solidity or Vyper
                                      on Shardeum (with a bonus that you will never have to worry
                                      about rising gas fees again), the environment is tailor-made
                                      for both new and experienced developers.
                                    </>
                                    {/* <ReactMarkdown linkTarget="_blank">
                                  </ReactMarkdown> */}
                                  </AccordionPanel>
                                </AccordionItem>
                              </div>

                              {/* 5 */}
                              <div>
                                <AccordionItem bg="brand.white" mb={4}>
                                  <AccordionButton
                                    px={5}
                                    py={5}
                                    _hover={{ bg: "brand.white" }}
                                    _expanded={{ border: "none" }}
                                  >
                                    <Box flex="1" textAlign="left">
                                      <Heading size={"lg"} className="faqHeading">
                                        <h3>
                                          Anyone can operate a node on Shardeum and earn rewards
                                        </h3>
                                      </Heading>
                                    </Box>
                                    <AccordionIcon />
                                  </AccordionButton>

                                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                                    <>
                                      As of a result of linear scaling and low hardware requirements
                                      to run a node, average users can run a validator node and keep
                                      the network safe in return for networks tokens. By scaling
                                      horizontally, network will be decentralized. No blockchain
                                      network has demonstrated its ability to scale linearly and
                                      instead were mostly able to scale vertically making it
                                      expensive for average users to run a node on such networks. As
                                      a result, large institutions and node providers fill the
                                      vacuum created and operate nodes on them leading to
                                      centralization and increased chances for sybil attacks.
                                    </>
                                    {/* <ReactMarkdown linkTarget="_blank">
                                  </ReactMarkdown> */}
                                  </AccordionPanel>
                                </AccordionItem>
                              </div>

                              {/* 6 */}
                              <div>
                                <AccordionItem bg="brand.white" mb={4}>
                                  <AccordionButton
                                    px={5}
                                    py={5}
                                    _hover={{ bg: "brand.white" }}
                                    _expanded={{ border: "none" }}
                                  >
                                    <Box flex="1" textAlign="left">
                                      <Heading size={"lg"} className="faqHeading">
                                        <h3>Solid Security with Unique Consensus Mechanism</h3>
                                      </Heading>
                                    </Box>
                                    <AccordionIcon />
                                  </AccordionButton>

                                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                                    <>
                                      Shardeum will use a combination of two consensus algorithms
                                      namely proof of stake (PoS) and proof of quorum (PoQ). Staking
                                      native coins will be mandatory for validators to participate
                                      in the transaction validation process in return for rewards.
                                      Nodes that act maliciously will be penalized. Proof of Quorum,
                                      in a nutshell, allows the network validators of a transaction
                                      to approve it only if it receives 51% of votes which is then
                                      followed by batching such transactions together and passing it
                                      onto archive nodes. Moreover, consensus algorithm on Shardeum
                                      will randomly rotate validator and standby nodes in and out of
                                      the system which will make it extremely difficult for bad
                                      actors to attack the network.
                                    </>
                                    {/* <ReactMarkdown linkTarget="_blank">
                                  </ReactMarkdown> */}
                                  </AccordionPanel>
                                </AccordionItem>
                              </div>
                            </Accordion>
                          </VStack>
                        </>
                        {/* <ReactMarkdown linkTarget="_blank">
                    </ReactMarkdown> */}
                      </AccordionPanel>
                    </AccordionItem>
                  </div>

                  <div>
                    <AccordionItem bg="brand.white" mb={4}>
                      <AccordionButton
                        px={5}
                        py={5}
                        _hover={{ bg: "brand.white" }}
                        _expanded={{ border: "none" }}
                      >
                        <Box flex="1" textAlign="left">
                          <Heading size={"lg"} className="faqHeading">
                            <h3>{`When and how can I apply for grants?`}</h3>
                          </Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>

                      <AccordionPanel className="brand-orange-href" px={5} py={8}>
                        <>
                          The Shardeum Foundation plans to launch a grants program in 2023. Early
                          adopters that have demonstrated measurable progress in development and
                          community growth on Shardeum's testnets will be prioritized.
                        </>
                        {/* <ReactMarkdown linkTarget="_blank">
                        </ReactMarkdown> */}
                      </AccordionPanel>
                    </AccordionItem>
                  </div>

                  <div>
                    <AccordionItem bg="brand.white" mb={4}>
                      <AccordionButton
                        px={5}
                        py={5}
                        _hover={{ bg: "brand.white" }}
                        _expanded={{ border: "none" }}
                      >
                        <Box flex="1" textAlign="left">
                          <Heading size={"lg"} className="faqHeading">
                            <h3>{`I am not looking for grants but I am keen to get your support in promoting the dapp I am building on Shardeum`}</h3>
                          </Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>

                      <AccordionPanel className="brand-orange-href" px={5} py={8}>
                        <>
                          Please submit this{" "}
                          <a
                            href="https://share.hsforms.com/1-1yoCFL9QJCeNM62L1FM7gdb8am"
                            target="_blank"
                            rel="noreferrer"
                          >
                            form .
                          </a>
                        </>
                        {/* <ReactMarkdown linkTarget="_blank">
                        </ReactMarkdown> */}
                      </AccordionPanel>
                    </AccordionItem>
                  </div>

                  <div>
                    <AccordionItem bg="brand.white" mb={4}>
                      <AccordionButton
                        px={5}
                        py={5}
                        _hover={{ bg: "brand.white" }}
                        _expanded={{ border: "none" }}
                      >
                        <Box flex="1" textAlign="left">
                          <Heading size={"lg"} className="faqHeading">
                            <h3>{`Can I get advisory support from the team for my project?`}</h3>
                          </Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>

                      <AccordionPanel className="brand-orange-href" px={5} py={8}>
                        <>
                          Shardeum’s Leadership Advisory Group is available to brainstorm and
                          discuss the potential of projects and its GTM strategy. These leaders have
                          led and helped world-class projects launch and succeed, and they are
                          available to help and advise.
                        </>
                        {/* <ReactMarkdown linkTarget="_blank">
                        </ReactMarkdown> */}
                      </AccordionPanel>
                    </AccordionItem>
                  </div>

                  <div>
                    <AccordionItem bg="brand.white" mb={4}>
                      <AccordionButton
                        px={5}
                        py={5}
                        _hover={{ bg: "brand.white" }}
                        _expanded={{ border: "none" }}
                      >
                        <Box flex="1" textAlign="left">
                          <Heading size={"lg"} className="faqHeading">
                            <h3>{`Where can I look for active projects that are deployed on Shardeum so far?`}</h3>
                          </Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>

                      <AccordionPanel className="brand-orange-href" px={5} py={8}>
                        <>
                          You can find and interact with the active projects building on Shardeum
                          <a
                            href="https://shardeum.org/ecosystem/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {" "}
                            here
                          </a>
                        </>
                        {/* <ReactMarkdown linkTarget="_blank">
                        </ReactMarkdown> */}
                      </AccordionPanel>
                    </AccordionItem>
                  </div>

                  <div>
                    <AccordionItem bg="brand.white" mb={4}>
                      <AccordionButton
                        px={5}
                        py={5}
                        _hover={{ bg: "brand.white" }}
                        _expanded={{ border: "none" }}
                      >
                        <Box flex="1" textAlign="left">
                          <Heading size={"lg"} className="faqHeading">
                            <h3>{`How can I get my dapp to be enlisted or added as part of active projects on Shardeum?`}</h3>
                          </Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>

                      <AccordionPanel className="brand-orange-href" px={5} py={8}>
                        <>
                          Please list your dapps that you are building on Shardeum
                          <a
                            href="https://airtable.com/shrIXaaf87BzaTfYy"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {" "}
                            here
                          </a>
                        </>
                        {/* <ReactMarkdown linkTarget="_blank">
                        </ReactMarkdown> */}
                      </AccordionPanel>
                    </AccordionItem>
                  </div>
                </>
              )}
            </Accordion>
          </VStack>
        </Container>
      </Flex>

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
