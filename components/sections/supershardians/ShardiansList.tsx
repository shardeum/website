import { Button, Container, Flex, HStack, SimpleGrid } from "@chakra-ui/react";
import Card from "components/common/ProfileInfoCard";

type ShardiansProps = {
  categories: Array<any>;
  filteredData: Array<any>;
  changeCategory: React.MouseEventHandler<HTMLButtonElement>;
};

const Shardians = ({ categories, filteredData, changeCategory }: ShardiansProps) => {
  return (
    <Flex bg="brand.grey-5" justifyContent="center" alignItems="center">
      <Container maxW="container.xl" px={{ base: 6, xl: 0 }} py="4%">
        <HStack pb={8}>
          {categories.map((category, index) => {
            return (
              <Button
                key={"category" + index}
                value={category.name}
                onClick={changeCategory}
                variant={category.selected ? "secondary" : "outline"}
                fontSize={["x-small", "md", "lg"]}
                bg={category.selected ? "brand.grey-90" : "brand.grey-5"}
                color={category.selected ? "brand.grey-5" : "brand.grey-90"}
                size="lg"
                _hover={{ color: "brand.grey-5", bg: "brand.grey-90" }}
              >
                {category.name}
              </Button>
            );
          })}
        </HStack>
        <SimpleGrid spacing={["20px", "30px"]} columns={[1, 2, 3]}>
          {filteredData.map((data, index) => {
            return (
              <Card
                key={"shardian-" + index}
                name={data.name}
                description={data.description}
                category={data.category}
                image={data.image && data.image[0]?.thumbnails.full.url}
              />
            );
          })}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Shardians;
