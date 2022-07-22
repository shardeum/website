import { Container, Flex } from "@chakra-ui/react";
import { Project } from "models/project";
import { FC, useState } from "react";
import CategoryList from "./CategoryList";
import ProjectCard from "./ProjectCard";
import TitleAndSearchInput from "./TitleAndSearchInput";

export type ProjectsListProps = {
  projects: Project[];
  categories: { [category: string]: number };
};

export const ProjectsList: FC<ProjectsListProps> = ({ projects = [], categories = {} }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <Flex bg="brand.white" as="section">
      <Container maxW="container.xl" mx="auto" pt="16" pb="28" px={{ base: 6, xl: 0 }}>
        {/* title and searchbar */}
        <TitleAndSearchInput />

        {/* category pils */}
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* set of projects based on categories and  */}
        <Flex flexDirection="row" gap={4}>
          {projects?.map((item) => (
            <ProjectCard
              key={item.name}
              imageURL={item.logo}
              title={item.name}
              category={item.category}
              description={item.description}
            />
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};

export default ProjectsList;
