import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Footer from "../layout/sections/Footer";
import Hero from "../layout/sections/Hero";
import JoinCommunity from "../layout/sections/JoinCommunity";
import Roadmap from "../layout/sections/Roadmap";
import Team from "../layout/sections/Team";
import UseCases from "../layout/sections/UseCases";

const Home: NextPage = () => {
  return (
    <Box as="main">
      <Navbar />
      <Hero />
      <UseCases />
      <Roadmap />
      <Team />
      <JoinCommunity />
      <Footer />
    </Box>
  );
};

export default Home;
