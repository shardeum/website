import { FC } from "react";

import { Flex, Text } from "@chakra-ui/react";

export type CategoryBadgeProps = {
  category: string;
};

export const CategoryBadge: FC<CategoryBadgeProps> = ({ category = "Others" }) => {
  return (
    <Flex
      px="12px"
      pt="5px"
      py="6px"
      h="28px"
      bg="brand.grey-30"
      color="brand.grey-80"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        fontSize="14px"
        lineHeight="18px"
        // fontWeight="bold"
        // textTransform="uppercase"
      >
        {category}
      </Text>
    </Flex>
  );
};
