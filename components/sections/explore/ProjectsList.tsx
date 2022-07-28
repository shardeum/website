import { Container, Flex, useBreakpointValue } from "@chakra-ui/react";
import { Project } from "models/project";
import { totalmem } from "os";
import { FC, useMemo, useState } from "react";
import CategoryList from "./CategoryList";
import { Pagination } from "./Pagination";
import ProjectCard from "./ProjectCard";
import TitleAndSearchInput from "./TitleAndSearchInput";

export type ProjectsListProps = {
  projects: Project[];
  categories: { [category: string]: number };
  upvoteMap: { [projectId: string]: boolean };
  onUpvoteProject: (projectId: string, upvoted: boolean) => void;
};

export const ProjectsList: FC<ProjectsListProps> = ({
  projects = [],
  categories = {},
  upvoteMap = {},
  onUpvoteProject,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  // Use breakpoints to show different number of project cards

  const numProjectsPerPage: number | undefined = useBreakpointValue({
    lg: 6,
    md: 2,
    sm: 2,
    xs: 2,
    base: 2,
  });
  // filter projects by search value and category
  const filteredProjects = useMemo(() => {
    setCurrentPage(1);
    return projects.filter((project) => {
      // check if seaerched value matches
      const isSearched = project.name.toLowerCase().includes(searchValue.trim().toLowerCase());
      // check if selected category matches
      const isCategory = project.category === selectedCategory || selectedCategory === "All";

      return isSearched && isCategory; // show project if both if it matches search and category
    });
  }, [projects, selectedCategory, searchValue]);

  // get number of pages based on number of filtered projects
  const numPages = numProjectsPerPage
    ? Math.ceil(filteredProjects.length / numProjectsPerPage) || 1
    : 1;

  return (
    <Flex bg="brand.white" as="section">
      <Container
        maxW="container.xl"
        mx="auto"
        pt="16"
        // pb={{ lg: "11.6rem", md: "3rem", sm: "3rem", xs: "4rem" }}
        pb={["4rem", "3rem", "3rem", "11.6rem"]}
        px={{ base: 6, xl: 0 }}
      >
        {/* title and searchbar */}
        <TitleAndSearchInput value={searchValue} setValue={setSearchValue} />

        {/* category pils */}
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* set of projects based on categories and search value */}
        <Flex
          direction={{ lg: "row", md: "row", base: "column" }}
          justify={{ lg: "flex-start", base: "center" }}
          align={{ sm: "center" }}
          flexWrap="wrap"
          gap={4}
        >
          {filteredProjects && numProjectsPerPage
            ? filteredProjects
                .slice((currentPage - 1) * numProjectsPerPage, currentPage * numProjectsPerPage) // only show the values in the range of the page
                ?.map((item) => (
                  <ProjectCard
                    key={item.name}
                    projectId={item.id}
                    imageURL={item.logo}
                    title={item.name}
                    category={item.category}
                    description={item.description}
                    userUpvotedState={upvoteMap[item.id]}
                    onUpvoteProject={() => onUpvoteProject(item.id, !upvoteMap[item.id])}
                    upvoteCount={item.numUpvotes}
                  />
                ))
            : null}
        </Flex>

        <Pagination
          currentPage={currentPage}
          totalPages={numPages}
          onPageChange={(page) => setCurrentPage(page)}
          mt={8}
        />
      </Container>
    </Flex>
  );
};

export default ProjectsList;
