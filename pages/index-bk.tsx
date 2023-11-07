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
import ReadWhitepaper from "components/sections/home/ReadWhitepaper";
import RoadmapFull from "components/sections/home/RoadMapFull";
import ShardeumInNews from "components/sections/home/ShardeumInNews";
import SHMTokenomics from "components/sections/home/SHMTokenomics";
import SectionHeading from "../components/common/SectionHeading";
import JoinCommunity from "components/sections/JoinCommunity";
import { CLAIM_100_SHM_LINK, REPORT_BUGS } from "constants/links";
import type { InferGetStaticPropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import UseCases from "../components/sections/UseCases";
import MoreAboutShardeum from "../components/sections/home/MoreAboutShardeum";
import Team from "../components/sections/Team";
import { getSHMNewsArticles } from "../utils/api";
import { IconCommunity, IconGlobe, IconTransaction } from "@shm/Icons";
import { Helmet } from "react-helmet";
import { relative } from "path";
import Head from "next/head";

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
      <Head>
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
        <meta property="og:image" content="https://shardeum.org/Shardeum.png" />
        <meta name="twitter:title" content="EVM Based Sharded Layer 1 Blockchain" />
        <meta
          name="twitter:description"
          content="Shardeum is an EVM-based, linearly scalable network that provides low gas fees forever while maintaining true decentralization and solid security"
        />
        <meta name="twitter:image" content="https://shardeum.org/Shardeum.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shardeum" />
        <link rel="canonical" href="https://shardeum.org/" />

        <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/08f8687cb2b708c3de5b4b9f/script.js"
        ></script>
      </Head>
      <Hero
        heading={commonTranslation("shm-slogan")}
        description={commonTranslation("shm-description")}
        cta={
          <>
            {/* <h1 className="chakra-text css-1ukwr3a">{commonTranslation("shm-slogan")}</h1>
            <div className="css-x04s0f">
              <p className="chakra-text css-zfsl17">{commonTranslation("shm-description")}</p>
            </div> */}
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
                href="https://shardeum.org/betanet"
              >
                {/* {commonTranslation("join-liberty-cta")} */}
                Join Betanet Sphinx
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
          <Box position="relative">
            <Box
              h={{ base: "150px", md: "250px", xl: "auto" }}
              overflow="hidden"
              mb={{ base: "-24px" }}
              mx="auto"
              transform={{ md: "scale(1)" }}
            >
              <Image alt="" src="/hero-globe-image.png" width="660" height="660" />
            </Box>
          </Box>
        }
      />

      <SlidingStats stats={stats} />
      <ReadWhitepaper />
      <MoreAboutShardeum />
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
                    {"Shardeum Testnets: A Preview of the Future of Web3"}
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
                    Ongoing betanet &apos;Sphinx&apos; touched a high of 35,000+ validators
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
      {/* <Container
        maxW="container"
        mx="auto"
        py={{ base: "9", md: "2", lg: "2" }}
        px={{ base: 6, xl: 0 }}
        style={{ paddingTop: "60px", background: "#118263", position: "relative", zIndex: 1 }}
      >
        <Container
          maxW="container.xl"
          mx="auto"
          py={{ base: "9", md: "2", lg: "2" }}
          px={{ base: 6, xl: 0 }}
          style={{ paddingTop: "0px" }}
        >
          <VStack
            spacing={{ base: "12", md: "12" }}
            className="incressZhight"
            alignItems="start"
            w="full"
            pb="16"
          >
            <SimpleGrid columns={[1, 1]} justifyContent="space-between" w="full">
              <VStack alignItems="left" spacing="10" mt={10}>
                <SectionHeading color="brand.blue-100">
                  <h2
                    className="betaAlphanetTitleDark"
                    style={{ color: "white", textAlign: "center" }}
                  >
                    <NextLink href="/ecosystem" passHref>
                      Find dApps/projects building on Shardeum here
                    </NextLink>
                  </h2>
                  <br />
                  <p style={{ color: "#D7F6EE", textAlign: "center" }}>
                    <NextLink href="/ecosystem" passHref>
                      Click Here ↑
                    </NextLink>
                  </p>
                </SectionHeading>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Container> */}

      <SHMTokenomics />

      {/* Use cases section */}
      {/* <UseCases
        heading={pageTranslation("use-case-title")}
        descriptiveMedia={
          <Image
            objectFit="contain"
            src="/useCase.png"
            alt="Shardeum Use Case Illustrations"
            width="490px"
            height="328px"
          />
        }
        content={[
          {
            title: pageTranslation("use-case-1-title"),
            description: pageTranslation("use-case-1-desc"),
            Icon: IconP2P_Transfer,
          },
          {
            title: pageTranslation("use-case-2-title"),
            description: pageTranslation("use-case-2-desc"),
            Icon: IconNFTs,
          },

          {
            title: pageTranslation("use-case-3-title"),
            description: pageTranslation("use-case-3-desc"),
            Icon: IconDApps,
          },
          {
            title: pageTranslation("use-case-4-title"),
            description: pageTranslation("use-case-4-desc"),
            Icon: IconNFTs,
          },
          {
            title: pageTranslation("use-case-5-title"),
            description: pageTranslation("use-case-5-desc"),
            Icon: IconWeb3,
          },
        ]}
      /> */}

      <RoadmapFull heading={"h2"} />
      <Team />

      {/* Shardium Alphanet dpps*/}
      <Container
        maxW="container"
        mx="auto"
        py={{ base: "9", md: "2", lg: "2" }}
        px={{ base: 6, xl: 0 }}
        style={{
          paddingTop: "60px",
          // marginBottom: "50px",
          background: "#000000",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Container
          maxW="container.xl"
          mx="auto"
          py={{ base: "9", md: "2", lg: "2" }}
          px={{ base: 6, xl: 0 }}
          style={{ paddingTop: "0px" }}
        >
          <VStack
            spacing={{ base: "12", md: "12" }}
            className="incressZhight"
            alignItems="start"
            w="full"
            pb="16"
          >
            <SimpleGrid columns={[1, 1]} justifyContent="space-between" w="full">
              <VStack alignItems="left" spacing="10" mt={10}>
                <SectionHeading color="brand.blue-100">
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h2
                      className="betaAlphanetTitleDark"
                      style={{ color: "white", textAlign: "center" }}
                    >
                      Find Dapps/Projects building on Shardeum
                    </h2>
                    <br />
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                      <Button
                        as="a"
                        variant="secondary"
                        size="lg"
                        // backgroundColor= "#4EB59A"
                        rel="noopener noreferrer"
                        target="_blank"
                        fontSize="14px"
                        href={"/ecosystem"}
                      >
                        Explore Dapps
                      </Button>

                      <Button
                        as="a"
                        variant="primary"
                        size="lg"
                        // backgroundColor= "#4EB59A"
                        rel="noopener noreferrer"
                        target="_blank"
                        ml={5}
                        href={REPORT_BUGS}
                        maxWidth="160px"
                        fontSize="14px"
                      >
                        Report Bugs on Sphinx
                      </Button>
                    </div>

                    {/* <p
                      style={{
                        backgroundColor: "#4EB59A",
                        width: "400px",
                        color: "white",
                        textAlign: "center",
                        padding: "10px",
                        borderRadius: "10px",
                      }}
                    >
                      <NextLink href="/ecosystem" passHref>
                        Explore dApps
                      </NextLink>
                    </p> */}
                  </div>
                </SectionHeading>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Container>

      <ShardeumInNews news={news} />
      <JoinCommunity />
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
