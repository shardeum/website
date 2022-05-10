import { Box, Container, Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

const roadmapList = [
  {
    title: "2017 - 2021",
    sections: [
      {
        taskList: ["100 nodes = 500 TPS", "200 nodes = 1000 TPS", "1000 nodes = 5000 TPS"],
        launchItems: [
          "Consensus algorithm defined and tested",
          "Auto scaling and rate limiting an unhardened network of 20 nodes",
          "Linear scaling (small sharded nodes)",
          "Small / Medium AWS network",
        ],
      },
    ],
    quarterStartDate: new Date(2017, 1, 1),
    quarterEndDate: new Date(2021, 12, 31),
  },
  {
    title: "Q1 2022",
    sections: [
      {
        taskList: ["Sharding network testing", "Smart contract & node reward system testing"],
        launchItems: ["Initial Testing", "Shardeum Foundation structured in Switzerland"],
      },
    ],
    quarterStartDate: new Date(2022, 1, 1),
    quarterEndDate: new Date(2022, 3, 31),
  },
  {
    title: "Q2 2022",
    sections: [
      {
        description: "Alphanet launch",
        taskList: [
          "Send transactions and deploy smart contracts",
          "50 node network operated by Shardeum",
          "10 node shard size",
          "5 archive nodes",
          "Deployed to individual medium nodes on AWS in different regions",
        ],
      },
      {
        description: "Private sale",
      },
    ],
    quarterStartDate: new Date(2022, 4, 1),
    quarterEndDate: new Date(2022, 6, 30),
  },
  {
    title: "Q3 2022",
    sections: [
      {
        description: "Betanet launch",
        taskList: [
          "Community can operate validator and archive nodes",
          "Minimum network size of 1280 nodes with 200 TPS",
          "Sharded with shard size of 128 nodes",
          "Node rotation from standby to validation",
        ],
        launchItems: [],
      },
    ],
    quarterStartDate: new Date(2022, 7, 1),
    quarterEndDate: new Date(2022, 9, 30),
  },
  {
    title: "Q4 2022",
    sections: [
      {
        description: "Mainnet launch",
        taskList: ["SHM Token Generation"],
        launchItems: [],
      },
      {
        description: "Public sales",
      },
    ],
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
        gridContainerRef.current.scrollLeft = element?.offsetLeft - 36; // Subtracted this offset of 36px to account for additional padding in the roadmap while scrolling it to the active section.
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
            {roadmapList.map((item: any) => {
              const percentage = getQuarterProgressInPercentage(item);
              const additionaLProps = { "data-scroll-to": percentage > 0 && percentage < 100 };
              return (
                <VStack key={item.title} alignItems="start" {...additionaLProps}>
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
                  <VStack alignItems="start" flexWrap="wrap">
                    {item.sections.map((section: any, index: number) => {
                      return (
                        <VStack key={index} alignItems="start" pt={6}>
                          {section.description ? (
                            <Text fontSize="xl" color="white" pr="4" fontWeight="medium" pb="2">
                              {section.description}
                            </Text>
                          ) : null}
                          {section.subTitle ? (
                            <Text fontSize="xl" color="white" pr="4" fontWeight="medium" pb="2">
                              {section.subTitle}
                            </Text>
                          ) : null}
                          {section.launchItems?.map((task: string) => (
                            <Text key={task} fontSize="base" color="brand.white" pr="4" pb="2">
                              {task}
                            </Text>
                          ))}
                          {section.taskList?.map((task: string) => (
                            <Text key={task} fontSize="base" color="brand.grey-40" pr="4" pb="2">
                              - {task}
                            </Text>
                          ))}
                        </VStack>
                      );
                    })}
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
