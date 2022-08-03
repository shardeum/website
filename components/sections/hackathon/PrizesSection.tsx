import { Box, Button, Container, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import GradientButton from "./GradientButton";
import HorizontalTile from "./HorizontalTile";
import RegisterPromoTile from "./RegisterPromoTile";

const partnerSlicer = (key: string): string =>
  key.includes("partner") ? key.slice(0, key.length - 1) : key;

enum Keys {
  DEFI = "defi",
  NFT = "nft",
  BUIDL = "buidl",
  DAO = "dao",
  GAMING = "gaming",
  FEMALE = "female",
  PARTNER = "partner",
}

interface Buttons {
  key: string;
  name: string;
}

interface Details {
  [key: string]: { title: string; description: string };
}

const ecosystemButtons: Buttons[] = [
  { key: Keys.DEFI, name: "DeFi" },
  { key: Keys.NFT, name: "NFT" },
  { key: Keys.BUIDL, name: "BUIDL" },
  { key: Keys.DAO, name: "DAO / Identity" },
  { key: Keys.GAMING, name: "Gaming" },
];

const totalWinningPool = "$5000";

const ecoSystemDetails: Details = {
  [Keys.DEFI]: {
    title: "DeFi - " + totalWinningPool,
    description: "Build DEXs, Lending Platforms and decentralized applications.",
  },
  [Keys.NFT]: {
    title: "NFT - " + totalWinningPool,
    description: "Build best NFT DApps on Shardeum.",
  },
  [Keys.BUIDL]: {
    title: "BUIDL - " + totalWinningPool,
    description: "It is open. Build any DApp on Shardeum.",
  },
  [Keys.DAO]: {
    title: "DAO / Identity - " + totalWinningPool,
    description: "Build a decentralized autonomous organization on Shardeum.",
  },
  [Keys.GAMING]: {
    title: "Gaming - " + totalWinningPool,
    description: "Build some interactive gaming for future.",
  },
};

const sponseredButtons: Buttons[] = [
  {
    key: Keys.FEMALE,
    name: "Female & Non-Binary",
  },
  {
    key: Keys.PARTNER + "1",
    name: "Partner 1",
  },
  {
    key: Keys.PARTNER + "2",
    name: "Partner 2",
  },
];

const sponserDetails: Details = {
  [Keys.FEMALE]: {
    title: "Female or non-binary developers - " + totalWinningPool,
    description: " It is open for female or non-binary developers. Build any DApp on Shardeum.",
  },
  [Keys.PARTNER + "1"]: {
    title: "Partner 1 - " + totalWinningPool,
    description: "Build privacy-preserving social networks.",
  },
  [Keys.PARTNER + "2"]: {
    title: "Partner 2 - " + totalWinningPool,
    description: "Make your DApp Gasless.",
  },
};
function PrizesSection() {
  const [ecosystemActiveIndex, setEcosystemActiveIndex] = useState<string>(ecosystemButtons[0].key);
  const [sponserActiveIndex, setSponserActiveIndex] = useState(sponseredButtons[0].key);
  const handleButtonActive = (key: string, type?: "ecosystem" | "sponser"): void => {
    if (type === "ecosystem") {
      setEcosystemActiveIndex(key);
    } else {
      setSponserActiveIndex(key);
    }
  };
  return (
    <Box id="section-4" width="100%" position="relative">
      <Image
        src="/hackathon/section-3-floating-image.png"
        position="absolute"
        alt="floating vector"
        bottom="0"
        left="2%"
        zIndex="10"
        width={["7rem", "8rem", "8rem", "auto"]}
        transform="translateY(50%)"
      />
      <Container
        mx="auto"
        maxW="container.xl"
        px={{ base: 8, xl: 0 }}
        pt={{ base: 20, md: 16, lg: "7rem" }}
        pb={{ base: 20, md: 16 }}
      >
        <Box mb="3.75rem">
          <Text
            as="h2"
            textAlign="center"
            lineHeight="short"
            fontSize={{ base: "4xl", sm: "6xl", lg: "7xl" }}
            fontWeight="bold"
            width="100%"
            color="brand.black"
          >
            Tracks & Prizes
          </Text>
          <Text
            mb="1.5rem"
            color="brand.black"
            textAlign="center"
            fontSize="lg"
            fontWeight="normal"
          >
            Tag line: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo
          </Text>
          <Text mb="2rem" color="brand.black" textAlign="center" fontSize="2xl" fontWeight="bold">
            Sponsored by Sharedum
          </Text>

          <Flex
            direction={["column", "column", "row"]}
            gap={[2, 4, 6]}
            flexWrap="wrap"
            justifyContent="center"
            alignItems="strech"
            mb={6}
          >
            {ecosystemButtons.map((item) => (
              <GradientButton
                key={item.key}
                onClick={() => handleButtonActive(item.key, "ecosystem")}
                text={item.name}
                imageName={
                  item.key === ecosystemActiveIndex
                    ? partnerSlicer(item.key)
                    : partnerSlicer(item.key) + "-inactive"
                }
                active={item.key === ecosystemActiveIndex}
              />
            ))}
          </Flex>
          <HorizontalTile
            ecoSystem={ecoSystemDetails[ecosystemActiveIndex].title}
            description={ecoSystemDetails[ecosystemActiveIndex].description}
            imageName={ecosystemActiveIndex}
          />
        </Box>
        <Box>
          <Text mb="2rem" color="brand.black" textAlign="center" fontSize="2xl" fontWeight="bold">
            Sponsored by Sponsored by Ecosystem Partners
          </Text>
          <Flex
            direction={["column", "column", "row"]}
            gap={[2, 4, 6]}
            flexWrap="wrap"
            justifyContent="center"
            alignItems="strech"
            mb={6}
          >
            {sponseredButtons.map((item) => (
              <GradientButton
                key={item.name}
                onClick={() => handleButtonActive(item.key)}
                text={item.name}
                imageName={
                  item.key === sponserActiveIndex
                    ? partnerSlicer(item.key)
                    : partnerSlicer(item.key) + "-inactive"
                }
                active={item.key === partnerSlicer(sponserActiveIndex)}
              />
            ))}
          </Flex>
          <HorizontalTile
            ecoSystem={sponserDetails[sponserActiveIndex].title}
            description={sponserDetails[sponserActiveIndex].description}
            imageName={partnerSlicer(sponserActiveIndex)}
          />
        </Box>
      </Container>
      <Box backgroundColor="#EFF1F8">
        <Container
          mx="auto"
          maxW="container.xl"
          px={{ base: 8, xl: 0 }}
          pt={{ base: 4, md: 16, lg: "6.75rem" }}
          pb={{ base: 20, md: 16, lg: "6.75rem" }}
        >
          <RegisterPromoTile
            gradientTitleIndex={1}
            firstLine="Developer"
            secondLine="Hackathon 2022"
            description="#Build your DApps on World's First EVM-Based Dynamic State Sharded L1"
            reverse={false}
          />
        </Container>
      </Box>
    </Box>
  );
}

export default PrizesSection;
