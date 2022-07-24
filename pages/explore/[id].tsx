import { Box } from "@chakra-ui/react";
import HorizontalTile from "@shm/components/sections/explore/Details/HorizontalTile";
import JoinCommunity from "@shm/components/sections/JoinCommunity";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { getSession } from "next-auth/react";
import React from "react";
import { getProjectById } from "utils/api";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const session = await getSession({ req: context.req });
  const projectRecordId = (context.query.id as string) || "";
  const userId = session?.user?.id || "";

  const { project, userUpvoted } = await getProjectById(projectRecordId, userId);

  return {
    props: {
      project,
      userUpvoted,
      sessionObject: session,
    },
  };
};

export type ProjectPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const ExploreDetails: NextPage<ProjectPageProps> = ({
  project,
  userUpvoted = false,
  sessionObject,
}: ProjectPageProps) => {
  return (
    <Box>
      <HorizontalTile
        title={project.name}
        logo={project.logo || "/Shardeum.png"}
        description={project.description}
      />
      <JoinCommunity />
    </Box>
  );
};

export default ExploreDetails;
