import { useContext, useState } from "react";
import type { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";

import { Button } from "@chakra-ui/react";
import ResponsiveHero from "@shm/components/sections/ResponsiveHero";
import JoinCommunity from "@shm/components/sections/JoinCommunity";
import ProjectsList from "@shm/components/sections/explore/ProjectsList";
import TrendingProjects from "@shm/components/sections/explore/TrendingProjects";
import NewestProjects from "@shm/components/sections/explore/NewProjects";
import { useTranslation } from "next-i18next";

import { getSession } from "next-auth/react";
import { getSHMProjects, getUserUpvotedProjects } from "utils/api";
import { upvoteProject } from "services/explore.service";
import SigninContext from "context/signin-window.context";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// define page props type
export type ExplorePageProps = InferGetServerSidePropsType<typeof getStaticProps>;

export const getStaticProps = async ({ req, locale }: GetServerSidePropsContext) => {
  const session = await getSession({ req });

  const { projects, categories } = await getSHMProjects();
  const upvotedProjectsData = await getUserUpvotedProjects(session?.user?.id || "");
  return {
    // Will be passed to the page component as props
    props: {
      ...(await serverSideTranslations(locale as string, ["common", "page-alphanet"])),
      projects,
      categories,
      upvotedProjectIds: upvotedProjectsData?.upvotedProjectIds ?? [],
      sessionObject: session,
    },
  };
};

const Explore: NextPage<ExplorePageProps> = ({
  projects = [],
  categories = {},
  upvotedProjectIds = [],
  sessionObject,
}: ExplorePageProps) => {
  // to open signin window
  const { setPopup } = useContext(SigninContext);

  // convert server props into state
  const [projectsState, setProjectsState] = useState(projects);
  const [upvotedProjectsMap, setUpvotedProjectsMap] = useState(() => {
    return upvotedProjectIds.reduce((acc: Record<string, boolean>, projectId) => {
      acc[projectId] = true;
      return acc;
    }, {});
  });

  // to manage state of projects(update upvote count) and upvotedProjectsMap
  const handleUpvoteProjectState = (projectId: string, upvoted: boolean) => {
    setUpvotedProjectsMap((prevUpvotedProjectsMap) => {
      const newUpvotedProjectsMap = { ...prevUpvotedProjectsMap };
      newUpvotedProjectsMap[projectId] = upvoted;
      return newUpvotedProjectsMap;
    });
    setProjectsState((prevProjectsState) => {
      const newProjectsState = [...prevProjectsState];
      const projectIndex = newProjectsState.findIndex((project) => project.id === projectId);
      if (projectIndex === -1) {
        return prevProjectsState;
      }
      const project = { ...newProjectsState[projectIndex] };
      project.numUpvotes = upvoted ? project.numUpvotes + 1 : project.numUpvotes - 1;
      newProjectsState[projectIndex] = project;
      return newProjectsState;
    });
  };

  // this will make calls to the API, will call handleUpvoteProjectState (optimistic), and will revert by calling it again with the opposite value to revert state
  const onUpvoteProject = (projectId: string, upvoted: boolean) => {
    // if user is not signed in, take them to sign in page
    if (!sessionObject) {
      // signIn("twitter");
      setPopup(true);
      return;
    }

    // make the update on frontend state regardless of the API response
    handleUpvoteProjectState(projectId, upvoted);

    // call the upvote project service
    upvoteProject(projectId, sessionObject.user.id, upvoted)
      .then()
      .catch((err) => {
        console.error(err);

        // undo the update from frontend side if the API call fails
        handleUpvoteProjectState(projectId, !upvoted);
      });
  };

  const handleSubmitProject = (): void => {
    !sessionObject
      ? setPopup(true)
      : window.open("https://airtable.com/shrIXaaf87BzaTfYy", " _blank");
  };

  return (
    <>
      <ResponsiveHero
        heading="Discover The dApp projects on shardeum"
        cta={
          <Button onClick={handleSubmitProject} variant="primary" size="lg" mt={8}>
            Submit your project
          </Button>
        }
        src={"/explore/shardeum-ecosystem-hero-img.png"}
      />

      {projects.length > 0 && (
        <ProjectsList
          projects={projectsState}
          categories={categories}
          upvoteMap={upvotedProjectsMap}
          onUpvoteProject={onUpvoteProject}
        />
      )}
      {projects.length > 0 && (
        <TrendingProjects
          projects={projectsState}
          upvoteMap={upvotedProjectsMap}
          onUpvoteProject={onUpvoteProject}
        />
      )}
      {projects.length > 0 && (
        <NewestProjects
          projects={projectsState}
          upvoteMap={upvotedProjectsMap}
          onUpvoteProject={onUpvoteProject}
        />
      )}

      <JoinCommunity />
    </>
  );
};

export default Explore;
