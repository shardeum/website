import { Box, Button, Stack } from "@chakra-ui/react";
import { IconDApps, IconNFTs, IconP2P_Transfer, IconWeb3 } from "@shm/Icons";
import SlidingStats from "components/common/SlidingStats";
import Hero from "components/sections/Hero";
import ReadWhitepaper from "components/sections/home/ReadWhitepaper";
import RoadmapFull from "components/sections/home/RoadMapFull";
import ShardeumInNews from "components/sections/home/ShardeumInNews";
import SHMTokenomics from "components/sections/home/SHMTokenomics";
import JoinCommunity from "components/sections/JoinCommunity";
import { CLAIM_100_SHM_LINK } from "constants/links";
import type { InferGetStaticPropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import UseCases from "../components//sections/UseCases";
import MoreAboutShardeum from "../components/sections/home/MoreAboutShardeum";
import Team from "../components/sections/Team";
import { getSHMNewsArticles } from "../utils/api";
import { IconCommunity, IconGlobe, IconTransaction } from "@shm/Icons";
import { Helmet } from "react-helmet";
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
          content="Shardeum is an EVM-based, linearly scalable network that provides low gas fees forever while maintaining true decentralization and solid security"
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
                href="https://shardeum.org/shardeum-liberty-alphanet"
              >
                {commonTranslation("join-liberty-cta")}
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
              <Image src="/hero-globe-image.png" width="660px" height="660px" />
            </Box>
          </Box>
        }
      />

      <SlidingStats stats={stats} />
      <ReadWhitepaper />
      <MoreAboutShardeum />
      <SHMTokenomics />

      {/* Use cases section */}
      <UseCases
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
      />

      <RoadmapFull />
      <Team />
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
