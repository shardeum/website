import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Text,
} from "@chakra-ui/react";

type CardProps = {
  name: string;
  description: string;
  category: string;
  image: string;
};

const Card = ({ name, description, category, image }: CardProps) => {
  return (
    <Box p={8} bg="gray.800" shadow="lg" position="relative">
      <Image src={image || "nischal.png"} alt={`Picture of ${name}`} roundedTop="lg" />

      <Box pt={[6, 7, 8]}>
        <Text fontSize="2xl" fontWeight="semibold" as="h4" isTruncated>
          {name}
        </Text>
        <Text pt={[2, 3, 4]} pb={[2, 3, 4]}>
          {description}
        </Text>
        <Flex>
          <Badge px={2} py={1} fontWeight={"600"}>
            {category}
          </Badge>
        </Flex>
      </Box>
    </Box>
  );
};

export default Card;
