import { Button, Container, HStack, SimpleGrid } from "@chakra-ui/react";
import Card from "components/common/ProfileInfoCard";

type ShardiansProps = {
  categories: Array<any>;
  filteredData: Array<any>;
  changeCategory: React.MouseEventHandler<HTMLButtonElement>;
};
const Shardians = ({ categories, filteredData, changeCategory }: ShardiansProps) => {
  return (
    <Container maxW="container.xl" pt="8" pb="8" as="section">
      <HStack pb={12}>
        {categories.map((category, index) => {
          return (
            <Button
              key={"category" + index}
              value={category.name}
              onClick={changeCategory}
              variant={category.selected ? "secondary" : "outline"}
              size="lg"
            >
              {category.name}
            </Button>
          );
        })}
      </HStack>
      <SimpleGrid spacingX="30px" columns={[1, 2, 3]}>
        {filteredData.map((data, index) => {
          return (
            <Card
              key={"shardian-" + index}
              name={data.name}
              description={data.description}
              category={data.category}
            />
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default Shardians;
