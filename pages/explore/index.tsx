import { Button } from "@chakra-ui/react";
import ProjectsList from "@shm/components/sections/explore/ProjectsList";
import TitleAndSearchInput from "@shm/components/sections/explore/TitleAndSearchInput";
import JoinCommunity from "@shm/components/sections/JoinCommunity";
import ResponsiveHero from "@shm/components/sections/ResponsiveHero";
import type { InferGetStaticPropsType, NextPage } from "next";
import React from "react";
import { getSHMProjects } from "utils/api";

const Explore = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
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

      {projects.length ? <ProjectsList projects={projects} /> : null}
      <JoinCommunity />
    </>
  );
};

export async function getStaticProps() {
  const projects = await getSHMProjects();

  return {
    props: {
      projects,
      // Will be passed to the page component as props
    },
  };
}

export default Explore;
