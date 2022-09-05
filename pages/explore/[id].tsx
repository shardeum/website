import { Box, useDisclosure } from "@chakra-ui/react";
import HorizontalTile from "@shm/components/sections/explore/Details/HorizontalTile";
import JoinCommunity from "@shm/components/sections/JoinCommunity";
import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";

import { getProjectById } from "utils/api";
import { getSession } from "next-auth/react";
import ShareModal from "@shm/components/sections/explore/Details/ShareModal";
import { ProductScreenshots } from "@shm/components/sections/explore/Details/ProductScreenshots";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getServerSideProps = async ({ req, locale, query }: GetServerSidePropsContext) => {
  const session = await getSession({ req });
  const projectRecordId = (query.id as string) || "";
  const userId = session?.user?.id || "";

  const { project, userUpvoted } = await getProjectById(projectRecordId, userId);

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <HorizontalTile
        onOpen={onOpen}
        project={project}
        userUpvoted={userUpvoted}
        session={sessionObject}
      />
      {project.screenShots?.length && <ProductScreenshots screenShots={project.screenShots} />}
      <ShareModal
        projectUrl={typeof window !== "undefined" ? window?.location.href : ""}
        isOpen={isOpen}
        onClose={onClose}
      />
      <JoinCommunity />
    </Box>
  );
};

export default ExploreDetails;
