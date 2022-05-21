import { Button } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import ResponsiveHero from "components/sections/ResponsiveHero";
import JoinCommunity from "components/sections/JoinCommunity";
import { NextSeo } from "next-seo";
import { DISCORD_URL } from "constants/links";
import CommunityIntro from "@shm/components/sections/community/CommunityIntro";
import CommunityTiles from "@shm/components/sections/community/CommunityTiles";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getCommunityStats } from "utils/api";
import { CommunityStat } from "types";
import CommunitySuperShardianBox from "@shm/components/sections/community/CommunitySuperShardianBox";

const Community = ({ communityStats }: { communityStats: CommunityStat[] }): React.ReactNode => {
  const { t: pageTranslation } = useTranslation("page-community");

  return (
    <>
      <NextSeo
        title="Community is the CEO of Shardeum"
        description="Shardeum welcomes you to join its community of creators, developers, translators and users to build a layer 1 blockchain that finally solves blockchain trilemma."
        canonical="https://shardeum.org/shardeum-liberty-alphanet/"
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "super shardian, shardeum, contributors, rewards, shardeum community, developers, testnet, blockchain,layer1 blockchain,evm based blockchain",
          },
          {
            property: "twitter:image",
            content: "https://shardeum.org/shardeum-liberty.jpeg",
          },
        ]}
        openGraph={{
          url: "https://shardeum.org/community/",
          title: "Community is the CEO of Shardeum",
          description:
            "Shardeum welcomes you to join its community of creators, developers, translators and users to build a layer 1 blockchain that finally solves blockchain trilemma",
          images: [
            {
              url: "https://shardeum.org/shardeum-liberty.jpeg",
              width: 800,
              height: 600,
              alt: "Shardeum Community | Shardeum welcomes you to join its community of creators, developers, translators and users to build a layer 1 blockchain that finally solves blockchain trilemma",
              type: "image/jpeg",
            },
          ],
          site_name:
            "Shardeum Community | Shardeum welcomes you to join its community of creators, developers, translators and users to build a layer 1 blockchain that finally solves blockchain trilemma",
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "https://shardeum.org",
          handle: "@shardeum",
        }}
      />

      {/* Hero section */}
      <ResponsiveHero
        heading={pageTranslation("page-community-hero-h1")}
        description={pageTranslation("page-community-hero-description")}
        cta={
          <Button
            as="a"
            variant="primary"
            size="lg"
            rel="noopener noreferrer"
            target="_blank"
            href={DISCORD_URL}
            mt={8}
          >
            {pageTranslation("page-community-hero-cta")}
          </Button>
        }
        src={"/community/community-hero.png"}
      />

      <CommunityIntro />

      <CommunityTiles communityStats={communityStats} />

      <CommunitySuperShardianBox />

      {/* Join community - common CTA */}
      <JoinCommunity />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const communityStats: CommunityStat[] = await getCommunityStats();

  return {
    props: {
      communityStats,
      ...(await serverSideTranslations(locale, ["common", "page-community"])),
      // Will be passed to the page component as props
    },
  };
}

export default Community;
