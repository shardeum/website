import { Box, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import JoinNewsletter from "components/common/JoinNewsletter";
import NewsAppearance from "components/common/NewsAppearance";
import VisitBlog from "components/common/VisitBlog";
import { NewsItem } from "../../../types";

function ShardeumInNews({ news }: { news: NewsItem[] }) {
  return (
    <Flex as="section" bg="brand.grey-10">
      <Container
        maxW="container.xl"
        mx="auto"
        pb={{ base: "20", lg: "28" }}
        px={{ base: "6", xl: 0 }}
      >
        <Box mb={{ base: "10", md: "20", lg: "32" }}>
          <NewsAppearance sectionTitle="Shardeum news" news={news} />
        </Box>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="6" w="full">
          <JoinNewsletter />
          <VisitBlog />
        </SimpleGrid>
      </Container>
    </Flex>
  );
}

export default ShardeumInNews;
