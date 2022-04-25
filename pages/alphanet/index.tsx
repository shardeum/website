import { Box, Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Hero from "components/sections/Hero";
import JoinCommunity from "components/sections/JoinCommunity";
import Roadmap from "./Roadmap";
import UseCases from "components/sections/UseCases";
import FAQs from "components/sections/FAQs";
import Image from "next/image";

const AlphanetLanding: NextPage = () => {
  return (
    <>
      {/* Hero section */}
      <Hero
        heading={"Shardeum Liberty (Alphanet) is Live!"}
        description={
          "Shardeum is the world's first layer 1 blockchain that truly solves scalability trilemma. It is an EVM based smart contract network that scales linearly with low gas fees forever. The network aims to onboard billions of daily users and numerous DApps to Web 3 in the future. We take this opportunity to invite you to build your DApps and other web 3 utilities on Shardeum using the guidelines documented under ‘Developer Docs’ below"
        }
        cta={
          <Button variant="primary" size="lg">
            Developer Docs
          </Button>
        }
        media={
          <Box position="relative">
            <Image
              objectFit="contain"
              src="/alphanet/alphanet-hero.png"
              alt="Shardeum Alphanet is Live"
              layout="fill"
            />
          </Box>
        }
      />

      {/* Features of alphanet */}
      <UseCases
        heading={"Why Build on Shardeum?"}
        content={[
          {
            title: "Developer Friendly Languages",
            description:
              "Shardeum’s smart contract platforms are - EVM based - deployed in developer friendly smart contract languages - Solidity & Vyper.",
            Icon: <Image src="/alphanet/alphanet-feature-1.svg" height={50} width={50} />,
          },
          {
            title: "Unrivaled Scalability through Dynamic State Sharding",
            description:
              "Dynamic state sharding allows Shardeum to scale linearly in which throughput increases by simply adding more nodes to the network. This further ensures gas fees on the network remain very low forever with high decentralization regardless of how many people use it in the future.",
            Icon: <Image src="/alphanet/alphanet-feature-2.svg" height={50} width={50} />,
          },

          {
            title: "Unique Consensus Algorithm",
            description:
              "Shardeum’s unique technology is complemented with a unique consensus algorithm that combines Proof-of-Quorum (PoQ) with Proof-of-Stake (PoS) to secure the network. Consensus on the network is done at the transaction level and transactions are processed simultaneously across shards. This results in immediate finality and low latency which helps to prevent network congestion.",
            Icon: <Image src="/alphanet/alphanet-feature-3.svg" height={50} width={50} />,
          },
          {
            title: "Quick & Easy Migration",
            description:
              "Shardeum is EVM based smart contract platform which means you can launch and develop your Ethereum DApps on the network seamlessly.",
            Icon: <Image src="/alphanet/alphanet-feature-4.svg" height={50} width={50} />,
          },
          {
            title: "Affordable P2P Transfers",
            description:
              "Shardeum’s high throughput with low gas fees paves the way for global-scale adoption, redefining the landscape of cross-border payments and settlements. This will be truly liberating for billions of people in the years to come.",
            Icon: <Image src="/alphanet/alphanet-feature-5.svg" height={50} width={50} />,
          },
          {
            title: "DeFi, NFT & Other Web 3 Apps",
            description:
              "The current Web 3 landscape is bottlenecked by high gas fees and low throughput with repetitive performance issues. Shardeum aims to accelerate the transition to Web 3 by providing an integrated, interoperable, and permissionless network which scales horizontally with optimal capacity and constant bandwidth.",
            Icon: <Image src="/alphanet/alphanet-feature-6.svg" height={50} width={50} />,
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
                Shardeum is an EVM-compatible dynamically sharded blockchain with infinite
                scalability, true decentralization, and solid security.
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
                decentralization.
                <br />
                Shardeum will be the infrastructure on which the next iteration of the Internet, Web
                3, will be built that will truly seek to liberate masses in the years to come.
              </>
            ),
          },

          {
            q: "What language will Shardeum use for Smart Contracts?",
            a: <>EVM-compatible languages: Solidity and Vyper.</>,
          },

          {
            q: "How can a developer contribute to Shardeum Liberty (Alphanet)?",
            a: (
              <>
                Shardeum Liberty launches on 26th April 2022 where we will demonstrate how to deploy
                smart contracts and DApps on the network. Once Liberty is launched, you can start
                deploying smart contracts and DApps on the alphanet by following our developer
                documentation. Simultaneously, the network performance will be analyzed by the
                Shardeum Foundation’s dev team to identify improvement opportunities. You can
                further migrate Ethereum based DApps written in Solidity & Viper to Shardeum. An
                added bonus is you will never have to worry about rising gas fees again!
              </>
            ),
          },

          {
            q: "How do I get access to Shardeum Liberty? Can you guide me how to build and develop apps on Shardeum as I am new and excited about the project?",
            a: (
              <>
                Shardeum Liberty will be accessible to the public. You just need to configure the
                JSON-RPC server URL in MetaMask, Remix and other tools you use for development.
                Click on ‘Developer Docs’ link above which can guide you further.
              </>
            ),
          },

          {
            q: "What rewards can I expect if I build DApps on Shardeum Liberty?",
            a: (
              <>
                here will be an ecosystem fund setup to reward devs for creating innovative apps on
                Shardeum. You would be able to apply for a grant. More information will be posted on
                the Shardeum.org site about the process to apply.
              </>
            ),
          },
          {
            q: "I have developed apps on Ethereum. How can I easily migrate them to Shardeum Liberty?",
            a: (
              <>
                Since Shardeum is EVM compatible, there is nothing new you have to learn to use the
                network. On a sharded blockchain, transactions which are EIP2930 compliant will run
                faster than regular transactions. So you might want to look into this. Information
                about creating EIP2930 transactions can be found under ‘Developer Docs’ link above.
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
