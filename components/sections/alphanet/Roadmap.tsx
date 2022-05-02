import { Box, Container, Flex, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react";

const roadmapList = [
  {
    title: "Phase 1",
    taskList: [
      "Send Transactions",
      "Deploy Smart Contracts",
      <>
        30 node unsharded network operated by Shardeum.
        <br /> 20 validator nodes, 10 standby nodes and 5 archive nodes
      </>,
      "Rotation of Standby and Validator Nodes",
      "Faucet to Distribute SHM",
    ],
    active: true,
  },
  {
    title: "Phase 2",
    taskList: [
      <>
        120 node sharded network operated by Shardeum.
        <br /> 100 validator nodes and 20 standby nodes. 5 archive nodes.
      </>,
      <>
        Shard size of 20 nodes.
        <br /> Only support EIP2930 transactions
      </>,
    ],
  },
];

const titles = roadmapList.map((roadmap) => roadmap.title);
const activeList = roadmapList.map((roadmap) => roadmap.active);

function Roadmap() {
  return (
    <Flex bg="brand.grey-95" as="section">
      <Container maxW="container.xl" mx="auto" pt="20" pb="32">
        <VStack spacing="20" alignItems="start" w="full">
          <VStack alignItems="start" spacing="3">
            <Text fontSize="sm" color="brand.orange">
              Q2 2022
            </Text>
            <Heading size="2xl" color="brand.white">
              Product Roadmap of Shardeum Liberty (Alphanet)
            </Heading>
          </VStack>
          <VStack alignItems="start" spacing="6" w="full">
            <SimpleGrid columns={[2, 2]} w="full" gap="4">
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
            <SimpleGrid columns={[2, 2]} w="full">
              {activeList.map((isActive, index) => (
                <Box
                  key={"roadmap" + index}
                  h="0.5"
                  w="100%"
                  bg={isActive ? "brand.orange" : "brand.grey-80"}
                  mt="6"
                ></Box>
              ))}
            </SimpleGrid>
          </VStack>
          <SimpleGrid columns={[2, 2]} w="full" gap="4">
            {roadmapList.map((item) => {
              return (
                <VStack spacing="10" key={item.title} alignItems="start" flexWrap="wrap">
                  <VStack alignItems="start" spacing="6">
                    <UnorderedList spacing={5} px={5}>
                      {item.taskList.map((task, index) => (
                        <ListItem key={"task-" + index}>
                          <Text fontSize="base" color="brand.grey-40" pr="4">
                            {task}
                          </Text>
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </VStack>
                </VStack>
              );
            })}
          </SimpleGrid>
        </VStack>
      </Container>
    </Flex>
  );
}

export default Roadmap;
