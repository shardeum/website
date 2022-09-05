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
  upvoteMap: Record<string, boolean>;
  onUpvoteProject: (projectId: string, upvoted: boolean) => void;
};

export const TrendingProjects: FC<TrendingProjectsProps> = ({
  projects = [],
  upvoteMap = {},
  onUpvoteProject,
}) => {
  const [filter, setFilter] = useState("week");

  const filteredAndSlicedProjects = useMemo(() => {
    const now = new Date();
    const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const lastMonth = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const last24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    // filter out projects that were created within last week/month/24 hours
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

    // sort projects by highest upvotes, and return first 8
    return [...filteredProjects].sort((a, b) => b.numUpvotes - a.numUpvotes).slice(0, 8);
  }, [projects, filter]);

  // console.log({ filteredAndSlicedProjects });

  return (
    <Flex bg="brand.white" as="section">
      <Container
        maxW="container.xl"
        mx="auto"
        pb={{ lg: "7.5rem", md: "7.5rem", sm: "5rem" }}
        px={{ base: 6, xl: 0 }}
      >
        <TitleAndSelect
          title={"Trending Projects"}
          value={filter}
          options={options}
          onChange={(val) => setFilter(val)}
        />

        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr", md: "1fr" }} gap={4}>
          {filteredAndSlicedProjects.map((project) => (
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

export default TrendingProjects;
