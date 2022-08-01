import { Box, useBreakpointValue } from "@chakra-ui/react";
import AboutShardeum from "@shm/components/sections/hackathon/AboutShardeum";
import FAQ from "@shm/components/sections/hackathon/FAQ";
import HackathonTimeline from "@shm/components/sections/hackathon/HackathonTimeline";
import HeroSection from "@shm/components/sections/hackathon/HeroSection";
import PanelOfJudges from "@shm/components/sections/hackathon/PanelOfJudges";
import PerkSection from "@shm/components/sections/hackathon/PerkSection";
import PrizesSection from "@shm/components/sections/hackathon/PrizesSection";

import React from "react";

function Hackathon() {
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

      <PanelOfJudges />

      <AboutShardeum />
      <FAQ />
    </Box>
  );
}

export default Hackathon;
