import { Button } from "@chakra-ui/react";
import { NewestProjects } from "@shm/components/sections/explore/NewProjects";
import ProjectsList from "@shm/components/sections/explore/ProjectsList";
import { TrendingProjects } from "@shm/components/sections/explore/TrendingProjects";
// import TitleAndSearchInput from "@shm/components/sections/explore/TitleAndSearchInput";
import JoinCommunity from "@shm/components/sections/JoinCommunity";
import ResponsiveHero from "@shm/components/sections/ResponsiveHero";
import axios from "axios";
import type { InferGetStaticPropsType, NextPage } from "next";
import React, { useMemo } from "react";
import { getSHMProjects } from "utils/api";

export const getStaticProps = async () => {
  const { projects, categories } = await getSHMProjects();
  const upvotedProjectsData: { upvotedProjectIds: string[] } = await axios.get(
    "http://localhost:3000/api/users/get-upvotes"
  );

  return {
    // Will be passed to the page component as props
    props: {
      projects,
      categories,
      upvotedProjectIds: upvotedProjectsData?.upvotedProjectIds ?? [],
      // upvotedProjectIds: [],
    },
  };
};

// define page props type
export type ExplorePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Explore: NextPage<ExplorePageProps> = ({
  projects = [],
  categories = {},
  upvotedProjectIds = [],
}: ExplorePageProps) => {
  const upvotedProjectsMap = useMemo(() => {
    return upvotedProjectIds.reduce((acc, projectId) => {
      // eslint-disable-next-line
      // @ts-ignore
      acc[projectId] = true;
      return acc;
    }, {});
  }, [upvotedProjectIds]);

  console.log(upvotedProjectsMap);

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
        src={"/explore/shardeum-ecosystem-hero-img.png"}
      />

      {projects.length > 0 && <ProjectsList projects={projects} categories={categories} />}
      {projects.length > 0 && <TrendingProjects projects={projects} />}
      {projects.length > 0 && <NewestProjects projects={projects} />}

      <JoinCommunity />
    </>
  );
};

export default Explore;
