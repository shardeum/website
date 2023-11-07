import { useEffect, useState } from "react";
import Head from "next/head";

import { Box, useDisclosure, Stack, Button } from "@chakra-ui/react";
import HorizontalTile from "@shm/components/sections/explore/Details/HorizontalTile";
import JoinCommunity from "@shm/components/sections/JoinCommunity";
import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";

import ResponsiveHero from "@shm/components/sections/ResponsiveHero";
import { getProjectById } from "utils/api";
import { getSession } from "next-auth/react";
import ShareModal from "@shm/components/sections/explore/Details/ShareModal";
import { ProductScreenshots } from "@shm/components/sections/explore/Details/ProductScreenshots";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Helmet } from "react-helmet";

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

  useEffect(() => {
    // const stateObj = {};
    // const prevTitle = document.title;
    // const Description = project.description.substring(0, 160);
    // const CONTENT = document.getElementsByTagName("META") as any | null;
    // CONTENT[5].content = Description;
    // const pageTitle = `Shardeum | Ecosystem | ${project.name}`;
    // if (document.title !== pageTitle) {
    //   document.title = pageTitle;
    // }
  });
  return (
    <>
      <Head>
        <title>{`Shardeum | ${project.name}`}</title>
        <meta name="description" content={project.description.substring(0, 160)} />
        <meta
          name="keywords"
          content="shardeum,blockchain,layer1 blockchain,evm based blockchain"
        />

        {/* Facebook */}
        <meta
          property="og:url"
          content={`https://shardeum.org/ecosystem/${project.name.replace(/\s/g, "")}/`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Shardeum | Ecosystem ${project.name}`} />
        <meta property="og:description" content={`${project.description.substring(0, 160)}`} />
        <meta property="og:image" content={project.logo || `https://shardeum.org/Shardeum.png`} />

        {/* Twiter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://shardeum.org/" />
        <meta
          property="twitter:url"
          content={`https://shardeum.org/ecosystem/${project.name.replace(/\s/g, "")}/`}
        />
        <meta property="twitter:title" content={`Shardeum | Ecosystem ${project.name}`} />
        <meta property="twitter:description" content={`${project.description.substring(0, 160)}`} />
        <meta
          property="twitter:image"
          content={project.logo || `https://shardeum.org/Shardeum.png`}
        />

        {/* <meta property="og:site_name" content={`Shardeum | Ecosystem ${project.name}`} /> */}

        {/* <meta name="twitter:title" content={`Shardeum | Ecosystem ${project.name}`} /> */}
        {/* <meta name="twitter:description" content={project.description.substring(0, 160)} /> */}
        {/* <meta
        name="twitter:image"
        content={project.logo || `https://shardeum.org/Shardeum.png`}
      /> */}
        <meta name="twitter:site" content="@shardeum" />
        <link rel="canonical" href="https://shardeum.org/" />

        <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/08f8687cb2b708c3de5b4b9f/script.js"
        ></script>
      </Head>
      <ResponsiveHero cta={""} heading={""} internalPage={project} />
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
          project={project}
          onClose={onClose}
        />
        <JoinCommunity />
      </Box>
    </>
  );
};

export default ExploreDetails;
