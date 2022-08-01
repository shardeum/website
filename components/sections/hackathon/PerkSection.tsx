import { Box, Button, Container, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import CustomButton from "./CustomButton";
import PerkCard from "./PerkCard";
import PerkPoint from "./PerkPoint";

function PerkSection() {
  return (
    <Box className="hackathon-section-2" position="relative">
      <Image
        src="/hackathon/section-2-floating-image.png"
        position="absolute"
        bottom={0}
        right="2%"
        transform={"translateY(72%)"}
        alt="floating-vector"
        width={["7rem", "8rem", "8rem", "auto"]}
      />
      <Image
        src="/hackathon/section-2-background.png"
        position="absolute"
        width="100%"
        height="100%"
        zIndex="-1"
        objectFit="fill"
        objectPosition="center"
        alt="hackathon illustration"
      />
      <Container
        mx="auto"
        maxW="container.xl"
        px={{ base: 8, xl: 0 }}
        pt={{ base: 4, md: 16 }}
        pb={{ base: 20, md: 16 }}
      >
        <Flex
          flexDirection={["column-reverse", "column-reverse", "column-reverse", "row"]}
          pt="4.25rem"
          justifyContent="space-between"
          alignItems="center"
          marginBottom={["7rem", "7rem", "7rem", "13.125rem"]}
        >
          <Box flexBasis={["1", "1", "48%"]}>
            <Text
              as="h2"
              textAlign={["center", "center", "left"]}
              lineHeight="normal"
              fontSize={{ base: "4xl", sm: "6xl", lg: "7xl" }}
              fontWeight="bold"
              width="100%"
              color="brand.white"
              mb={6}
            >
              About Hackathon
            </Text>
            <Text textAlign={["center", "center", "left"]} mb="6">
              #BuildWeb3 2022 is an online hackathon series inviting developers to compete in
              building dApps on Shardeum. #BuildWeb3&apos;s India chapter is the inaugural edition
              of our online hackathon series targeting developers in India focusing on Indian
              developers. All you Web2 or Web3 devs, come BUIDL on Shardeum!
            </Text>
            <Text
              textAlign={["center", "center", "left"]}
              paddingBottom={4}
              fontSize="2xl"
              fontWeight={700}
            >
              Calling all the:
            </Text>
            <PerkPoint text="Students learning about blockchain." />
            <PerkPoint text="Enthusiasts looking to transition from Web2 to Web3 development." />
            <PerkPoint text="Developers wanting to migrate their EVM-based DApp to Shardeum." />
            <PerkPoint text="BUIDLers who are passionate about decentralization." />
            <Flex
              pt={[6, 6, 0]}
              flexDirection={["column", "column", "row"]}
              columnGap={3}
              rowGap={4}
            >
              <CustomButton text="Register Now" />
              <CustomButton text="About Shardeum" variant="outlined" />
            </Flex>
          </Box>
          <Image
            my={["8rem", "8rem", 0]}
            width={["100%", "100%", "29.375rem"]}
            src="/hackathon/section-2-right-image.png"
          />
        </Flex>
        <Box width="100%">
          <Text
            as="h2"
            textAlign="center"
            lineHeight="normal"
            fontSize={{ base: "4xl", sm: "6xl", lg: "7xl" }}
            fontWeight="bold"
            width="100%"
            color="brand.white"
            mb="3.75rem"
          >
            Participation Perks
          </Text>
          <Flex
            rowGap="3.75rem"
            columnGap={[0, 4, "7.5rem"]}
            justifyContent="center"
            flexWrap="wrap"
          >
            <PerkCard
              imageLocation="/hackathon/perk-card-image-1.png"
              text="Get a golden chance to win the total competion prize worth of $25k"
            />
            <PerkCard
              imageLocation="/hackathon/perk-card-image-2.png"
              text="Build your DApps on world’s first EVM-based dynamic state sharded L1
"
            />
            <PerkCard
              imageLocation="/hackathon/perk-card-image-3.png"
              text="Get access to India’s top blockchain accelerator program organised by experts "
            />
            <PerkCard
              imageLocation="/hackathon/perk-card-image-4.png"
              text="Get a chance to earn VC funding by top and trusted investors."
            />
            <PerkCard
              imageLocation="/hackathon/perk-card-image-5.png"
              text="Access to industry experts, advisors, mentors, innovating in the ecosystem"
            />
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

export default PerkSection;
