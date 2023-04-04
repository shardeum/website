import { Box, Button, Stack } from "@chakra-ui/react";
import { IconDApps, IconNFTs, IconP2P_Transfer, IconWeb3 } from "@shm/Icons";
import SlidingStats from "components/common/SlidingStats";
import {
  Container,
  VStack,
  ListItem,
  OrderedList,
  SimpleGrid,
  Grid,
  GridItem,
  Img,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { CheckIcon } from "@chakra-ui/icons";
import Hero from "components/sections/Hero";
import DeveloperResponsiveHero from "components/sections/DeveloperResponsiveHero";

import ReadWhitepaper from "components/sections/home/ReadWhitepaper";
import RoadmapFull from "components/sections/home/RoadMapFull";
import ShardeumInNews from "components/sections/home/ShardeumInNews";
import SHMTokenomics from "components/sections/home/SHMTokenomics";
import SectionHeading from "../../components/common/SectionHeading";
import JoinDevCommunity from "./JoinDevCommunity";
import { CLAIM_100_SHM_LINK, REPORT_BUGS, DOCS_URL } from "constants/links";
import type { InferGetStaticPropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import UseCases from "../../components//sections/UseCases";
import Features from "../../components/sections/developer/Features";
import PlaneFeatures from "../../components/sections/developer/PlaneFeatures";

import Team from "../../components/sections/Team";
import { getSHMNewsArticles } from "../../utils/api";
import { IconCommunity, IconGlobe, IconTransaction } from "@shm/Icons";
import { Helmet } from "react-helmet";
import { relative } from "path";
const LandingPage = ({ news }: InferGetStaticPropsType<typeof getStaticProps>): React.ReactNode => {
  const { t: pageTranslation } = useTranslation("page-home");
  const { t: commonTranslation } = useTranslation("common");
  const stats = [
    { Icon: IconCommunity, title: "total-community-members" },
    { Icon: IconGlobe, title: "est-transaction-per-second" },
    { Icon: IconTransaction, title: "est-transaction-cost" },
    { Icon: IconGlobe, title: "min-validators" },
  ];

  return (
    <>
      {/* Hero section */}
      <Helmet>
        <title>{"Shardeum | EVM based Sharded Layer 1 Blockchain"}</title>
        <meta
          name="description"
          content="Shardeum is an EVM-based, linearly scalable network that provides low gas fees forever while maintaining true decentralization and solid security"
        />
        <meta
          name="keywords"
          content="shardeum,blockchain,layer1 blockchain,evm based blockchain"
        />
        <meta property="og:title" content="EVM Based Sharded Layer 1 Blockchain" />
        <meta
          property="og:description"
          content="Shardeum is an EVM-based, linearly scalable smart contract platform that maintains low gas fees while providing true decentralization and solid security"
        />
        <meta property="og:url" content="https://shardeum.org/" />
        <meta
          property="og:image"
          content="https://shardeum.org/wp-content/uploads/2022/03/Shardeum.png"
        />
        <meta name="twitter:title" content="EVM Based Sharded Layer 1 Blockchain" />
        <meta
          name="twitter:description"
          content="Shardeum is an EVM-based, linearly scalable network that provides low gas fees forever while maintaining true decentralization and solid security"
        />
        <meta
          name="twitter:image"
          content="https://shardeum.org/wp-content/uploads/2022/03/Shardeum.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shardeum" />
        <link rel="canonical" href="https://shardeum.org/" />
      </Helmet>

      <DeveloperResponsiveHero
        heading={"Build Linearly Scalable Dapps on Shardeum"}
        description={
          "Shardeum is the world's first EVM-based L1 blockchain that scales linearly through dynamic state sharding and maintains low gas fees forever."
        }
        cta={
          <>
            <Stack
              spacing="6"
              direction={{ base: "column", sm: "row" }}
              width={{ base: "full", sm: "auto" }}
              mt={6}
            >
              <Button
                as="a"
                variant="primary"
                size="2lg"
                rel="noopener noreferrer"
                target="_blank"
                href={DOCS_URL}
              >
                {"Start Building"}
              </Button>
              <div
                onClick={() => window.open(DOCS_URL)}
                style={{
                  color: "#9E9E9E",
                  fontSize: "1.1rem",
                  lineHeight: "2rem",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                {/* {commonTranslation("join-liberty-cta")} */}
                <b>
                  <i>{"On the Fastest "}</i>
                  {/* <br /> */}
                  <i>{"Growing L1 Platform ! ✨"}</i>
                </b>
                {/* <Image src="/fire-img.png" width="25px" height="25px" /> */}
              </div>
            </Stack>
          </>
        }
        respHeroImg={
          <Box position="relative">
            <Box
              h={{ base: "150px", md: "250px", xl: "auto" }}
              w={{ base: "150px", md: "250px", xl: "550px" }}
              overflow="hidden"
              mx="auto"
              transform={{ md: "scale(1)" }}
            >
              <Image src="/developer-banner.png" width="660px" height="450px" />
            </Box>
          </Box>
        }
      />
      {/* <SlidingStats stats={stats} />
      <ReadWhitepaper /> */}
      <Container
        maxW="container"
        mx="auto"
        py={{ base: "9", md: "2", lg: "2" }}
        px={{ base: 0, xl: 0, lg: "2" }}
        style={{ paddingTop: "0px" }}
        className="vstackForDev"
      >
        <PlaneFeatures />
      </Container>

      <Container
        maxW="container"
        mx="auto"
        py={{ base: "9", md: "2", lg: "2" }}
        px={{ base: 0, xl: 0, lg: "2" }}
        style={{ paddingTop: "0px", background: "#000000" }}
      >
        <Features />
      </Container>

      <JoinDevCommunity />
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const news = await getSHMNewsArticles();
  return {
    props: {
      news,
      ...(await serverSideTranslations(locale, ["common", "page-home"])),
    },
  };
};
export default LandingPage;
