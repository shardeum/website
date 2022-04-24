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
          "Shardeum is the world's first layer 1 blockchain that truly solves scalability trilemma. It is an EVM based smart contract network that scales linearly with low gas fees forever with an aim to onboard billions of daily users and numerous DApps to Web 3. We invite you to build your DApps and other web 3 services on Shardeum by simply following the guidelines listed under ‘Developer Docs’ below"
        }
        cta={
          <Button variant="primary" size="lg">
            Developer Docs
          </Button>
        }
      />

      {/* Features of alphanet */}
      <UseCases
        heading={"Why Build on Shardeum?"}
        descriptiveMedia={<></>}
        content={[
          {
            title: "Developer Friendly Languages",
            description:
              "Shardeum’s smart contract platforms are deployed in developer and user friendly programming languages - Solidity & Vyper.",
            // Icon: IconP2P_Transfer,
          },
          {
            title: "Unrivaled Scalability through Dynamic State Sharding",
            description:
              "Shardeum’s dynamic state sharding allows the network to achieve linear scalability where throughput increases as and when more nodes join in. This ensures gas fees on the network remain very low forever with high decentralization regardless of how many people use it in the future",
            // Icon: IconNFTs,
          },

          {
            title: "Unique Consensus Algorithm",
            description:
              "Shardeum’s unique technology is complemented with a unique consensus algorithm that combines Proof-of-Quorum (PoQ) with Proof-of-Stake (PoS) to secure the network. Consensus on the network is done at the transaction level with simultaneous processing of transactions across shards resulting in immediate finality and low latency which prevents network congestion.",
            // Icon: IconDApps,
          },
          {
            title: "Quick & Easy Migration",
            description:
              "Shardeum is EVM based smart contract platform which means you can launch your Ethereum DApps and other Web 3 applications on Shardeum seamlessly.",
            // Icon: IconNFTs,
          },
          {
            title: "Affordable P2P Transfers",
            description:
              "Shardeum’s immediate finality and high throughput with low gas fees forever paves the way for global-scale adoption, redefining the landscape of cross-border payments and settlements.",
            // Icon: IconWeb3,
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
                Shardeum is an EVM-compatible dynamically state sharded blockchain with infinite
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
                decentralization
                <br />
                Shardeum will be the infrastructure on which the next iteration of the Internet,
                Web3, will be built.
              </>
            ),
          },

          {
            q: "What language will Shardeum use for Smart Contracts?",
            a: <>EVM-compatible languages: Solidity and Vyper.</>,
          },

          {
            q: "How can a developer contribute to alphanet?",
            a: (
              <>
                Alphanet launches on 26th April 2022. Nodes will be operated by Shardeum Foundation
                during Alphanet. Developers will deploy smart contracts on the network. As a
                developer you can start developing DApps on Shardeum and the performance data will
                be analyzed by the Shardeum Foundation dev team to identify improvement
                opportunities. Since the smart contract is in Solidity and Vyper, developers can
                also easily migrate their new/existing DApps from another network like Ethereum to
                Shardeum.
              </>
            ),
          },

          {
            q: "How do I get access to alphanet? Can you guide me how to build and develop apps during alphanet as I am new and excited about the project?",
            a: (
              <>
                The alphanet will be accessible to the public. You just need to configure the
                JSON-RPC server URL in MetaMask, Remix and other tools you use for development.
                Click on ‘Developer Docs’ link above which can guide you further.
              </>
            ),
          },

          {
            q: "What rewards can I expect if I build DApps on Shardeum?",
            a: (
              <>
                There will be an ecosystem fund setup to reward devs for creating innovative apps on
                Shardeum. You would be able to apply for a grant. More information will be posted on
                the Shardeum.org site about the process to apply.
              </>
            ),
          },
          {
            q: "I have developed apps on Ethereum. How can I easily migrate them to Shardeum’s testnet?",
            a: (
              <>
                Since Shardeum is EVM compatible, there is nothing new you have to learn to use the
                network. On a sharded blockchain, transactions which are EIP2930 compliant will run
                faster than regular transactions. So you might want to look into this. Information
                about creating EIP2930 transactions can be found by clicking ‘Developer Docs’ link
                above.
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
