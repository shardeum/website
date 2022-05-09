import { Box, Container, Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

const roadmapList = [
  {
    title: "Q4 2017",
    description: "Consensus algorithm defined & tested",
    subTitle: "",
    taskList: [],
    launchItems: [],
    quarterStartDate: new Date(2017, 10, 1),
    quarterEndDate: new Date(2017, 12, 31),
  },
  {
    title: "Q2 2018",
    description: "Project launch (Shardus)",
    subTitle: "",
    taskList: [],
    launchItems: [],
    quarterStartDate: new Date(2018, 4, 1),
    quarterEndDate: new Date(2018, 6, 30),
  },
  {
    title: "Q1 2019",
    description: "Auto scaling & rate limiting an unhardened network of 20 nodes",
    subTitle: "",
    taskList: [],
    launchItems: [],
    quarterStartDate: new Date(2019, 1, 1),
    quarterEndDate: new Date(2019, 3, 31),
  },
  {
    title: "Q3 2019",
    description: "Linear scaling (small sharded nodes)",
    taskList: ["10 nodes = 100 TPS", "40 nodes = 400 TPS"],
    launchItems: [],
    subTitle: "",
    quarterStartDate: new Date(2019, 7, 1),
    quarterEndDate: new Date(2019, 9, 30),
  },
  {
    title: "Q4 2020",
    description: "Small AWS network",
    taskList: ["20 nodes = 100 TPS", "200 nodes = 1000 TPS"],
    launchItems: [],
    subTitle: "",
    quarterStartDate: new Date(2020, 10, 1),
    quarterEndDate: new Date(2020, 12, 31),
  },
  {
    title: "Q3 2021",
    description: "Medium AWS network",
    taskList: ["100 nodes = 500 TPS", "1000 nodes = 5000 TPS"],
    launchItems: [],
    subTitle: "",
    quarterStartDate: new Date(2021, 7, 1),
    quarterEndDate: new Date(2021, 9, 30),
  },
  {
    title: "Q1 2022",
    description: "Shardeum Foundation structured in Switzerland",
    taskList: [
      "Initial Testing",
      "Sharding network testing",
      "Smart contract & node reward system testing",
    ],
    launchItems: [],
    subTitle: "",
    active: true,
    quarterStartDate: new Date(2022, 1, 1),
    quarterEndDate: new Date(2022, 3, 31),
  },
  {
    title: "Q2 2022",
    description: "Private sale",
    taskList: [
      "Alphanet launch",
      "Send transactions and deploy smart contracts",
      "50 node network operated by Shardeum",
      "10 node shard size",
      "5 archive nodes",
      "Deployed to individual medium nodes on AWS in different regions",
    ],
    launchItems: [],
    subTitle: "",
    quarterStartDate: new Date(2022, 4, 1),
    quarterEndDate: new Date(2022, 6, 30),
  },
  {
    title: "Q3 2022",
    description: "Betanet launch",
    taskList: [
      "Community can operate validator and archive nodes",
      "Minimum network size of 1280 nodes with 200 TPS",
      "Sharded with shard size of 128 nodes",
      "Node rotation from standby to validation",
    ],
    launchItems: [],
    subTitle: "",
    quarterStartDate: new Date(2022, 7, 1),
    quarterEndDate: new Date(2022, 9, 30),
  },
  {
    title: "Q4 2022",
    description: "Mainnet launch",
    taskList: ["SHM Token Generation", "Public Sales"],
    launchItems: [],
    subTitle: "",
    quarterStartDate: new Date(2022, 10, 1),
    quarterEndDate: new Date(2022, 12, 31),
  },
];

/**
 *
 * @param quarter Current quarter
 * @returns Total days that has passed in the quarter as percentage
 */

const getQuarterProgressInPercentage = (quarter: typeof roadmapList[0]) => {
  //1: Get the current date as a reference to understand which quarter we are in right now as per calendar.
  const currentTime = new Date().getTime();

  //2: Fetch the time of quarter start and end dates:
  const quarterStartTime = quarter.quarterStartDate.getTime();
  const quarterEndTime = quarter.quarterEndDate.getTime();

  //3: Compare the current date with the end date of the quarter to check if it has already passed.
  if (currentTime > quarterEndTime) {
    return 100;
  }
  //4: If not, then check if the quarter is in the future by check the start date of the quarter with current date.
  else if (currentTime < quarterStartTime) {
    return 0;
  }
  //5: If not, it means that the the quarter is currently active, so we calculate the exact time elapsed in the current quarter.
  else {
    //a: Calculate the time Duration of full quarter between the start and end dates of the quarter.
    const totalTimeInQuarter = quarterEndTime - quarterStartTime;
    //b: Calculate the time duration elapsed between the start date and the current time.
    const elapsedTime = currentTime - quarterStartTime;
    //c: Calculate and return the percentage of elapsed time with respect to total time in the current quarter.
    return (elapsedTime / totalTimeInQuarter) * 100;
  }
};

function Roadmap() {
  const gridContainerRef = useRef<any>();
  useEffect(() => {
    // Scroll to the exact quarter which is currently active
    setTimeout(() => {
      const element: any = Array.from(gridContainerRef.current.childNodes)?.find(
        (node: any) => node.attributes["data-scroll-to"]?.value === "true"
      );
      if (element) {
        gridContainerRef.current.scrollLeft = element?.offsetLeft;
      }
    }, 1);
  }, []);

  return (
    <Flex bg="brand.black" as="section" position="relative" overflow="hidden">
      <Box position="absolute" zIndex={1} display={{ base: "none", lg: "block" }}>
        <Image
          src="/roadmap-bg.png"
          width="500px"
          objectFit="cover"
          alt="white paper gradient background"
          height="800px"
        />
      </Box>
      <Container
        maxW="container.xl"
        mx="auto"
        pt="20"
        pb="32"
        position="relative"
        zIndex={2}
        px={{ base: 6, xl: 0 }}
      >
        <VStack spacing="20" alignItems="start" w="full">
          <VStack alignItems="start" spacing="3">
            {/* <Text fontSize="sm" color="brand.orange">
              2022
            </Text> */}
            <Heading size="2xl" color="brand.white" as="h3">
              Roadmap
            </Heading>
          </VStack>
          <Grid
            ref={gridContainerRef}
            templateColumns={{
              base: "repeat(auto-fill, minmax(270, 1fr))",
              md: "repeat(auto-fill, minmax(340px, 1fr))",
              lg: "repeat(auto-fill, 1fr)",
            }}
            w="full"
            overflowX="scroll"
            className="no-scrollbar"
            gridAutoFlow="column"
            gridAutoColumns={{
              base: "minmax(290px, 1fr)",
            }}
          >
            {roadmapList.map((item) => {
              const percentage = getQuarterProgressInPercentage(item);
              const additionaLProps = { "data-scroll-to": percentage > 0 && percentage < 100 };
              return (
                <VStack key={item.title} alignItems="start" spacing="8" {...additionaLProps}>
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
                      {item?.launchItems?.map((task) => (
                        <Text key={task} fontSize="base" color="brand.white" pr="4">
                          {task}
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
