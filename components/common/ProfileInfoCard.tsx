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
};

const Card = ({ name, description, category }: CardProps) => {
  return (
    <Flex pb={[12, 8, 6]} w="full" justifyContent="center" alignItems="center">
      <Box
        p={8}
        bg={useColorModeValue("white", "gray.800")}
        borderWidth="1px"
        shadow="lg"
        position="relative"
      >
        <Image src={"/Nischal.png"} alt={`Picture of ${name}`} roundedTop="lg" />

        <Box pt={[6, 7, 8]}>
          <Flex direction="column" justifyContent="space-between" alignContent="center">
            <Text fontSize="2xl" fontWeight="semibold" as="h4" isTruncated>
              {name}
            </Text>
            <Text pt={[2, 3, 4]} pb={[2, 3, 4]}>
              {description}
            </Text>
            <Flex justifyContent="space-between" alignContent="center">
              <Badge px={2} py={1} fontWeight={"600"}>
                {category}
              </Badge>
              <Text color="gray.500">Week #3</Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Card;
