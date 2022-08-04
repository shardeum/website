import { FC } from "react";

import { Box, Flex, Text } from "@chakra-ui/react";

export type CategoryBadgeProps = {
  category: string;
};

export const CategoryBadge: FC<CategoryBadgeProps> = ({ category = "Others" }) => {
  return (
    <Box
      px="12px"
      pt="5px"
      py="6px"
      h="28px"
      bg="brand.grey-30"
      color="brand.grey-80"
      maxWidth="fit-content"
    >
      <Flex alignItems="center" justifyContent="center">
        <Text fontSize="14px" lineHeight="18px">
          {category}
        </Text>
      </Flex>
    </Box>
  );
};

export default CategoryBadge;
