import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Hero from "components/sections/Hero";
import JoinCommunity from "components/sections/JoinCommunity";
import Roadmap from "./Roadmap";
import UseCases from "components/sections/UseCases";
import FAQs from "components/sections/FAQs";

const AlphanetLanding: NextPage = () => {
  return (
    <>
      {/* Hero section */}
      <Hero
        heading={"Shardeum’s Alphanet is Live!"}
        description={
          "Join us in building the world’s first EVM based blockchain that scales linearly with low gas fees forever. It is our aim to onboard billions of daily users and numerous DApps across the world to Web 3 for a more inclusive society"
        }
        cta={
          <Button variant="primary" size="lg">
            Read Developer Docs
          </Button>
        }
      />

      {/* Features of alphanet */}
      <UseCases
        heading={"Features"}
        descriptiveMedia={<></>}
        content={[
          {
            title: "Developer Friendly Languages",
            description:
              "Shardeum is EVM compatible decentralized network that will accommodate billions of daily users and DApps on a global scale achieved through dynamic state shardingShardeum’s smart contract platforms are deployed in developer and user friendly programming languages - Solidity/Vyper.",
            // Icon: IconP2P_Transfer,
          },
          {
            title: "Unrivaled Scalability with low fees forever",
            description:
              "Shardeum will be the first layer 1 blockchain network to achieve linear scalability with high decentralization and solid security that solves scalability trilemma once and for all.",
            // Icon: IconNFTs,
          },

          {
            title: "Quick & Easy Migration",
            description:
              "Shardeum is EVM based smart contract platform which means you can launch your Ethereum DApps and other Web 3 applications on Shardeum seamlessly.",
            // Icon: IconDApps,
          },
          {
            title: "Affordable P2P Transfers",
            description:
              "Shardeum’s immediate finality and high throughput with low gas fees forever paves the way for global-scale adoption, redefining the landscape of cross-border payments and settlements.",
            // Icon: IconNFTs,
          },
          {
            title: "DeFi, NFT & Other Web 3 Apps",
            description:
              "The current Web 3 landscape is bottlenecked by high gas fees and low throughput with repeated outages. Shardeum aims to accelerate the transition to Web 3.0 by providing an integrated, interoperable, and permissionless network which autoscales with very low latency and bandwidth.",
            // Icon: IconWeb3,
          },
        ]}
      />

      {/* Alphanet roadmap */}
      <Roadmap />

      <FAQs
        heading={"Frequently Asked Questions"}
        content={[
          {
            q: "What is Shardeum?",
            a: (
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </>
            ),
          },

          {
            q: "What does Shardeum aim for?",
            a: (
              <>
                Shardeum aims to be a chain capable of onboarding over a billion people to the
                blockchain and crypto revolution. Shardeum, like the Internet, will be open,
                collaborative, and community-driven and would democratize accessibility to
                decentralization
                <br />
                Shardeum will be the infrastructure on which the next iteration of the Internet,
                Web3, will be built.
              </>
            ),
          },

          {
            q: "I have developed apps in Ethereum. How to easily migrate my apps in this testnet?",
            a: (
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </>
            ),
          },

          {
            q: "Can you guide me how to build and develop apps in this testnet as I am new and excited about the project?",
            a: (
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </>
            ),
          },

          {
            q: "Will Shardeum maintain atomic composability across different shards?",
            a: (
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </>
            ),
          },

          {
            q: "Is the source code open?",
            a: (
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </>
            ),
          },
        ]}
      />

      {/* Join community - common CTA */}
      <JoinCommunity />
    </>
  );
};

export default AlphanetLanding;
