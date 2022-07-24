import { Button, Container, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";

import React, { FC } from "react";
import { CategoryBadge } from "../CategoryBadge";

type Links = {
  twitter: string;
  discord: string;
};

export type HorizontalTileProps = {
  title: string;
  logo: string;
  description: string;
  links?: Links;
};

export const HorizontalTile: FC<HorizontalTileProps> = () => {
  return (
    <Container
      mx="auto"
      maxW="container.xl"
      px={{ base: 8, xl: 0 }}
      pt={{ base: 4, md: 16 }}
      pb={{ base: 20, md: 16 }}
    >
      <Grid
        backgroundColor="brand.grey-10"
        templateColumns="auto auto auto"
        columnGap={8}
        padding="2.5rem"
      >
        <GridItem>
          <Image src="/Shardeum.png" boxSize={["7.5rem", "11.25rem"]} alt="logo" />
        </GridItem>
        <GridItem>
          <Text mb="4" fontWeight="medium" color="brand.grey-90" fontSize={["3xl", "4xl", "5xl"]}>
            Growth DAO
          </Text>
          <Text
            mb="4"
            lineHeight={{ base: "7", md: "8" }}
            fontWeight="thin"
            color="brand.grey-90"
            fontSize="2xl"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </Text>
          <CategoryBadge category="DAO" />
        </GridItem>
        <GridItem>
          <VStack w={["100%", "175px"]}>
            <Button
              p={4}
              marginInlineStart={0}
              variant="outline"
              fontSize="md"
              w="100%"
              bg="brand.grey-5"
              color="brand.grey-90"
              _hover={{ color: "brand.grey-5", bg: "brand.grey-90" }}
              _focus={{ outline: "none" }}
            >
              <Text as="span">&#9650;</Text>&nbsp;&nbsp; Upvote &nbsp;
              <Text as="span" color="brand.grey-50">
                1.6k
              </Text>
            </Button>
            <Button
              p={4}
              marginInlineStart={0}
              variant="outline"
              fontSize="md"
              w="100%"
              bg="brand.grey-5"
              color="brand.grey-90"
              _hover={{ color: "brand.grey-5", bg: "brand.grey-90" }}
              _focus={{ outline: "none" }}
            >
              &nbsp;&nbsp; Share
            </Button>
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default HorizontalTile;
