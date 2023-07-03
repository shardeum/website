import { AspectRatio, Box, Container, Flex, Grid, VStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import SectionHeading from "../../common/SectionHeading";
import FeatureWhite from "./FeatureWhite";

const featureList = [
  {
    titleKey: "shm-feature-7-title",
    descriptionKey: "shm-feature-7-desc",
    iconPath: "SetupShardeumTestnet.png",
    link: "https://docs.shardeum.org/wallets/metamask/add-shardeum-network",
  },
  {
    titleKey: "shm-feature-8-title",
    descriptionKey: "shm-feature-8-desc",
    iconPath: "DeployYourDApp.png",
    link: "https://docs.shardeum.org/smart-contracts/deploy/remix",
  },
  {
    titleKey: "shm-feature-9-title",
    descriptionKey: "shm-feature-9-desc",
    iconPath: "RunaValidator.png",
    link: "https://docs.shardeum.org/node/run/validator",
  },
  {
    titleKey: "shm-feature-10-title",
    descriptionKey: "shm-feature-10-desc",
    iconPath: "ShardeumExplorer.png",
    link: "https://docs.shardeum.org/network/explorer",
  },
];

const FeatureCard = ({
  title,
  description,
  icon,
  link,
}: {
  title: string;
  description: string;
  icon: string;
  link: string;
}) => (
  <VStack
    bg="brand.grey-10"
    px="12"
    pt="12"
    pb="12"
    maxW="3xl"
    alignItems="flex-start"
    spacing="10"
    className="vstackForDevPoint"
    style={{ cursor: "pointer" }}
    onClick={() => window.open(link)}
  >
    <AspectRatio ratio={1} maxWidth={{ base: "50px", lg: "80px" }} w={{ base: "50px", lg: "80px" }}>
      <Image src={`/${icon}`} alt={`${icon}`} layout="fill" objectFit="contain" />
    </AspectRatio>
    <FeatureWhite
      title={title}
      titleSize={{ base: "2xl" }}
      titleFontWeight="semibold"
      description={description}
      descriptionSize={"md"}
      link={link}
      descriptionColor={"brand.grey-80"}
    />
  </VStack>
);

function Features() {
  const { t: pageTranslation } = useTranslation("page-home");

  return (
    <Flex bg="white">
      <Container
        maxW="container.xl"
        mx="auto"
        py={{ base: "12", md: "16", lg: "20" }}
        px={{ base: "6", xl: 0 }}
      >
        {/* <Box mb="12">
          <SectionHeading color="brand.black">
            <h2>{"Features"}</h2>
          </SectionHeading>
        </Box> */}
        <Box mb="12">
          <SectionHeading color="black">
            <h2>
              {/* <span style={{ color: "#ec5c28" }}>{`Develop`}</span> */}
              {"Building on Shardeum is Easy"}
            </h2>
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
              link={feature["link"]}
              description={pageTranslation(feature["descriptionKey"])}
            />
          ))}
        </Grid>
      </Container>
    </Flex>
  );
}

export default Features;
