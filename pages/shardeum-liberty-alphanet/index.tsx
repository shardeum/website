import { Box, Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Hero from "components/sections/Hero";
import JoinCommunity from "components/sections/JoinCommunity";
import Roadmap from "../../components/sections/alphanet/Roadmap";
import UseCases from "components/sections/UseCases";
import FAQs from "components/sections/FAQs";
import Image from "next/image";
import { AlphanetFeatureIcons } from "@shm/Icons";
import { NextSeo } from "next-seo";
import { DOCS_URL } from "constants/links";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AlphanetLanding: NextPage = () => {
  const { t: pageTranslation } = useTranslation(["page-alphanet"]);
  return (
    <>
      <NextSeo
        title={"Shardeum Liberty | Alphanet | Build your DApps and Web3 services on Shardeum"}
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
        cta={
          <Button
            as="a"
            variant="primary"
            size="lg"
            rel="noopener noreferrer"
            target="_blank"
            href={DOCS_URL}
          >
            {pageTranslation("page-alphanet-hero-cta")}
          </Button>
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

      {/* Alphanet roadmap */}
      <Roadmap />

      <FAQs
        heading={pageTranslation("page-alphanet-faq-h1")}
        content={Array(7)
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
