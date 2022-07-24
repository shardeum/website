import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import React, { FC } from "react";

type CategoryList = { id: number; name: string; selected: boolean }[];

const categoryList: CategoryList = [
  { id: 1, name: "All", selected: true },
  { id: 2, name: "NFT", selected: false },
  { id: 3, name: "Gaming", selected: false },
  { id: 4, name: "DeFi", selected: false },
  { id: 5, name: "DEX", selected: false },
  { id: 6, name: "DAO", selected: false },
  { id: 7, name: "B2B", selected: false },
  { id: 8, name: "Social", selected: false },
  { id: 9, name: "Utility", selected: false },
  { id: 10, name: "Others", selected: false },
];

export type CaregoryListProps = {
  categories: { [category: string]: number };
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

export const CategoryList: FC<CaregoryListProps> = ({
  categories: categoryCount = {},
  selectedCategory = "All",
  setSelectedCategory,
}) => {
  return (
    <Flex overflowX="scroll" className="no-scrollbar">
      <HStack
        flexWrap={["nowrap", "nowrap", "wrap"]} // xs, sm, ...rest
        rowGap={{ md: 2 }}
        maxW="fit-content"
        justifyContent="center"
        pt={{ base: 6, lg: 8 }}
        pb={{ base: 6, lg: 8 }}
      >
        {categoryList.map((category) => {
          const isSelected = category.name === selectedCategory;

          return (
            <Button
              p={4}
              marginInlineStart={0}
              key={category.name}
              value={category.name}
              onClick={() => setSelectedCategory(category.name)}
              variant={isSelected ? "secondary" : "outline"}
              fontSize="md"
              bg={isSelected ? "brand.grey-90" : "brand.grey-5"}
              color={isSelected ? "brand.grey-5" : "brand.grey-90"}
              _hover={{ color: "brand.grey-5", bg: "brand.grey-90" }}
              _focus={{ outline: "none" }}
            >
              {category.name}&nbsp;&nbsp;
              <Text as="span" color="brand.grey-50">
                {categoryCount[category.name] || 0}
              </Text>
            </Button>
          );
        })}
      </HStack>
    </Flex>
  );
};

export default CategoryList;
