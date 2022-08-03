import { Box, Button, Container, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import GradientButton from "./GradientButton";
import HorizontalTile from "./HorizontalTile";
import RegisterPromoTile from "./RegisterPromoTile";

const buttonImageName = (imageName: string): string => `/hackathon/section-3-${imageName}.png`;
const ecosystemButtons: { key: string; name: string }[] = [
  { key: "defi", name: "DeFi" },
  { key: "nft", name: "NFT" },
  { key: "buidl", name: "BUIDL" },
  { key: "dao-identity", name: "DAO / Identity" },
  { key: "gaming", name: "Gaming" },
];

const sponseredButtons = [
  {
    key: "female",
    name: "Female & Non-Binary",
  },
  {
    key: "partner1",
    name: "Partner 1",
  },
  {
    key: "partner2",
    name: "Partner 2",
  },
];
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

          <HStack
            gap={[2, 4, 6]}
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="strech"
            mb={6}
          >
            {ecosystemButtons.map((item) => (
              <GradientButton
                key={item.key}
                onClick={() => handleButtonActive(item.key, "ecosystem")}
                text={item.name}
                imageLocation={buttonImageName(item.key)}
                active={item.key === ecosystemActiveIndex}
              />
            ))}
          </HStack>
          <HorizontalTile
            ecoSystem={"DeFi"}
            description="Build DEXs, Lending platforms and Decentralized applications."
            imageLocation="/hackathon/section-3-defi.png"
          />
        </Box>
        <Box>
          <Text mb="2rem" color="brand.black" textAlign="center" fontSize="2xl" fontWeight="bold">
            Sponsored by Sponsored by Ecosystem Partners
          </Text>
          <HStack
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
                imageLocation={buttonImageName(
                  item.key.includes("partner") ? item.key.slice(0, item.key.length - 1) : item.key
                )}
                active={item.key === sponserActiveIndex}
              />
            ))}
          </HStack>
          <HorizontalTile
            ecoSystem="Female & Non Binary Developers"
            description="It is open for female or non-binary developers. Build any DApp on Shardeum."
            imageLocation="/hackathon/section-3-female.png"
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
