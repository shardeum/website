import {
  Box
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Footer from "../layout/sections/Footer";
import Hero from "../layout/sections/Hero";
import JoinCommunity from "../layout/sections/JoinCommunity";
import Team from "../layout/sections/Team";

const Home: NextPage = () => {
  return (
    <Box as="main">
      <Navbar />
      <Hero />
      <Team />
      <JoinCommunity />
      <Footer />
    </Box>
  );
};

export default Home;
