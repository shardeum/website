import { AspectRatio, Box, Container, Flex, Grid, VStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Feature from "../../common/Feature";
import SectionHeading from "../../common/SectionHeading";

const featureList = [
  {
    titleKey: "shm-feature-1-title",
    descriptionKey: "shm-feature-1-desc",
    iconPath: "decentralized.png",
  },
  {
    titleKey: "shm-feature-2-title",
    descriptionKey: "shm-feature-2-desc",
    iconPath: "linearScale.png",
  },
  {
    titleKey: "shm-feature-3-title",
    descriptionKey: "shm-feature-3-desc",
    iconPath: "operateNode.png",
  },
  {
    titleKey: "shm-feature-4-title",
    descriptionKey: "shm-feature-4-desc",
    iconPath: "clockIcon.png",
  },
  {
    titleKey: "shm-feature-5-title",
    descriptionKey: "shm-feature-5-desc",
    iconPath: "securityIcon.png",
  },
  {
    titleKey: "shm-feature-6-title",
    descriptionKey: "shm-feature-6-desc",
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
  const { t: pageTranslation } = useTranslation("page-home");

  return (
    <Flex bg="white">
      <Container
        maxW="container.xl"
        mx="auto"
        py={{ base: "12", md: "16", lg: "32" }}
        px={{ base: "6", xl: 0 }}
      >
        <Box mb="12">
          <SectionHeading color="brand.black">
            {pageTranslation("page-home-shardeum-home-title")}
          </SectionHeading>
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
              key={feature.titleKey}
              title={pageTranslation(feature.titleKey)}
              icon={feature.iconPath}
              description={pageTranslation(feature.descriptionKey)}
            />
          ))}
        </Grid>
      </Container>
    </Flex>
  );
}

export default MoreAboutShardeum;
