import { Button, Flex, HStack, SimpleGrid } from "@chakra-ui/react";
import Card from "components/common/ProfileInfoCard";

type ShardiansProps = {
  categories: Array<any>;
  filteredData: Array<any>;
  changeCategory: React.MouseEventHandler<HTMLButtonElement>;
};

const Shardians = ({ categories, filteredData, changeCategory }: ShardiansProps) => {
  return (
    <Flex bg="brand.grey-5" pb={{ base: 8, lg: 24 }}>
      <Flex
        overflowX={"hidden"}
        maxW="container.xl"
        mx={{ lg: "auto" }}
        flexDirection={"column"}
        justifyContent="center"
      >
        <Flex overflowX="scroll" className="no-scrollbar">
          <HStack px={{ base: 6, lg: 8, xl: 0 }} pt={{ base: 6, lg: 8 }}>
            {categories.map((category, index) => {
              return (
                <Button
                  p={4}
                  key={"category" + index}
                  value={category.name}
                  onClick={changeCategory}
                  variant={category.selected ? "secondary" : "outline"}
                  fontSize="md"
                  bg={category.selected ? "brand.grey-90" : "brand.grey-5"}
                  color={category.selected ? "brand.grey-5" : "brand.grey-90"}
                  //size="lg"
                  _hover={{ color: "brand.grey-5", bg: "brand.grey-90" }}
                >
                  {category.name}
                </Button>
              );
            })}
          </HStack>
        </Flex>
        <SimpleGrid
          pt={{ base: 6, lg: 8 }}
          px={{ base: 6, lg: 8, xl: 0 }}
          spacing={["20px", "30px"]}
          columns={[1, 2, 3]}
        >
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
      </Flex>
    </Flex>
  );
};

export default Shardians;
