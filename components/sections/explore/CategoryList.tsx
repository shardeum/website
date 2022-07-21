import { Button, Flex, HStack } from "@chakra-ui/react";
import React, { useState } from "react";

const categoryList = [
  { id: 1, name: "All", selected: true },
  { id: 2, name: "NFT", selected: false },
  { id: 3, name: "Gaming", selected: false },
  { id: 4, name: "DeFi", selected: false },
  { id: 5, name: "CEX", selected: false },
  { id: 6, name: "DAO", selected: false },
  { id: 7, name: "B2B", selected: false },
  { id: 8, name: "Social", selected: false },
  { id: 9, name: "Utility", selected: false },
  { id: 10, name: "Others", selected: false },
];

function CategoryList() {
  const [categories, setCategories] = useState(categoryList);
  const handleCategorySelect = (id: number) => {
    const updatedCategoryList = categories.map((category) => {
      if (category.id === id) return { ...category, selected: true };
      return { ...category, selected: false };
    });
    setCategories(updatedCategoryList);
  };
  return (
    <Flex overflowX="scroll" className="no-scrollbar">
      <HStack pt={{ base: 6, lg: 8 }} pb={{ base: 6, lg: 8 }}>
        {categories.map((category) => {
          return (
            <Button
              p={4}
              key={"category" + category.id}
              value={category.name}
              onClick={() => handleCategorySelect(category.id)}
              variant={category.selected ? "secondary" : "outline"}
              fontSize="md"
              bg={category.selected ? "brand.grey-90" : "brand.grey-5"}
              color={category.selected ? "brand.grey-5" : "brand.grey-90"}
              //size="lg"
              _hover={{ color: "brand.grey-5", bg: "brand.grey-90" }}
              _focus={{ outline: "none" }}
            >
              {category.name}
            </Button>
          );
        })}
      </HStack>
    </Flex>
  );
}

export default CategoryList;
