import { FC, useMemo, useState } from "react";
import { Container, Flex, Grid, Heading } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { Project } from "models/project";
import { ProjectSectionCard } from "./ProjectSectionCard";
import { Pagination } from "./Pagination";

export type NewestProjectsProps = {
  projects: Project[];
  upvoteMap: Record<string, boolean>;
  onUpvoteProject: (projectId: string, upvoted: boolean) => void;
};

export const NewestProjects: FC<NewestProjectsProps> = ({
  projects = [],
  upvoteMap = {},
  onUpvoteProject,
}) => {
  // const newestProjects = useMemo(() => {
  //   return [...projects]
  //     // .sort((a, b) => {
  //     //   const dateA = new Date(a.dateCreated);
  //     //   const dateB = new Date(b.dateCreated);
  //     //   return dateB.getTime() - dateA.getTime();
  //     // })
  //     // .slice(0, 8);
  // }, [projects]);

  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  // Use breakpoints to show different number of project cards

  const numProjectsPerPage: number | undefined = useBreakpointValue({
    // lg: 6,
    lg: 4,
    md: 4,
    sm: 4,
    xs: 4,
    base: 4,
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
        // pb={{ lg: "7.5rem", md: "7.5rem", sm: "5rem" }}
        pb={["4rem", "5rem", "7.5rem"]}
        px={{ base: 6, xl: 0 }}
      >
        <Flex justifyContent="space-between" alignItems="center" my={4} py={4}>
          <Heading size="2xl" color="brand.black">
            Newest Projects
          </Heading>
        </Flex>

        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr", md: "1fr" }} gap={4}>
          {/* {newestProjects.map((project) => (
            <>
              {project.status === "accepted" ? (
                <ProjectSectionCard
                  key={project.id}
                  id={project.id}
                  title={project.name}
                  category={project.category}
                  description={project.description}
                  upvotes={project.numUpvotes}
                  logo={project.logo}
                  isUpvoted={upvoteMap[project.id]}
                  onUpvoteButtonClicked={(upvoted) => onUpvoteProject(project.id, upvoted)}
                />
              ) : null}
            </>
          ))} */}
          {filteredProjects && numProjectsPerPage
            ? filteredProjects
                .slice((currentPage - 1) * numProjectsPerPage, currentPage * numProjectsPerPage) // only show the values in the range of the page
                ?.map((item) => (
                  <>
                    {item.status === "accepted" ? (
                      <ProjectSectionCard
                        key={item.id}
                        id={item.id}
                        title={item.name}
                        category={item.category}
                        description={item.description}
                        upvotes={item.numUpvotes}
                        logo={item.logo}
                        isUpvoted={upvoteMap[item.id]}
                        onUpvoteButtonClicked={(upvoted) => onUpvoteProject(item.id, upvoted)}
                      />
                    ) : null}
                  </>
                ))
            : null}
        </Grid>
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

export default NewestProjects;
