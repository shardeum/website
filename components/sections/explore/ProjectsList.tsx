import { Container, Flex } from "@chakra-ui/react";
import { Project } from "models/project";
import { FC, useMemo, useState } from "react";
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

  // filter projects by search value and category
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // check if seaerched value matches
      const isSearched = project.name.toLowerCase().includes(searchValue.trim().toLowerCase());

      // check if selected category matches
      const isCategory = project.category === selectedCategory || selectedCategory === "All";

      return isSearched && isCategory; // show project if both if it matches search and category
    });
  }, [projects, selectedCategory, searchValue]);

  return (
    <Flex bg="brand.white" as="section">
      <Container maxW="container.xl" mx="auto" pt="16" pb="28" px={{ base: 6, xl: 0 }}>
        {/* title and searchbar */}
        <TitleAndSearchInput value={searchValue} setValue={setSearchValue} />

        {/* category pils */}
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* set of projects based on categories and search value */}
        <Flex flexDirection="row" gap={4}>
          {filteredProjects?.map((item) => (
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
