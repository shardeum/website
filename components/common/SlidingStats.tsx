import { Box, HStack, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { IconCommunity, IconGlobe, IconTransaction } from "@shm/Icons";

const stats = [
  { Icon: IconCommunity, title: "9.5k+ community members" },
  { Icon: IconGlobe, title: "100k+ Estimated Transactions per sec." },
  { Icon: IconTransaction, title: "$0.001 Estimated Transaction Cost" },
  { Icon: IconGlobe, title: "1280 - Estimated Average Number Of Validators" },
];

const SlidingStats = () => (
  <Box bg="brand.grey-90" borderColor="brand.grey-50" borderTopWidth="1px" borderBottomWidth="1px">
    <Marquee gradientWidth={0} speed={50} pauseOnHover loop={0}>
      {stats.map((stat) => (
        <HStack spacing="6" mx="3rem" py="9" key={stat.title}>
          <stat.Icon />
          <Text fontSize="2xl">{stat.title}</Text>
        </HStack>
      ))}
    </Marquee>
  </Box>
);

export default SlidingStats;
