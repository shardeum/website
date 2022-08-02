import { Box, HStack, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "next-i18next";
import { Key } from "react";

interface Stat {
  title: string;
  Icon: any;
}

interface Stats {
  stats: Stat[];
}

const SlidingStats = ({ stats }: Stats) => {
  const { t: pageTranslation } = useTranslation("common");

  return (
    <Box
      bg="brand.grey-90"
      borderColor="brand.grey-50"
      borderTopWidth="1px"
      borderBottomWidth="1px"
      position="relative"
    >
      <Marquee gradientWidth={0} speed={50} pauseOnHover loop={0}>
        {stats.map((stat: { title: string; Icon: any }) => (
          <HStack spacing="6" mx="3rem" py={{ base: "4", md: "6", lg: "9" }} key={stat.title}>
            <stat.Icon />
            <Text fontSize={{ base: "xl", lg: "2xl" }} color="brand.grey-5">
              {pageTranslation(stat.title)}
            </Text>
          </HStack>
        ))}
      </Marquee>
    </Box>
  );
};

export default SlidingStats;
