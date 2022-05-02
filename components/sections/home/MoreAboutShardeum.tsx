import { AspectRatio, Box, Container, Flex, Grid, Heading, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Feature from "../../common/Feature";
import SectionHeading from "../../common/SectionHeading";

const featureList = [
  {
    title: "Decentralized Smart Contracts platform",
    description:
      "Shardeum is EVM compatible decentralized network that will accommodate billions of daily users and DApps on a global scale achieved through dynamic state sharding",
    iconPath: "decentralized.png",
  },
  {
    title: "Linear Scaling",
    description:
      "Through the state of the art technology, every node joining the network will instantly increase its throughput that will allow the network to scale up to millions of TPS with high decentralization, and low gas fees forever",
    iconPath: "linearScale.png",
  },
  {
    title: "Anyone Can Operate A Node",
    description:
      "Hardware requirements to operate a node will be very low to ensure network scales horizontally and achieve high decentralization",
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
      "Shardeum’s state of the art cross-chain consensus ensures that transactions are processed in the order they are received and in an efficient",
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
  <VStack border="1px" bg="brand.grey-10" p="6" maxW="md" alignItems="flex-start" spacing="5">
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
            base: "repeat(auto-fill, minmax(290px, 1fr))",
            md: "repeat(auto-fill, minmax(340px, 1fr))",
            lg: "repeat(3, 1fr)",
          }}
          gap="6"
          overflowX="scroll"
          gridAutoFlow={{ base: "column", lg: "row" }}
          gridAutoColumns={{
            base: "minmax(290px, 1fr)",
          }}
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
