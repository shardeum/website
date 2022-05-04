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
          "Shardeum is the first linearly scalable smart contract blockchain being built by the people for the people"
        }
        h={{ base: "auto", xl: "80vh" }}
        cta={
          <Button
            as="a"
            variant="primary"
            size="lg"
            rel="noopener noreferrer"
            target="_blank"
            href="https://shardeum.org/shardeum-liberty-alphanet"
          >
            Join Shardeum Liberty Testnet
          </Button>
        }
        media={
          <Box position="relative">
            <Box
              h={{ base: "150px", md: "250px", xl: "auto" }}
              overflow="hidden"
              mb={{ base: "-24px" }}
              // maxW={{ lg: "1446px" }}
              mx="auto"
              transform={{ base: "scale(1.2)", md: "scale(1)" }}
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
        heading={"Use Cases"}
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
            title: "P2P Transfers",
            description:
              "Shardeum is EVM compatible decentralized network that will accommodate billions of daily users and DApps on a global scale achieved through dynamic state sharding",
            Icon: IconP2P_Transfer,
          },
          {
            title: "DeFi",
            description:
              "The current DeFi landscape is bottlenecked by high gas fees and low throughput. Shardeum provides a platform for scalable DeFi infrastructure with very low gas costs making it affordable to businesses and individuals",
            Icon: IconNFTs,
          },

          {
            title: "DApps",
            description:
              "Shardeum is EVM compatible. Developers can seamlessly build and deploy complex smart contract platforms like DeFi and Web3 applications. Any EVM DApp can easily be ported over to Shardeum to be instantly scalable.",
            Icon: IconDApps,
          },
          {
            title: "NFTs",
            description:
              "NFTs, assets that represent ownership of digitally unique items, have multitudes of applications ranging from real estate, digital certificates, and IP rights to digital identities. NFTs on Shardeum will be fast, interoperable and user friendly",
            Icon: IconNFTs,
          },
          {
            title: "Web 3.0",
            description:
              "Web 3.0 or the Internet of Value is the next iteration of the Internet. Shardeum aims to accelerate the transition to Web 3.0 by providing an integrated, interoperable, and permissionless network to build SocialFi, GameFi applications",
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
