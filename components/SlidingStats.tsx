import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

const stats = [
  { title: "9.5k+ community members", logo: "Icon" },
  { title: "100k+ estimated transactions ps", logo: "Icon" },
  { title: "Estimated transaction cost", logo: "Icon" },
  { title: "Another stat", logo: "Icon" },
];

const SlidingStats = () => {
  return (
    <Box>
      <Marquee gradientWidth={0} speed={100}>
        {stats.map((stat, index) => (
          <Box px="3rem" py="2rem" key={index}>
            <Text fontSize="2xl">{stat.title}</Text>
          </Box>
        ))}
      </Marquee>
    </Box>
  );
};

export default SlidingStats;
