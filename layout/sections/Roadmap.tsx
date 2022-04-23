import { Box, Container, Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react";

const roadmapList = [
  {
    title: "Q1 2022",
    description: "Shardeum Foundation set up in Switzerland ",
    subTitle: "Initial Testing",
    taskList: ["Sharding network testing", "Smart Contract & Node Reward System Testing"],
    active: true,
    months: [1, 2, 3],
  },
  {
    title: "Q2 2022",
    description: "Private Sale",
    subTitle: "Alphanet",
    taskList: [
      "Send Transaction. Deploy Smart Contracts",
      "30 node unsharded network operated by Shardeum",
      "20 validator nodes and 10 standby nodes",
      "5 archive nodes",
      "Node rotation between standby and validator nodes",
    ],
    months: [4, 5, 6],
  },
  {
    title: "Q3 2022",
    description: "Betanet",
    taskList: [
      "Community can operate standby/validator/archive nodes. Aiming for 200 TPS",
      "250 minimum node sharded network. Shard size of 50 nodes",
      "Supports no-EIP 2930 transactions. 10 archive nodes",
      "12280 minimum node sharded network. Shard size of 128 nodes",
    ],
    months: [7, 8, 9],
  },
  {
    title: "Q4 2022",
    description: "",
    taskList: ["Main-net launch", "SHM token issue/TGE", "Public Sale"],
    months: [10, 11, 12],
  },
];

/**
 *
 * @param quarterMonths Current quarter months
 * @returns Total days that has passed in the quarter as percentage
 */

const getQuarterProgressInPercentage = (quarterMonths: number[]) => {
  const totalMonthsInQuarter = quarterMonths.length;
  const currentMonth = new Date().getMonth() + 1; // Adding 1 because getMonth() returns month from 0 and we have taken month from 1

  // If the last month of the quarter is less than the current month then we know that the quarter has passed
  const hasQuarterPassed = quarterMonths[totalMonthsInQuarter - 1] < currentMonth;
  let percentage = 0;
  if (hasQuarterPassed) {
    percentage = 100;
  } else if (!hasQuarterPassed && quarterMonths.includes(currentMonth)) {
    const monthIndex = quarterMonths.findIndex((month) => month === currentMonth);
    const passedMonths = quarterMonths.slice(0, monthIndex + 1);
    const totalDaysInQuarter = quarterMonths.reduce((acc) => acc + 31, 0); // Assuming that every month has 31 days. Don't want to over complicate this
    const totalDaysPassed = passedMonths.reduce((acc, currMonth) => {
      if (currMonth === currentMonth) {
        return acc + new Date().getDate();
      } else if (currMonth < currentMonth) {
        return acc + 31;
      }
      return acc;
    }, 0);
    percentage = (totalDaysPassed / totalDaysInQuarter) * 100;
  }
  return percentage;
};

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
          <Grid
            templateColumns={{
              base: "repeat(auto-fill, minmax(270, 1fr))",
              md: "repeat(auto-fill, minmax(340px, 1fr))",
              lg: "repeat(auto-fill, 1fr)",
            }}
            w="full"
            overflowX="scroll"
            gridAutoFlow="column"
            gridAutoColumns={{
              base: "minmax(290px, 1fr)",
            }}
          >
            {roadmapList.map((item) => {
              const percentage = getQuarterProgressInPercentage(item.months);
              return (
                <VStack key={item.title} alignItems="start" spacing="8">
                  <VStack alignItems="start" spacing="4" w="full">
                    <Text
                      fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                      color="brand.white"
                      fontWeight="medium"
                    >
                      {item.title}
                    </Text>
                    <Box h="0.5" w="100%" bg={"brand.grey-80"} position="relative" mt="6">
                      <Box
                        position="absolute"
                        top="0"
                        left="0"
                        height="100%"
                        bg="brand.orange"
                        width={`${percentage}%`}
                      />
                    </Box>
                  </VStack>
                  <VStack spacing="10" alignItems="start" flexWrap="wrap">
                    <VStack alignItems="start" spacing="6">
                      <Text fontSize="xl" color="white" pr="4" fontWeight="medium">
                        {item.description}
                      </Text>
                      {item.subTitle ? (
                        <Text fontSize="xl" color="white" pr="4" fontWeight="medium">
                          {item.subTitle}
                        </Text>
                      ) : null}
                      {item.taskList.map((task) => (
                        <Text key={task} fontSize="base" color="brand.grey-40" pr="4">
                          - {task}
                        </Text>
                      ))}
                    </VStack>
                  </VStack>
                </VStack>
              );
            })}
          </Grid>
        </VStack>
      </Container>
    </Flex>
  );
}

export default Roadmap;
