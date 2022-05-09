import { Box, HStack, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { IconCommunity, IconGlobe, IconTransaction } from "@shm/Icons";

const stats = [
  { Icon: IconCommunity, title: "10k+ Community members" },
  { Icon: IconGlobe, title: "100k+ Estimated transactions per second (TPS)" },
  { Icon: IconTransaction, title: "$0.01 Estimated transaction cost" },
  { Icon: IconGlobe, title: "1280 - Minimum number of validators" },
];

const SlidingStats = () => (
  <Box
    bg="brand.grey-90"
    borderColor="brand.grey-50"
    borderTopWidth="1px"
    borderBottomWidth="1px"
    position="relative"
  >
    <Marquee gradientWidth={0} speed={50} pauseOnHover loop={0}>
      {stats.map((stat) => (
        <HStack spacing="6" mx="3rem" py={{ base: "4", md: "6", lg: "9" }} key={stat.title}>
          <stat.Icon />
          <Text fontSize={{ base: "xl", lg: "2xl" }} color="brand.grey-5">
            {stat.title}
          </Text>
        </HStack>
      ))}
    </Marquee>
  </Box>
);

export default SlidingStats;
