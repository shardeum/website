import { Container, Flex, Grid } from "@chakra-ui/react";
import { Project } from "models/project";
import { FC, useMemo, useState } from "react";
import { ProjectSectionCard } from "./ProjectSectionCard";
import { TitleAndSelect } from "./TitleAndSelect";

const options = [
  {
    value: "today",
    label: "Today",
  },
  {
    value: "week",
    label: "This Week",
  },
  {
    value: "month",
    label: "This Month",
  },
];

export type TrendingProjectsProps = {
  projects: Project[];
};

export const TrendingProjects: FC<TrendingProjectsProps> = ({ projects = [] }) => {
  const [filter, setFilter] = useState("week");

  const filteredAndSlicedProjects = useMemo(() => {
    // filter out projects that were created within last week/month/24 hours
    const now = new Date();
    const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const lastMonth = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const last24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    let filteredProjects: Project[] = [];

    switch (filter) {
      case "week":
        filteredProjects = projects.filter((project) => {
          const dateCreated = new Date(project.dateCreated);
          return dateCreated > lastWeek;
        });
        break;
      case "month":
        filteredProjects = projects.filter((project) => {
          const dateCreated = new Date(project.dateCreated);
          return dateCreated > lastMonth;
        });
        break;
      default: // day
        filteredProjects = projects.filter((project) => {
          const dateCreated = new Date(project.dateCreated);
          return dateCreated > last24Hours;
        });
    }

    // sort projects by highest upvotes
    const projectsSortedByUpvotes = filteredProjects.sort((a, b) => b.numUpvotes - a.numUpvotes);

    return projectsSortedByUpvotes.slice(0, 8);
  }, [projects, filter]);

  return (
    <Flex bg="brand.white" as="section">
      <Container maxW="container.xl" mx="auto" pt="16" pb="28" px={{ base: 6, xl: 0 }}>
        <TitleAndSelect
          title={"Trending Projects"}
          value={filter}
          options={options}
          onChange={(val) => setFilter(val)}
        />

        <Grid templateColumns="1fr 1fr" gap="24px">
          {filteredAndSlicedProjects.map((project) => (
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
