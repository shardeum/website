import {
  Show,
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { CalendarIcon } from "@chakra-ui/icons";

const roadmapList = [
  {
    title: "phase-1-title",
    sections: [
      {
        taskList: ["phase-1-task-list-1", "phase-1-task-list-2", "phase-1-task-list-3"],
        launchItems: [
          "phase-1-launch-item-1",
          "phase-1-launch-item-2",
          "phase-1-launch-item-3",
          "phase-1-launch-item-4",
        ],
      },
    ],
    quarterStartDate: new Date(2017, 1, 1),
    quarterEndDate: new Date(2021, 12, 31),
  },
  {
    title: "phase-2-title",
    sections: [
      {
        description: "phase-2-launch-item-1",
        taskList: ["phase-2-task-list-1"],
      },
      {
        description: "phase-2-launch-item-2",
      },
    ],
    quarterStartDate: new Date(2022, 1, 1),
    quarterEndDate: new Date(2022, 3, 31),
  },
  {
    title: "phase-3-title",
    sections: [
      {
        description: "phase-3-desc",
        taskList: [
          "phase-3-task-list-1",
          "phase-3-task-list-2",
          "phase-3-task-list-3",
          // "phase-3-task-list-4",
          // "phase-3-task-list-5",
          // "phase-3-task-list-6",
          // "phase-3-task-list-7",
          // "phase-3-task-list-8",
          // "phase-3-task-list-9",
        ],
      },
      {
        description: "phase-3-secondary-desc",
      },
    ],
    quarterStartDate: new Date(2022, 4, 1),
    quarterEndDate: new Date(2022, 6, 30),
  },
  {
    title: "phase-4-title",
    sections: [
      {
        description: "phase-4-desc",
        taskList: [
          "phase-4-task-list-1",
          "phase-4-task-list-2",
          "phase-4-task-list-3",
          "phase-4-task-list-4",
          "phase-4-task-list-5",
        ],

        launchItems: [],
      },
      {
        description: "phase-4-secondary-desc",
      },
    ],
    quarterStartDate: new Date(2022, 7, 1),
    quarterEndDate: new Date(2022, 9, 30),
  },
  {
    title: "phase-5-title",
    sections: [
      {
        description: "phase-5-desc",
        taskList: [
          // "phase-5-task-list-1",
          // "phase-5-task-list-2",
          // "phase-5-task-list-3",
          // "phase-5-task-list-4",
          "phase-5-task-list-6",
          "phase-5-task-list-5",
        ],
        launchItems: [],
      },
      // {
      //   description: "phase-5-secondary-desc",
      // },
    ],
    quarterStartDate: new Date(2022, 10, 1),
    quarterEndDate: new Date(2022, 12, 31),
  },
  {
    title: "phase-6-title",
    sections: [
      {
        description: "phase-6-desc",
        taskList: [
          "phase-6-task-list-1",
          "phase-6-task-list-2",
          "phase-6-task-list-3",
          "phase-6-task-list-4",
          "phase-6-task-list-5",
          // "phase-6-task-list-6",
          // "phase-6-task-list-7",
        ],
        launchItems: [],
      },
      // {
      //   description: "phase-5-secondary-desc",
      // },
    ],
    quarterStartDate: new Date(2023, 1, 1),
    quarterEndDate: new Date(2023, 3, 31),
  },
  {
    title: "phase-7-title",
    sections: [
      {
        description: "phase-7-desc",
        taskList: [
          "phase-7-task-list-1",
          "phase-7-task-list-2",
          "Sphinx 1.3",
          // "phase-7-task-list-3",
          // "phase-7-task-list-4",

          // "phase-7-task-list-6",
          // "phase-7-task-list-7",
          // "phase-7-task-list-8",
          // "phase-7-task-list-9",
        ],
        launchItems: [],
      },
      {
        // description: "phase-7-secondary-desc",
      },
    ],
    quarterStartDate: new Date(2023, 4, 1),
    quarterEndDate: new Date(2023, 6, 31),
  },
  {
    title: "Q3 / Q4 2023",
    sections: [
      {
        description: "Betanet Feature Completion",
        // description: "phase-8-desc",
        taskList: [
          "phase-8-task-list-1",
          "phase-8-task-list-2",
          // "phase-8-task-list-3",
          // "Betanet Feature Completion",
          "Patent Filing",
          // "phase-8-task-list-4",
          // "phase-7-task-list-6",
          // "phase-7-task-list-7",
          // "phase-7-task-list-8",
          // "phase-7-task-list-9",
        ],
        launchItems: [],
      },
      {
        description: "phase-8-secondary-desc",
      },
    ],
    quarterStartDate: new Date(2023, 7, 1),
    quarterEndDate: new Date(2023, 9, 31),
  },
  {
    title: "phase-8-title",
    sections: [
      {
        description: "phase-8-desc",
        taskList: [
          // "phase-8-task-list-1",
          // "phase-8-task-list-2",
          // "phase-8-task-list-3",
          // "Feature completion",
          // "Patent Filing",
          "phase-8-task-list-4",
          // "phase-7-task-list-6",
          // "phase-7-task-list-7",
          // "phase-7-task-list-8",
          // "phase-7-task-list-9",
        ],
        launchItems: [],
      },
      {
        description: "phase-8-secondary-desc",
      },
    ],
    quarterStartDate: new Date(2024, 1, 1),
    quarterEndDate: new Date(2024, 3, 31),
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

function RoadmapFull({ heading }: any) {
  const { t: pageTranslation } = useTranslation(["page-home", "common"]);

  return (
    <Flex bg="brand.black" as="section" position="relative" overflow="hidden">
      <Box position="absolute" zIndex={1} display={{ base: "none", lg: "block" }}>
        <Image
          src="/roadmap-bg.png"
          width="500"
          objectFit="cover"
          alt="white paper gradient background"
          height="800"
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
        <VStack spacing="20" alignItems="center" w="full">
          <VStack alignItems="center" spacing="3">
            {/* <Text fontSize="sm" color="brand.orange">
              2022
            </Text> */}
            <h1 style={{ fontSize: "48px" }}>
              {" "}
              <b>{pageTranslation("roadmap")}</b>{" "}
            </h1>
            {/* <Heading size="2xl" color="brand.white" as={heading} alignItems="center">
            {pageTranslation("roadmap")}
            </Heading> */}
          </VStack>
          <VerticalTimeline lineColor="rgba(33, 33, 33, 1)">
            {roadmapList.map((item: any) => {
              const percentage = getQuarterProgressInPercentage(item);
              const additionaLProps = { "data-scroll-to": percentage > 0 && percentage < 100 };
              return (
                <VerticalTimelineElement
                  key={item.title}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "rgba(33, 33, 33, 1)", color: "#fff" }}
                  contentArrowStyle={{ borderRight: "0" }}
                  date={pageTranslation(item.title)}
                  iconStyle={{
                    background: "rgba(33, 33, 33, 1)",
                    color: "#fff",
                    border: "rgba(33, 33, 33, 1)",
                  }}
                  icon={<CalendarIcon />}
                >
                  <VStack alignItems="start" flexWrap="wrap">
                    <Show below="lg">
                      <Text fontSize="xl" color="brand.orange" pr="4" fontWeight="medium" pb="0">
                        {pageTranslation(item.title)}
                      </Text>
                    </Show>

                    {item.sections.map((section: any, index: number) => {
                      return (
                        <VStack key={index} alignItems="start" pt={0}>
                          {section.description ? (
                            <Text fontSize="xl" color="white" pr="4" fontWeight="medium" pb="2">
                              {pageTranslation(section.description)}
                            </Text>
                          ) : null}
                          {section.subTitle ? (
                            <Text fontSize="xl" color="white" pr="4" fontWeight="medium" pb="2">
                              {pageTranslation(section.subTitle)}
                            </Text>
                          ) : null}
                          {section.launchItems?.map((task: string) => (
                            <Text key={task} fontSize="xl" color="brand.white" pr="4" pb="2">
                              {pageTranslation(task)}
                            </Text>
                          ))}
                          {section.taskList?.map((task: string) => (
                            <Text key={task} fontSize="base" color="brand.grey-40" pr="4" pb="2">
                              - {pageTranslation(task)}
                            </Text>
                          ))}
                        </VStack>
                      );
                    })}
                  </VStack>
                  {item.title === "phase-8-title" && (
                    <Button
                      as="a"
                      variant="primary"
                      size="lg"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={"https://shardeum.org/roadmap/mainnet/"}
                    >
                      Detailed Roadmap
                    </Button>
                  )}
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </VStack>
      </Container>
    </Flex>
  );
}

export default RoadmapFull;
