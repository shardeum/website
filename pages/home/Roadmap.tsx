import { Box, Container, Flex, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const roadmapList = [
  {
    title: "Q1 2020",
    description: "Shardeum Foundation set up in Switzerland ",
    subTitle: "Initial Testing",
    taskList: ["Sharding network testing", "Smart Contract & Node Reward System Testing"],
    active: true,
  },
  {
    title: "Q2 2020",
    description: "Private Sale",
    subTitle: "Alphanet",
    taskList: [
      "Send Transaction. Deploy Smart Contracts",
      "30 node unsharded network operated by Shardeum",
      "20 validator nodes and 10 standby nodes",
      "5 archive nodes",
      "Node rotation between standby and validator nodes",
    ],
  },
  {
    title: "Q3 2020",
    description: "Betanet",
    taskList: [
      "Community can operate standby/validator/archive nodes. Aiming for 200 TPS",
      "250 minimum node sharded network. Shard size of 50 nodes",
      "Supports no-EIP 2930 transactions. 10 archive nodes",
      "12280 minimum node sharded network. Shard size of 128 nodes",
    ],
  },
];

const titles = roadmapList.map((roadmap) => roadmap.title).concat("Q4 2022");
const activeList = roadmapList.map((roadmap) => roadmap.active).concat(false);
const launchItems = ["Main-net launch", "SHM token issue/TGE", "Public Sale"];

function Roadmap() {
  return (
    <Flex bg="brand.grey-95" as="section">
      <Container maxW="container.xl" mx="auto" pt="20" pb="32">
        <VStack spacing="20" alignItems="start" w="full">
          <VStack alignItems="start" spacing="3">
            <Text fontSize="sm" color="brand.orange">
              2022
            </Text>
            <Heading size="2xl" color="brand.white">
              Roadmap
            </Heading>
          </VStack>
          <VStack alignItems="start" spacing="6" w="100%">
            <SimpleGrid columns={[2, 2, 4]} w="full" gap="4">
              {titles.map((item) => {
                return (
                  <VStack spacing="10" key={item} alignItems="start" flexWrap="wrap">
                    <Text fontSize="2xl" color="brand.white" fontWeight="medium">
                      {item}
                    </Text>
                  </VStack>
                );
              })}
            </SimpleGrid>
            <SimpleGrid columns={[2, 2, 4]} w="full">
              {activeList.map((isActive, index) => (
                <Box
                  key={index}
                  h="0.5"
                  w="100%"
                  bg={isActive ? "brand.orange" : "brand.grey-80"}
                  mt="6"
                ></Box>
              ))}
            </SimpleGrid>
          </VStack>
          <SimpleGrid columns={[2, 2, 4]} w="full" gap="4">
            {roadmapList.map((item) => {
              return (
                <VStack spacing="10" key={item.title} alignItems="start" flexWrap="wrap">
                  <VStack alignItems="start" spacing="6">
                    <Text fontSize="xl" color="white" pr="4" fontWeight="medium">
                      {item.description}
                    </Text>
                    {item.subTitle ? (
                      <Text fontSize="xl" color="white" pr="4" fontWeight="medium">
                        {item.subTitle}
                      </Text>
                    ) : null}
                    {item.taskList.map((task, index) => (
                      <Text key={index} fontSize="base" color="brand.grey-40" pr="4">
                        - {task}
                      </Text>
                    ))}
                  </VStack>
                </VStack>
              );
            })}
            <VStack alignItems="start" spacing="6">
              {launchItems.map((item, index) => {
                return (
                  <Text key={index} fontSize="xl" color="white" pr="4" fontWeight="medium">
                    {item}
                  </Text>
                );
              })}
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>
    </Flex>
  );
}

export default Roadmap;
