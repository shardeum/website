import { Container, Flex, Grid } from "@chakra-ui/react";
import { Project } from "models/project";
import { FC, useState } from "react";
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
          {projects.map((project) => (
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
