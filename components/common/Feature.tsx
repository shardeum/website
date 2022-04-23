import { Text, VStack } from "@chakra-ui/react";

const Feature = ({ title, description }: { title: string; description: string }) => (
  <VStack spacing={4} alignItems="start">
    <Text as="h5" fontSize={{ base: "3xl", lg: "4xl" }} color="brand.black" fontWeight="bold">
      {title}
    </Text>
    <Text as="p" color="brand.grey-70">
      {description}
    </Text>
  </VStack>
);

export default Feature;
