import React, { useMemo } from "react";
import type { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";

import { Button } from "@chakra-ui/react";
import ResponsiveHero from "@shm/components/sections/ResponsiveHero";
import JoinCommunity from "@shm/components/sections/JoinCommunity";
import ProjectsList from "@shm/components/sections/explore/ProjectsList";
import TrendingProjects from "@shm/components/sections/explore/TrendingProjects";
import NewestProjects from "@shm/components/sections/explore/NewProjects";

import { getSession } from "next-auth/react";
import { getSHMProjects, getUserUpvotedProjects } from "utils/api";

// define page props type
export type ExplorePageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const session = await getSession({ req: context.req });

  const { projects, categories } = await getSHMProjects();
  console.log({ session });
  const upvotedProjectsData = await getUserUpvotedProjects(session?.user?.id || "");

  return {
    // Will be passed to the page component as props
    props: {
      projects,
      categories,
      upvotedProjectIds: upvotedProjectsData?.upvotedProjectIds ?? [],
    },
  };
};

const Explore: NextPage<ExplorePageProps> = ({
  projects = [],
  categories = {},
  upvotedProjectIds = [],
}: ExplorePageProps) => {
  const upvotedProjectsMap = useMemo(() => {
    return upvotedProjectIds.reduce((acc: Record<string, boolean>, projectId) => {
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
