import { FC, useMemo } from "react";
import { Container, Flex, Grid, Heading } from "@chakra-ui/react";
import { Project } from "models/project";
import { ProjectSectionCard } from "./ProjectSectionCard";

export type NewestProjectsProps = {
  projects: Project[];
};

export const NewestProjects: FC<NewestProjectsProps> = ({ projects = [] }) => {
  const newestProjects = useMemo(() => {
    return projects
      .sort((a, b) => {
        const dateA = new Date(a.dateCreated);
        const dateB = new Date(b.dateCreated);
        return dateB.getTime() - dateA.getTime();
      })
      .slice(0, 8);
  }, [projects]);

  return (
    <Flex bg="brand.white" as="section">
      <Container maxW="container.xl" mx="auto" pt="16" pb="28" px={{ base: 6, xl: 0 }}>
        <Flex justifyContent="space-between" alignItems="center" my={2} py={2}>
          <Heading size="2xl" color="brand.black">
            Newest Projects
          </Heading>
        </Flex>

        <Grid templateColumns="1fr 1fr" gap="24px">
          {newestProjects.map((project) => (
            <ProjectSectionCard
              key={project.id}
              id={project.id}
              title={project.name}
              category={project.category}
              description={project.description}
              upvotes={1544}
            />
          ))}
        </Grid>
      </Container>
    </Flex>
  );
};
