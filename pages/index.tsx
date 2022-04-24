import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import "swiper/css";
import "swiper/css/pagination";
import SlidingStats from "../components/common/SlidingStats";
import Navbar from "../components/Navbar";
import Footer from "../layout/sections/Footer";
import Hero from "../layout/sections/Hero";
import JoinCommunity from "../layout/sections/JoinCommunity";
import MoreAboutShardeum from "../layout/sections/MoreAboutShardeum";
import ReadWhitepaper from "../layout/sections/ReadWhitepaper";
import Roadmap from "../layout/sections/Roadmap";
import ShardeumInNews from "../layout/sections/ShardeumInNews";
import SHMTokenomics from "../layout/sections/SHMTokenomics";
import Team from "../layout/sections/Team";
import UseCases from "../layout/sections/UseCases";

const Home: NextPage = () => {
  return (
    <Box as="main">
      <Navbar />
      <Hero />
      <SlidingStats />
      <ReadWhitepaper />
      <MoreAboutShardeum />
      <SHMTokenomics />
      <UseCases />
      <Roadmap />
      <Team />
      <ShardeumInNews />
      <JoinCommunity />
      <Footer />
    </Box>
  );
};

export default Home;
