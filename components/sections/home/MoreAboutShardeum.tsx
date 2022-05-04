import { AspectRatio, Box, Container, Flex, Grid, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Feature from "../../common/Feature";
import SectionHeading from "../../common/SectionHeading";

const featureList = [
  {
    title: "EVM-Based Layer 1 Blockchain",
    description:
      "Shardeum is an EVM-based layer 1 smart contract platform that will accommodate billions of daily active users while retaining low fees and fast transactions",
    iconPath: "decentralized.png",
  },
  {
    title: "Linear Scalability & Low Gas Forever",
    description:
      "Dynamic state sharding partitions the network, compute and state into shards where parallel processing is gained per validator node to increase TPS capacity and retain low gas fees forever",
    iconPath: "linearScale.png",
  },
  {
    title: "Anyone Can Operate A Node",
    description:
      "Hardware requirements to operate a node will be very low to ensure network scales horizontally with constant bandwidth and optimal capacity achieving high decentralization at any given time",
    iconPath: "operateNode.png",
  },
  {
    title: "Immediately finality & Low Latency",
    description:
      "Network will have consensus done at transaction level and will process transactions simultaneously across shards resulting in immediate finality preventing network congestion",
    iconPath: "clockIcon.png",
  },
  {
    title: "Solid Security",
    description:
      "Transactions on Shardeum will be validated and processed by randomly rotated and leaderless nodes through unique consensus model that combines Proof of Stake (PoS) with Proof of Quorum (PoQ) consensus algorithms",
    iconPath: "securityIcon.png",
  },
  {
    title: "High fairness & energy efficiency",
    description:
      "Shardeum orders transactions on a time basis and charges each transaction the same fee to ensure the fair ordering of transactions. As a PoS network, Shardeum is energy efficient and sustainable.",
    iconPath: "plantIcon.png",
  },
];

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => (
  <VStack bg="brand.grey-10" p="6" maxW="md" alignItems="flex-start" spacing="5">
    <AspectRatio ratio={1} maxWidth={{ base: "50px", lg: "80px" }} w={{ base: "50px", lg: "80px" }}>
      <Image src={`/${icon}`} alt={`${icon}`} layout="fill" objectFit="contain" />
    </AspectRatio>
    <Feature
      title={title}
      titleSize={{ base: "2xl" }}
      titleFontWeight="semibold"
      description={description}
      descriptionColor="brand.grey-80"
    />
  </VStack>
);

function MoreAboutShardeum() {
  return (
    <Flex bg="white">
      <Container
        maxW="container.xl"
        mx="auto"
        py={{ base: "12", md: "16", lg: "32" }}
        px={{ base: "6", xl: 0 }}
      >
        <Box mb="12">
          <SectionHeading color="brand.black">More About Shardeum</SectionHeading>
        </Box>
        <Grid
          templateColumns={{
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="6"
          overflowX="scroll"
          gridAutoColumns={{
            base: "minmax(290px, 1fr)",
          }}
          className="no-scrollbar"
        >
          {featureList.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              icon={feature.iconPath}
              description={feature.description}
            />
          ))}
        </Grid>
      </Container>
    </Flex>
  );
}

export default MoreAboutShardeum;
