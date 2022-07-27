import { FC, useMemo } from "react";
import { Container, Flex, Grid, Heading } from "@chakra-ui/react";
import { Project } from "models/project";
import { ProjectSectionCard } from "./ProjectSectionCard";

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
  const newestProjects = useMemo(() => {
    return [...projects]
      .sort((a, b) => {
        const dateA = new Date(a.dateCreated);
        const dateB = new Date(b.dateCreated);
        return dateB.getTime() - dateA.getTime();
      })
      .slice(0, 8);
  }, [projects]);

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
          {newestProjects.map((project) => (
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
          ))}
        </Grid>
      </Container>
    </Flex>
  );
};

export default NewestProjects;
