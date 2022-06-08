import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  VStack,
  Text,
  ListItem,
  OrderedList,
  Button,
} from "@chakra-ui/react";
import SectionHeading from "../../components/common/SectionHeading";
import { useTranslation } from "next-i18next";
import ReactMarkdown from "react-markdown";

const WhatCanYoDo = () => {
  const { t: pageTranslation } = useTranslation(["page-alphanet"]);
  const youCanDoList = [
    {
      for: pageTranslation("page-alphanet-liberty-for-community"),
      points: [
        pageTranslation("page-alphanet-liberty-for-community-do-1"),
        pageTranslation("page-alphanet-liberty-for-community-do-2"),
        pageTranslation("page-alphanet-liberty-for-community-do-3"),
      ],
      bg: "#FCF4E9",
      cta: {
        text: pageTranslation("page-alphanet-liberty-for-community-cta-text"),
        link: pageTranslation("page-alphanet-liberty-for-community-cta-link"),
        variant: "primary",
      },
    },
    {
      for: pageTranslation("page-alphanet-liberty-for-developers"),
      points: [
        pageTranslation("page-alphanet-liberty-for-developers-do-1"),
        pageTranslation("page-alphanet-liberty-for-developers-do-2"),
        pageTranslation("page-alphanet-liberty-for-developers-do-3"),
      ],
      bg: "#E9EAFC",
      cta: {
        text: pageTranslation("page-alphanet-liberty-for-developers-cta-text"),
        link: pageTranslation("page-alphanet-liberty-for-developers-cta-link"),
        variant: "orange",
      },
    },
  ];
  return (
    <Flex className="WhatCanYouDo" bg="brand.grey-5" as="section">
      <Container
        maxW="container.xl"
        mx="auto"
        py={{ base: "9", md: "20", lg: "32" }}
        px={{ base: 6, xl: 0 }}
      >
        <VStack spacing={{ base: "8", md: "8" }} alignItems="start" w="full" pb="16">
          <SimpleGrid columns={[1, 2]} justifyContent="space-between" w="full">
            <VStack alignItems="start" spacing="20">
              <SectionHeading color="brand.grey-90">What can you do on liberty?</SectionHeading>
            </VStack>
          </SimpleGrid>
        </VStack>
        <SimpleGrid columns={[1, 2]} spacingX={30}>
          {youCanDoList.map((item, index) => {
            return (
              <Box p={8} bg={item.bg} key={index}>
                <VStack spacing={4} alignItems="start">
                  <Text
                    as="h5"
                    fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                    color="brand.black"
                    fontWeight="bold"
                  >
                    {item.for}
                  </Text>

                  <OrderedList
                    className="brand-orange-href"
                    fontSize={16}
                    color="brand.black"
                    spacing={5}
                    px={7}
                  >
                    {item.points.map((points) => {
                      return (
                        <ListItem key={points}>
                          <ReactMarkdown linkTarget="_blank">{points}</ReactMarkdown>
                        </ListItem>
                      );
                    })}
                  </OrderedList>
                </VStack>
                <VStack mt={7} alignItems="start">
                  <Button as="a" target="_blank" href={item.cta.link} variant={item.cta.variant}>
                    {item.cta.text}
                  </Button>
                </VStack>
              </Box>
            );
          })}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};
export default WhatCanYoDo;
