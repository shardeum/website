import { Box, Container, Flex, Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import { getPercentage } from "@shm/utils";
import SectionHeading from "components/common/SectionHeading";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import NewsletterInput from "../../common/NewsletterInput";

const bars = [
  {
    bgColor: "brand.blue-70",
    height: "51%",
    totalSHM: getPercentage(51),
    use: "node-mining",
    width: "50px",
    borderRadius: "50px",
    mobileWidth: "21vh",
  },
  {
    bgColor: "brand.blue-50",
    height: "18%",
    totalSHM: getPercentage(18),
    use: "sale",
    width: "50px",
    borderRadius: "50px",
    mobileWidth: "15vh",
  },
  {
    bgColor: "brand.blue-40",
    height: "15%",
    totalSHM: getPercentage(15),
    use: "team",
    width: "50px",
    borderRadius: "50px",
    mobileWidth: "10vh",
  },
  {
    bgColor: "brand.blue-25",
    height: "11%",
    totalSHM: getPercentage(11),
    use: "foundation",
    width: "50px",
    borderRadius: "50px",
    mobileWidth: "6vh",
  },
  {
    bgColor: "brand.blue-20",
    height: "5%",
    totalSHM: getPercentage(5),
    use: "ecosystem-airdrops",
    width: "50px",
    borderRadius: "50px",
    mobileWidth: "3vh",
  },
];

const SHMTokenomics = () => {
  const { t: pageTranslation } = useTranslation("page-home");
  const { t: commonTranslation } = useTranslation("common");

  return (
    <Box position="relative" overflow="hidden" bg="brand.white">
      <Box
        position="absolute"
        right="-20%"
        top="-25%"
        zIndex={1}
        display={{ base: "none", lg: "block" }}
      >
        {/* <Image
          src="/tokenomic-bg.png"
          width="700px"
          objectFit="cover"
          alt="Nischal Image"
          height="800px"
        /> */}
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
          <SectionHeading color="brand.black">
            <h2>{pageTranslation("shm-tokenomics")}</h2>
          </SectionHeading>
        </Box>
        {/* <HStack alignItems="start" spacing="2" mb="4" display={{ base: "flex", md: "none" }}>
          <Text fontSize="base" fontWeight="medium" color="white">
            {pageTranslation("shm-fixed-supply-label")}{" "}
            <Text as="span" color="brand.orange" fontWeight="base">
              508M $SHM
            </Text>
          </Text>
        </HStack> */}
        {/* Shown on mobile devices */}
        {/* <Flex
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
            </Flex> */}
        <HStack
          className="MoboleViewGraph"
          h="400px"
          display={{ base: "flex", md: "none", flexDirection: "row" }}
        >
          <VStack h="full" spacing="3" alignItems="start">
            <div>
              <Text fontSize="base" color="#757575" fontWeight="medium" textAlign="left">
                {pageTranslation("shm-fixed-supply-label")}{" "}
              </Text>
              <Text as="span" color="brand.orange" fontSize="22px" fontWeight="base">
                508M $SHM
              </Text>
              <Box
                height={"20px"}
                bgColor={"brand.blue-100"}
                width={"40vh"}
                borderRadius={"50px"}
              />
            </div>

            {bars.map((bar) => (
              <div key={bar.use}>
                <Text fontSize="base" fontWeight="medium">
                  <p style={{ color: "black" }}>{bar.height}</p>
                  <Text as="span" color="brand.grey-50" fontSize="">
                    {commonTranslation(bar.use)}
                  </Text>
                </Text>
                <Box
                  height={"20px"}
                  bgColor={bar.bgColor}
                  width={bar.mobileWidth}
                  borderRadius={bar.borderRadius}
                />
              </div>
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
              <Text fontSize="xl" fontWeight="medium" color="brand.black">
                {pageTranslation("shm-fixed-supply-label")}
              </Text>
              <Text
                as="span"
                color="brand.orange"
                style={{ fontSize: "25px", fontWeight: 400 }}
                fontWeight="xl"
              >
                508M $SHM
              </Text>
            </VStack>
            <Box height="100%" className="baseGraph" bgColor="brand.blue-100" />
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
                <Text fontSize="xl" fontWeight="medium" color="brand.grey-80">
                  {bar.height}
                </Text>{" "}
                <Text fontSize="lg" fontWeight="medium" color="brand.grey-80">
                  {commonTranslation(bar.use)}
                </Text>{" "}
                {/* <Text as="span" color="brand.grey-70" display="inline-block" fontSize="base">
                  {bar.totalSHM}M $SHM
                </Text> */}
              </VStack>
              <Box
                height={bar.height}
                bgColor={bar.bgColor}
                width={bar.width}
                borderRadius={bar.borderRadius}
                _hover={{ backgroundColor: "brand.blue-90", transitionDuration: "200ms" }}
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
            <Text fontSize={{ base: "base", md: "xl" }} color="brand.black">
              {commonTranslation("investment-newsletter-title")}
            </Text>
          </VStack>

          <NewsletterInput type="newsletterHero" />
        </VStack>
      </Container>
    </Box>
  );
};

export default SHMTokenomics;
