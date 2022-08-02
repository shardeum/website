import { Box } from "@chakra-ui/react";
import AboutShardeum from "@shm/components/sections/hackathon/AboutShardeum";
import FAQ from "@shm/components/sections/hackathon/FAQ";
import HackathonTimeline from "@shm/components/sections/hackathon/HackathonTimeline";
import HeroSection from "@shm/components/sections/hackathon/HeroSection";
import PanelOfJudges from "@shm/components/sections/hackathon/PanelOfJudges";
import PerkSection from "@shm/components/sections/hackathon/PerkSection";
import PrizesSection from "@shm/components/sections/hackathon/PrizesSection";
import { InferGetServerSidePropsType, NextPage } from "next";

import React from "react";
import { getHackathonPanel } from "utils/api";

export type HackathonPageProps = InferGetServerSidePropsType<typeof getStaticProps>;

const Hackathon: NextPage<HackathonPageProps> = (props: HackathonPageProps) => {
  return (
    <Box>
      {/* Hero section */}
      <HeroSection />

      {/* Perks Section */}
      <PerkSection />

      {/* Prizes Section */}
      <PrizesSection />

      {/* Hackathon Timeline */}
      <HackathonTimeline />

      <PanelOfJudges
        judges={props.judges}
        mentors={props.mentors}
        vcs={props.vcs}
        angels={props.angels}
        partners={props.partners}
      />

      <AboutShardeum />
      <FAQ />
    </Box>
  );
};

export default Hackathon;
enum Panel {
  JUDGE = "judge",
  MENTOR = "mentor",
  VC = "vc",
  ANGEL = "angel",
  PARTNER = "partner",
}

export const getStaticProps = async () => {
  const data = await getHackathonPanel();
  const judges = await data.filter((panel) => panel.type === Panel.JUDGE);
  const mentors = await data.filter((panel) => panel.type === Panel.MENTOR);
  const vcs = await data.filter((panel) => panel.type === Panel.VC);
  const angels = await data.filter((panel) => panel.type === Panel.ANGEL);
  const partners = await data.filter((panel) => panel.type === Panel.PARTNER);
  return {
    // Will be passed to the page component as props
    props: {
      judges,
      mentors,
      vcs,
      angels,
      partners,
    },
  };
};
