import { Button, Container, Flex, HStack, SimpleGrid } from "@chakra-ui/react";
import Card from "components/common/ProfileInfoCard";

type ShardiansProps = {
  categories: Array<any>;
  filteredData: Array<any>;
  changeCategory: React.MouseEventHandler<HTMLButtonElement>;
};

const Shardians = ({ categories, filteredData, changeCategory }: ShardiansProps) => {
  return (
    <Flex bg="brand.grey-5">
      <Container pl={0} pr={0} maxW="container.xl" pt={[6, 8, 12]} pb={[6, 8, 12]}>
        <HStack pb={12} pl={[3, 5, 0]} pr={[3, 5, 0]}>
          {categories.map((category, index) => {
            return (
              <Button
                key={"category" + index}
                value={category.name}
                onClick={changeCategory}
                variant={category.selected ? "secondary" : "outline"}
                fontSize={["x-small", "md", "lg"]}
                bg={category.selected ? "brand.grey-90" : "brand.grey-5"}
                color={category.selected ? "brand.grey-5" : "brand.grey-80"}
                size="lg"
              >
                {category.name}
              </Button>
            );
          })}
        </HStack>
        <SimpleGrid spacing={["20px", "30px"]} columns={[1, 2, 3]} pl={[3, 5, 0]} pr={[3, 5, 0]}>
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
