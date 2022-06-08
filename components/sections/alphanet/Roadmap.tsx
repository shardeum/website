import {
  Box,
  Container,
  Flex,
  Heading,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

function Roadmap() {
  const { t: pageTranslation } = useTranslation(["page-alphanet"]);

  const roadmapList = [
    {
      title: pageTranslation("page-alphanet-roadmap-1-title"),
      taskList: [
        {
          version: pageTranslation("page-alphanet-roadmap-1-version-1"),
          tasks: [
            pageTranslation("page-alphanet-roadmap-1-version-1-task-1"),
            pageTranslation("page-alphanet-roadmap-1-version-1-task-2"),
            pageTranslation("page-alphanet-roadmap-1-version-1-task-3"),
            pageTranslation("page-alphanet-roadmap-1-version-1-task-4"),
            pageTranslation("page-alphanet-roadmap-1-version-1-task-5"),
          ],
        },
        {
          version: pageTranslation("page-alphanet-roadmap-1-version-1.1"),
          tasks: [
            pageTranslation("page-alphanet-roadmap-1-version-1.1-task-1"),
            pageTranslation("page-alphanet-roadmap-1-version-1.1-task-2"),
            pageTranslation("page-alphanet-roadmap-1-version-1.1-task-3"),
            pageTranslation("page-alphanet-roadmap-1-version-1.1-task-4"),
          ],
        },
      ],
      active: true,
    },
    {
      title: pageTranslation("page-alphanet-roadmap-2-title"),
      taskList: [
        {
          version: pageTranslation("page-alphanet-roadmap-2-version-2.0"),
          tasks: [
            pageTranslation("page-alphanet-roadmap-2-version-2.0-task-1"),
            pageTranslation("page-alphanet-roadmap-2-version-2.0-task-2"),
            pageTranslation("page-alphanet-roadmap-2-version-2.0-task-3"),
            pageTranslation("page-alphanet-roadmap-2-version-2.0-task-4"),
            pageTranslation("page-alphanet-roadmap-2-version-2.0-task-5"),
          ],
        },
        {
          version: pageTranslation("page-alphanet-roadmap-2-version-2.1"),
          tasks: [
            pageTranslation("page-alphanet-roadmap-2-version-2.1-task-1"),
            pageTranslation("page-alphanet-roadmap-2-version-2.1-task-2"),
            pageTranslation("page-alphanet-roadmap-2-version-2.1-task-3"),
            pageTranslation("page-alphanet-roadmap-2-version-2.1-task-4"),
          ],
        },
        {
          version: pageTranslation("page-alphanet-roadmap-2-version-2.2"),
          tasks: [pageTranslation("page-alphanet-roadmap-2-version-2.2-task-1")],
        },
      ],
    },
  ];

  const titles = roadmapList.map((roadmap) => roadmap.title);
  const activeList = roadmapList.map((roadmap) => roadmap.active);

  return (
    <Flex bg="brand.grey-95" as="section">
      <Container maxW="container.xl" mx="auto" pt="20" pb="32">
        <VStack spacing="20" alignItems="start" w="full">
          <VStack alignItems="start" spacing="3">
            <Text fontSize="sm" color="brand.orange">
              {pageTranslation("page-alphanet-roadmap-subtitle")}
            </Text>
            <Heading size="2xl" color="brand.white">
              {pageTranslation("page-alphanet-roadmap-title")}
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
                  key={index}
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
                    {item.taskList.map((task, index) => (
                      <VStack alignItems="start" key={index}>
                        <Text fontWeight="medium" fontSize="base" color="brand.white" pr="4">
                          {task.version}
                        </Text>
                        <UnorderedList key={task.version} spacing={5} px={5}>
                          {task.tasks.map((task, index) => (
                            <>
                              <ListItem key={index}>
                                <Text fontSize="base" color="brand.grey-40" pr="4">
                                  {task}
                                </Text>
                              </ListItem>
                            </>
                          ))}
                        </UnorderedList>
                      </VStack>
                    ))}
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
