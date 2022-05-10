import { Box, Button } from "@chakra-ui/react";
import { IconDApps, IconNFTs, IconP2P_Transfer, IconWeb3 } from "@shm/Icons";
import SlidingStats from "components/common/SlidingStats";
import Hero from "components/sections/Hero";
import ReadWhitepaper from "components/sections/home/ReadWhitepaper";
import Roadmap from "components/sections/home/Roadmap";
import ShardeumInNews from "components/sections/home/ShardeumInNews";
import SHMTokenomics from "components/sections/home/SHMTokenomics";
import JoinCommunity from "components/sections/JoinCommunity";
import type { InferGetStaticPropsType } from "next";
import Image from "next/image";
import UseCases from "../components//sections/UseCases";
import MoreAboutShardeum from "../components/sections/home/MoreAboutShardeum";
import Team from "../components/sections/Team";
import { getSHMNewsArticles } from "../utils/api";

const LandingPage = ({ news }: InferGetStaticPropsType<typeof getStaticProps>): React.ReactNode => {
  return (
    <>
      {/* Hero section */}
      <Hero
        heading={"Decentralization for everyone"}
        description={
          "Shardeum is an EVM-based, linearly scalable smart contract platform that provides low gas fees forever while maintaining true decentralization and solid security through dynamic state sharding."
        }
        cta={
          <Button
            as="a"
            variant="primary"
            size="lg"
            rel="noopener noreferrer"
            target="_blank"
            href="https://shardeum.org/shardeum-liberty-alphanet"
          >
            Join Shardeum Liberty
          </Button>
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
              <video loop muted autoPlay playsInline>
                <source src="/hero-globe.mp4" type="video/mp4" />
                <Image src="/hero-globe-image.png" width="660px" height="660px" />
              </video>
            </Box>
          </Box>
        }
      />

      <SlidingStats />
      <ReadWhitepaper />
      <MoreAboutShardeum />
      <SHMTokenomics />

      {/* Use cases section */}
      <UseCases
        heading={"Use cases"}
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
            title: "P2P transfers",
            description:
              "Shardeum enables users to transfer value across the internet with no intermediaries while always retaining extremely low fees and immediate finality.",
            Icon: IconP2P_Transfer,
          },
          {
            title: "DeFi",
            description:
              "High gas fees and low throughput bottleneck the current DeFi landscape. Shardeum provides a platform for scalable DeFi infrastructure with very low gas costs, making it affordable to businesses and individuals for even low value transactions.",
            Icon: IconNFTs,
          },

          {
            title: "EVM dApps",
            description:
              "Shardeum is EVM-based. Contracts can be written in Solidity or Vyper and use the same Ethereum tooling such as Remix and Truffle. Join the Shardeum ecosystem, where users never have to worry about rising gas fees again.",
            Icon: IconDApps,
          },
          {
            title: "NFTs",
            description:
              "NFTs, assets that represent ownership of digitally unique items, have multitudes of applications ranging from real estate, digital certificates and IP rights to digital identities. NFTs on Shardeum will be fast, interoperable and user-friendly.",
            Icon: IconNFTs,
          },
          {
            title: "Web 3.0",
            description:
              "Web 3.0, or the Internet of Value, is the next iteration of the internet. Shardeum aims to accelerate the transition to Web 3.0 by providing a platform that enables decentralized user experiences that are better than centralized competitors at scale.",
            Icon: IconWeb3,
          },
        ]}
      />

      <Roadmap />
      <Team />
      <ShardeumInNews news={news} />
      <JoinCommunity />
    </>
  );
};

export const getStaticProps = async () => {
  const news = await getSHMNewsArticles();
  return {
    props: { news },
  };
};
export default LandingPage;
