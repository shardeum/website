import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";

function AboutShardeum() {
  return (
    <Box id="section-7">
      <Container
        mx="auto"
        maxW="container.xl"
        px={{ base: 8, xl: 0 }}
        pt={{ base: 4, md: 16 }}
        pb={{ base: 20, xs: 0, sm: 0, md: 16 }}
      >
        <Flex
          flexDirection={["column-reverse", "column-reverse", "column-reverse", "row"]}
          columnGap={"7rem"}
          mt="9.5rem"
          alignItems={"center"}
        >
          <Box maxHeight="fit-content" flexBasis={["100%", "100%", "100%", "50%"]}>
            <Text
              as="h2"
              textAlign={["center", "center", "center", "left"]}
              lineHeight="normal"
              fontSize={{ base: "6xl", sm: "6xl", lg: "7xl" }}
              fontWeight="bold"
              width="100%"
              color="brand.black"
              mb={8}
            >
              About Shardeum
            </Text>

            <Text
              textAlign={["center", "center", "center", "left"]}
              color="brand.grey-90"
              fontSize="xl"
              fontWeight="normal"
            >
              Shardeum is the world&apos;s first EVM-based L1 which uses sharding to increase TPS
              with the addition of every new node, with a mission to enable decentralization for
              everyone. Currently, decentralized applications are limited by rising gas fees and
              long transaction queues as a result of blockchains that can&apos;t scale. To
              accelerate the adoption of dApps, Shardeum is building the most advanced iteration of
              a state sharded L1. Dynamic state sharding enables Shardeum to increase TPS per each
              node added to the network and helps in maintaining low fees forever with faster TPS.
            </Text>
          </Box>
          <Image
            flexBasis={["100%", "80%", "60%", "45%"]}
            src="/hackathon/section-6-right-image.png"
          />
        </Flex>
      </Container>
      <Box mx="auto" pt="6rem" pb="6.875rem" maxW={["100%", "100%", "90%", "90%", "75%"]}>
        <Text
          textAlign={"center"}
          pt="4rem"
          pb={[0, 0, "4rem"]}
          color="brand.grey-90"
          fontSize={{ base: "6xl", sm: "6xl", lg: "7xl" }}
          fontWeight="bold"
        >
          About Founders
        </Text>
        <Flex
          padding={[8, 8, 16, 0]}
          flexDirection={["column", "column", "column", "row"]}
          mb="4rem"
          alignItems={["center", "center", "flex-start"]}
          gap={[4, 6, "4rem"]}
        >
          <Image
            maxH={["23.5rem", "25rem"]}
            h={{ lg: "24.5rem" }}
            minW={["100%", "80%", "23.5rem", "25rem"]}
            w={["100%", "80%", "23.5rem", "25rem"]}
            src="/hackathon/section-6-nishchal.png"
            alt="Nishchal Shetty"
          />
          <Box>
            <Text
              as="h2"
              textAlign={["center", "center", "left"]}
              lineHeight="short"
              fontSize="2.5rem"
              fontWeight="bold"
              width="100%"
              color="brand.black"
              mb="2.5rem"
            >
              Nishchal Shetty
            </Text>
            <Text
              textAlign={["center", "center", "left"]}
              color="brand.grey-90"
              fontSize="xl"
              fontWeight="normal"
            >
              Cofounder, Shardeum. He is also the Founder, CEO of WazirX, India&apos;s largest
              crypto exchange by volume with over 12 Million users. Nischal is a well-known
              entrepreneur with over a decade of experience building and scaling global products out
              of India. A software engineer by education, he has also founded Crowdfire, a social
              media management product with over 20 Million users in the past. Nischal has also been
              featured in Forbes &apos;30 under 30&apos; list previously. A passionate blockchain
              evangelist, he has been active in the Indian crypto space since its inception.
              He&apos;s also been advocating positive crypto regulation in India with his Twitter
              campaign #IndiaWantsCrypto for over 1000 days.
            </Text>
          </Box>
        </Flex>
        <Flex
          padding={[8, 8, 16, 0]}
          mb="4rem"
          gap={[4, 6, "4rem"]}
          flexDirection={["column-reverse", "column-reverse", "column-reverse", "row"]}
          alignItems={["center", "center", "flex-start"]}
          columnGap="4rem"
        >
          <Box>
            <Text
              as="h2"
              textAlign={["center", "center", "left"]}
              lineHeight="short"
              fontSize="2.5rem"
              fontWeight="bold"
              width="100%"
              color="brand.black"
              mb="2.5rem"
            >
              Omar Syed
            </Text>
            <Text
              textAlign={["center", "center", "left"]}
              color="brand.grey-90"
              fontSize="xl"
              fontWeight="normal"
            >
              Cofounder, Shardeum. Omar Syed is a blockchain architect who in 2017 organized the
              Shardus project to build a linearly scalable blockchain. He&apos;s been involved with
              helping large organizations such as NASA, Yahoo, and Zynga build scalable,
              fault-tolerant, distributed systems. Omar holds a B.S. and M.S. from Case Western
              Reserve University with specialization in Artificial Intelligence. Omar along with his
              son Aamir invented the strategy board game Arimaa and offered the Arimaa Challenge
              Prize to promote breakthrough research in AI. His long-term vision is a world where
              everyone receives an unconditional basic income based on a stable cryptocurrency so
              that poverty and hunger are eliminated.
            </Text>
          </Box>
          <Image
            maxH={["23.5rem", "25rem"]}
            h={{ lg: "24.5rem" }}
            minW={["100%", "80%", "23.5rem", "25rem"]}
            w={["100%", "80%", "23.5rem", "25rem"]}
            src="/hackathon/section-6-omar.png"
            alt="Omar Syed"
          />
        </Flex>
        <Box id="section-8" px={[4, 8, 0]}>
          <Text
            textAlign="center"
            mb={4}
            color="brand.grey-90"
            fontSize={{ base: "6xl", sm: "6xl", lg: "7xl" }}
            fontWeight="bold"
          >
            Shardeum Investors
          </Text>

          <Text fontSize="xl" color="brand.grey-90" fontWeight="light" textAlign="center" mb={16}>
            Tag line: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo
          </Text>
          <Flex flexWrap="wrap" justifyContent="center" gap={[6, 8, "3.75rem"]}>
            <Image src="/hackathon/section-6-garmin.svg" alt="partners" />
            <Image src="/hackathon/section-6-pushsilver.svg" alt="partners" />
            <Image src="/hackathon/section-6-fila.svg" alt="partners" />
            <Image src="/hackathon/section-6-adomum.svg" alt="partners" />
            <Image src="/hackathon/section-6-relase.svg" alt="partners" />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutShardeum;
