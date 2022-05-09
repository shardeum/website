import { AspectRatio, Box, Container, Flex, Grid, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Feature from "../../common/Feature";
import SectionHeading from "../../common/SectionHeading";

const featureList = [
  {
    title: "EVM-based layer 1 blockchain",
    description:
      "Any dApp that can run on the Ethereum Virtual Machine will seamlessly run on Shardeum.",
    iconPath: "decentralized.png",
  },
  {
    title: "Linear scalability & low gas forever",
    description:
      "Every node that joins the Shardeum network immediately increases the transactions per second (TPS) and total capacity of the network to achieve linear scaling and ensure low transaction fees even as the usage grows.",
    iconPath: "linearScale.png",
  },
  {
    title: "Anyone can operate a node",
    description:
      "Hardware requirements to operate a validator node are kept low by offloading historical data to archive nodes and adding more nodes to reduce the load on each validator in the permissionless Shardeum network.",
    iconPath: "operateNode.png",
  },
  {
    title: "Immediate finality & low latency",
    description:
      "All transactions are guaranteed to be processed within a few seconds to ensure low latency and are irreversible once processed to achieve immediate finality.",
    iconPath: "clockIcon.png",
  },
  {
    title: "Solid security",
    description:
      "A leaderless Proof-of-Quorum (PoQ) consensus algorithm, Proof-of-Stake (PoS) with slashing, standby nodes, node rotation and permissionless participation all contribute to increasing the security of the network.",
    iconPath: "securityIcon.png",
  },
  {
    title: "High fairness & energy efficiency",
    description:
      "Shardeum processes transactions on a first-come, first-served basis, with the same gas rate for all transactions to ensure fairness and eliminate miner extractable value. As a PoS network, Shardeum is energy efficient and sustainable.",
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
          <SectionHeading color="brand.black">Shardeum features</SectionHeading>
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
