import { Flex, Image, Badge, Text, AspectRatio } from "@chakra-ui/react";

type CardProps = {
  name: string;
  description: string;
  category: string;
  image: string;
};

const Card = ({ name, description, category, image }: CardProps) => {
  return (
    <Flex direction="column" p={8} bg="gray.800" shadow="lg" position="relative">
      <AspectRatio ratio={270 / 300} w="full">
        <Image src={image || "/Nischal.png"} alt={`Picture of ${name}`} roundedTop="lg" />
      </AspectRatio>

      <Flex direction="column" justifyContent={"flex-start"} flexGrow={1} pt={[6, 7, 8]}>
        <Text fontSize="2xl" fontWeight="semibold" as="h4" isTruncated>
          {name}
        </Text>
        <Text flexGrow={1} pt={[2, 3, 4]} pb={[2, 3, 4]}>
          {description}
        </Text>
        <Flex>
          <Badge color="brand.grey-90" bg="brand.grey-5" px={2} py={1} fontWeight={"600"}>
            {category}
          </Badge>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Card;
