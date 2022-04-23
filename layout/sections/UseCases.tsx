import Image from "next/image";
import { Box, Container, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { IconDApps, IconNFTs, IconP2P_Transfer, IconWeb3 } from "@shm/Icons";
import SectionHeading from "../../components/common/SectionHeading";

const UseCaseItem = ({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: any;
}) => {
  return (
    <VStack alignItems="start">
      <VStack spacing="5" alignItems="start">
        <Icon />{" "}
        <Text fontSize="3xl" color="brand.black" fontWeight="bold">
          {title}
        </Text>
      </VStack>
      <Text fontSize="xl" color="brand.grey-70" fontWeight="medium" maxW="xl">
        {description}
      </Text>
    </VStack>
  );
};

const useCases = [
  {
    title: "DeFi",
    description:
      "The current DeFi landscape is bottlenecked by high gas fees and low throughput. Shardeum provides a platform for scalable DeFi infrastructure with very low gas costs making it affordable to businesses and individuals",
    Icon: IconNFTs,
  },

  {
    title: "DApps",
    description:
      "Shardeum is EVM compatible. Developers can seamlessly build and deploy complex smart contract platforms like DeFi and Web3 applications. Any EVM DApp can easily be ported over to Shardeum to be instantly scalable.",
    Icon: IconDApps,
  },
  {
    title: "NFTs",
    description:
      "NFTs, assets that represent ownership of digitally unique items, have multitudes of applications ranging from real estate, digital certificates, and IP rights to digital identities. NFTs on Shardeum will be fast, interoperable and user friendly",
    Icon: IconNFTs,
  },
  {
    title: "Web 3.0",
    description:
      "Web 3.0 or the Internet of Value is the next iteration of the Internet. Shardeum aims to accelerate the transition to Web 3.0 by providing an integrated, interoperable, and permissionless network to build SocialFi, GameFi applications",
    Icon: IconWeb3,
  },
];

const UseCases = () => {
  return (
    <Flex bg="brand.white" as="section">
      <Container maxW="container.xl" mx="auto" pt="32" pb="32">
        <VStack spacing="20" alignItems="start" w="full" pb="16">
          <SimpleGrid columns={[1, 2]} justifyContent="space-between" w="full">
            <VStack alignItems="start" spacing="20">
              <SectionHeading color="brand.grey-90">Use Cases</SectionHeading>
              <UseCaseItem
                Icon={IconP2P_Transfer}
                title="P2P Transfers"
                description={`Shardeum is EVM compatible decentralized network that will accommodate
        billions of daily users and DApps on a global scale achieved through
        dynamic state sharding`}
              />
            </VStack>
            <Image
              objectFit="contain"
              src="/useCase.png"
              alt="Shardeum Use Case Illustrations"
              width="490px"
              height="328px"
            />
          </SimpleGrid>
        </VStack>
        <SimpleGrid columns={[1, 2]}>
          {useCases.map((useCase) => (
            <Box py="16" borderTop="1px" borderColor="brand.grey-30" key={useCase.title}>
              <UseCaseItem
                Icon={useCase.Icon}
                title={useCase.title}
                description={useCase.description}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default UseCases;
