import { Button } from "@chakra-ui/react";
import { NewestProjects } from "@shm/components/sections/explore/NewProjects";
import ProjectsList from "@shm/components/sections/explore/ProjectsList";
import { TrendingProjects } from "@shm/components/sections/explore/TrendingProjects";
// import TitleAndSearchInput from "@shm/components/sections/explore/TitleAndSearchInput";
import JoinCommunity from "@shm/components/sections/JoinCommunity";
import ResponsiveHero from "@shm/components/sections/ResponsiveHero";
import type { InferGetStaticPropsType, NextPage } from "next";
import React from "react";
import { getSHMProjects } from "utils/api";

export const getStaticProps = async () => {
  const { projects, categories } = await getSHMProjects();

  return {
    // Will be passed to the page component as props
    props: {
      projects,
      categories,
    },
  };
};

// define page props type
export type ExplorePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Explore: NextPage<ExplorePageProps> = ({ projects, categories }: ExplorePageProps) => {
  // projects = projects.map((project) => ({
  //   ...project,
  //   dateCreatedL: new Date(project.dateCreated),
  // }));

  return (
    <>
      <ResponsiveHero
        heading="Discover The dApp projects on shardeum"
        cta={
          <Button
            as="a"
            variant="primary"
            size="lg"
            rel="noopener noreferrer"
            target="_blank"
            mt={8}
          >
            Submit your project
          </Button>
        }
        src={"/community/community-hero.png"}
      />

      {projects.length > 0 && <ProjectsList projects={projects} categories={categories} />}
      {projects.length > 0 && <TrendingProjects projects={projects} />}
      {projects.length > 0 && <NewestProjects projects={projects} />}

      <JoinCommunity />
    </>
  );
};

export default Explore;
