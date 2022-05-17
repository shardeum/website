import { Box, Container, Flex, Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import { getPercentage } from "@shm/utils";
import SectionHeading from "components/common/SectionHeading";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import NewsletterInput from "../../common/NewsletterInput";

const bars = [
  {
    bgColor: "brand.grey-30",
    height: "51%",
    totalSHM: getPercentage(51),
    use: "node-mining",
  },
  {
    bgColor: "brand.grey-30",
    height: "18%",
    totalSHM: getPercentage(18),
    use: "sale",
  },
  {
    bgColor: "brand.grey-30",
    height: "15%",
    totalSHM: getPercentage(15),
    use: "team",
  },
  {
    bgColor: "brand.grey-30",
    height: "11%",
    totalSHM: getPercentage(11),
    use: "foundation",
  },
  {
    bgColor: "brand.grey-30",
    height: "5%",
    totalSHM: getPercentage(5),
    use: "ecosystem-airdrops",
  },
];

const SHMTokenomics = () => {
  const { t: pageTranslation } = useTranslation("page-home");
  const { t: commonTranslation } = useTranslation("common");

  return (
    <Box position="relative" overflow="hidden" bg="brand.black">
      <Box
        position="absolute"
        right="-20%"
        top="-25%"
        zIndex={1}
        display={{ base: "none", lg: "block" }}
      >
        <Image
          src="/tokenomic-bg.png"
          width="700px"
          objectFit="cover"
          alt="Nischal Image"
          height="800px"
        />
      </Box>
      <Container
        maxW="container.xl"
        mx="auto"
        py={{ base: "14", md: "32", lg: "40" }}
        zIndex={2}
        position="relative"
        px={{ base: 6, xl: 0 }}
      >
        <Box mb="12">
          <SectionHeading color="brand.white">{pageTranslation("shm-tokenomics")}</SectionHeading>
        </Box>
        <HStack alignItems="start" spacing="2" mb="4" display={{ base: "flex", md: "none" }}>
          <Text fontSize="base" fontWeight="medium" color="white">
            {pageTranslation("shm-fixed-supply-label")}{" "}
            <Text as="span" color="brand.orange" fontWeight="base">
              508M $SHM
            </Text>
          </Text>
        </HStack>
        {/* Shown on mobile devices */}
        <HStack h="600px" w="full" display={{ base: "flex", md: "none" }}>
          <Flex
            py="3"
            height="100%"
            bgColor="brand.grey-90"
            position="relative"
            w="8"
            justifyContent="center"
          >
            <Text
              as="p"
              style={{
                writingMode: "vertical-lr", // passing this value to Chakra's __css doesn't work that's why using inline style
              }}
              color="brand.grey-10"
              transform="rotate(-180deg)"
            >
              508M $SHM
            </Text>
          </Flex>
          <VStack h="full" spacing="3" alignItems="start">
            {bars.map((bar) => (
              <HStack
                key={bar.use}
                flexDir="row"
                h={bar.height}
                w="full"
                spacing="3"
                alignItems="flex-end"
              >
                <Box h="full" bgColor={bar.bgColor} w="20" />
                <Text fontSize="base" fontWeight="medium">
                  {bar.height}{" "}
                  <Text as="span" color="brand.grey-50" fontSize="">
                    {pageTranslation(bar.use)}
                  </Text>
                </Text>{" "}
              </HStack>
            ))}
          </VStack>
        </HStack>
        {/* Shown on tabs and above */}
        <Grid
          h="600px"
          gridTemplateColumns={{ base: "repeat(6,1fr) " }}
          gap="6"
          alignItems="flex-end"
          display={{ base: "none", md: "grid" }}
        >
          <GridItem display="flex" justifyContent="flex-end" h="full" flexDir="column">
            <VStack alignItems="start" spacing="2" mb="4">
              <Text fontSize="xl" fontWeight="medium" color="brand.grey-10">
                {pageTranslation("shm-fixed-supply-label")}
              </Text>
              <Text as="span" color="brand.orange" fontWeight="xl">
                508M $SHM
              </Text>
            </VStack>
            <Box height="100%" bgColor="brand.grey-90" />
          </GridItem>
          {bars.map((bar) => (
            <GridItem
              display="flex"
              justifyContent="flex-end"
              key={bar.height}
              h="full"
              flexDir={{ base: "row", md: "column" }}
            >
              <VStack alignItems="start" spacing="2" mb="4">
                <Text fontSize="xl" fontWeight="medium" color="brand.grey-10">
                  {bar.height}
                </Text>{" "}
                <Text fontSize="lg" fontWeight="medium" color="brand.grey-30">
                  {commonTranslation(bar.use)}
                </Text>{" "}
                <Text as="span" color="brand.grey-50" display="inline-block" fontSize="base">
                  {bar.totalSHM}M $SHM
                </Text>
              </VStack>
              <Box
                height={bar.height}
                bgColor={bar.bgColor}
                _hover={{ backgroundColor: "brand.orange", transitionDuration: "200ms" }}
              />
            </GridItem>
          ))}
        </Grid>

        <VStack spacing="6" maxW={{ base: "xl", lg: "3xl" }} mx="auto">
          <VStack
            alignItems={{ base: "left", md: "center" }}
            spacing="6"
            mt="20"
            maxWidth="2xl"
            mx="auto"
            w="full"
          >
            <Text fontSize={{ base: "base", md: "xl" }} color="brand.white">
              {commonTranslation("investment-newsletter-title")}
            </Text>
          </VStack>
          <NewsletterInput type="investment" />
        </VStack>
      </Container>
    </Box>
  );
};

export default SHMTokenomics;
