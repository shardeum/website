import { AspectRatio, Box, Container, Flex, Grid, VStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Feature from "./Feature";
import SectionHeading from "../../common/SectionHeading";

const featureList = [
  {
    titleKey: "shm-feature-11-title",
    descriptionKey: "shm-feature-11-desc",
    iconPath: "decentralized.png",
  },
  {
    titleKey: "shm-feature-12-title",
    descriptionKey: "shm-feature-12-desc",
    iconPath: "Instanttransactionfinality.png",
  },
  {
    titleKey: "shm-feature-13-title",
    descriptionKey: "shm-feature-13-desc",
    iconPath: "SecureTrustless.png",
  },
  {
    titleKey: "shm-feature-14-title",
    descriptionKey: "shm-feature-14-desc",
    iconPath: "linearScale.png",
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
  <VStack bg="#1E1E1E" px="8" pt="8" pb="12" maxW="3xl" alignItems="flex-start" spacing="10">
    <AspectRatio ratio={1} maxWidth={{ base: "50px", lg: "80px" }} w={{ base: "50px", lg: "80px" }}>
      <Image src={`/${icon}`} alt={`${icon}`} layout="fill" objectFit="contain" />
    </AspectRatio>
    <Feature
      title={title}
      titleSize={{ base: "2xl" }}
      titleFontWeight="semibold"
      description={description}
      descriptionSize={"md"}
      descriptionColor="brand.grey-80"
    />
  </VStack>
);

function Features() {
  const { t: pageTranslation } = useTranslation("page-home");

  return (
    <Flex>
      <div className="baseContainer2" />
      <Container
        maxW="container.xl"
        mx="auto"
        py={{ base: "12", md: "16", lg: "32" }}
        px={{ base: "6", xl: 0 }}
        style={{ zIndex: "1" }}
      >
        <Box mb="12">
          <SectionHeading color="brand.white">
            <h2>{"Why You Should Build on Shardeum"}</h2>
          </SectionHeading>
        </Box>
        <Grid
          templateColumns={{
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap="16"
          overflowX="scroll"
          // gridAutoColumns={{
          //   base: "minmax(290px, 1fr)",
          // }}
          className="no-scrollbar"
        >
          {featureList?.map((feature) => (
            <FeatureCard
              key={feature["titleKey"]}
              title={pageTranslation(feature["titleKey"])}
              icon={feature["iconPath"]}
              description={pageTranslation(feature["descriptionKey"])}
            />
          ))}
        </Grid>
      </Container>
    </Flex>
  );
}

export default Features;
