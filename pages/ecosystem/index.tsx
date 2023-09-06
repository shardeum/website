import { useContext, useState, useEffect } from "react";
import Head from "next/head";

import type { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";

import { Box, Button, Stack } from "@chakra-ui/react";
import ResponsiveHero from "@shm/components/sections/ResponsiveHero";
import JoinCommunity from "@shm/components/sections/JoinCommunity";
import ProjectsList from "@shm/components/sections/explore/ProjectsList";
import TrendingProjects from "@shm/components/sections/explore/TrendingProjects";
import NewestProjects from "@shm/components/sections/explore/NewProjects";
import { useTranslation } from "next-i18next";

import { getSession, useSession } from "next-auth/react";
import { getSHMProjects, getUserUpvotedProjects } from "utils/api";
import { upvoteProject } from "services/explore.service";
import SigninContext from "context/signin-window.context";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CLAIM_100_SHM_LINK, REPORT_BUGS } from "constants/links";
import { Helmet } from "react-helmet";

import { useRouter } from "next/router";
import moment from "moment";

// define page props type
export type ExplorePageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps = async ({ req, locale }: GetServerSidePropsContext) => {
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
  const router = useRouter();
  const { t: pageTranslation } = useTranslation(["page-alphanet"]);
  const { t: commonTranslation } = useTranslation(["common"]);

  // to open signin window
  const { setPopup } = useContext(SigninContext);
  // get session from hook
  const { data: session } = useSession();
  // if user was previously not signed in, but has signed in now, do a reload
  if (!sessionObject && session) router.reload();

  // const { data: sessionData } = useSession();

  // convert server props into state
  const [projectsState, setProjectsState] = useState(projects);
  const [projectSort, setProjectSort] = useState(projects);
  const [projectSortRandom, setProjectSortRandom] = useState(projects);
  const [projectSortUpvote, setProjectSortUpvote] = useState(projects);
  const [projectSortDate, setProjectSortDate] = useState([]);
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
    // window.alert("Disabled for the momment")
    //uncomment code to enable upvote functionality and comment/ remove above line
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
    // console.log("ON click", sessionObject);
    // !sessionObject
    //   ? setPopup(true)
    //   : window.open("https://airtable.com/shrIXaaf87BzaTfYy", " _blank");
    window.open("https://airtable.com/shrIXaaf87BzaTfYy", "_blank");
  };

  const sort = () => {
    projectSort.sort(function (a, b) {
      const nA = a.name.toLowerCase();
      const nB = b.name.toLowerCase();

      if (nA < nB) return -1;
      else if (nA > nB) return 1;
      return 0;
    });
  };

  const sortUpvote = () => {
    projectSortUpvote.sort(function (a, b) {
      const nA = a.numUpvotes;
      const nB = b.numUpvotes;

      if (nA < nB) return -1;
      else if (nA > nB) return 1;
      return 0;
    });
  };

  useEffect(() => {
    // sort();
    // sortUpvote();
    const Projectdata = sortDate(projectSort);
    const RandomProjectdata = randomiseProject(projectSort);
    setProjectSortDate(Projectdata.reverse());
    setProjectSortRandom(RandomProjectdata);
  }, []);

  const sortDate = (data: any) => {
    const arrayProject: any = [];
    data.map((element: any, index: any) => {
      const formattedDate = moment(element.dateCreated).format("YYYY-MM-DD");
      const startOfNextMonth = moment().add(1, "M").startOf("month").format("YYYY-MM-DD");
      const startOfLastMonth = moment().subtract(1, "M").startOf("month").format("YYYY-MM-DD");
      const startOfMonth = moment().startOf("month").format("YYYY-MM-DD");

      // const foundDateInRange = moment(formattedDate).isBetween(startOfMonth, startOfNextMonth);
      const foundDateInRange = moment(formattedDate).isBetween(startOfLastMonth, startOfNextMonth);

      if (foundDateInRange === true && element.status === "accepted") {
        arrayProject.push(element);
      }
    });
    return arrayProject;
  };

  const randomiseProject = (array: any) => {
    // eslint-disable-next-line prefer-const
    // let dataArray = array;
    // for (let i = dataArray.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [dataArray[i], dataArray[j]] = [dataArray[j], dataArray[i]];
    // }

    const TempDataArray: any = [];
    let dataArray = array
      .map((value: any) => ({ value, sort: Math.random() }))
      .sort((a: any, b: any) => a.sort - b.sort)
      .map(({ value }: any) => value);
    dataArray.map((element: any, index: any) => {
      if (element.status === "accepted") {
        TempDataArray.push(element);
      }
    });
    dataArray = TempDataArray;
    return dataArray;
  };

  return (
    <>
      <Head>
        <title>{`Shardeum Ecosystem | Dapps/Projects on Shardeum`}</title>
        <meta
          name="description"
          content={
            "Uncover the dapps and projects that are building on Shardeum to become an early adopter of the ecosystem"
          }
        />
        <meta
          name="keywords"
          content="shardeum,blockchain,layer1 blockchain,evm based blockchain"
        />

        {/* Facebook */}
        <meta property="og:url" content={`https://shardeum.org/ecosystem/`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Shardeum Ecosystem | dapps/Projects on Shardeum`} />
        <meta
          property="og:description"
          content={`Uncover the dapps and projects that are building on Shardeum to become an early adopter of the ecosystem`}
        />
        <meta property="og:image" content={`https://shardeum.org/Shardeum.png`} />

        {/* Twiter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://shardeum.org/" />
        <meta property="twitter:url" content={`https://shardeum.org/ecosystem/`} />
        <meta
          property="twitter:title"
          content={`Shardeum Ecosystem | dapps/Projects on Shardeum`}
        />
        <meta
          property="twitter:description"
          content={`Uncover the dapps and projects that are building on Shardeum to become an early adopter of the ecosystem`}
        />
        <meta property="twitter:image" content={`https://shardeum.org/Shardeum.png`} />

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

      <ResponsiveHero
        heading="Explore the Shardeum Ecosystem"
        cta={
          <>
            <Stack
              spacing="4"
              direction={{ base: "column", sm: "row" }}
              width={{ base: "full", sm: "auto" }}
            >
              <Button onClick={handleSubmitProject} variant="primary" size="lg">
                Submit your project
              </Button>
              {/* <Button
                as="a"
                variant="primary"
                size="lg"
                rel="noopener noreferrer"
                target="_blank"
                href={`https://shardeum.org/blog/shardeum-open-source/`}
              >
                Contribute to Shardeum GitLab
              </Button> */}
            </Stack>
          </>
        }
        src={"/explore/shardeum-ecosystem-hero-img.png"}
      />

      {projectSortRandom.length > 0 && (
        <ProjectsList
          projects={projectSortRandom}
          categories={categories}
          upvoteMap={upvotedProjectsMap}
          onUpvoteProject={onUpvoteProject}
        />
      )}
      {/* {projectSortUpvote.length > 0 && (
        <TrendingProjects
          projects={projectsState}
          upvoteMap={upvotedProjectsMap}
          onUpvoteProject={onUpvoteProject}
        />
      )} */}
      {projectSortDate.length > 0 && (
        <NewestProjects
          projects={projectSortDate}
          upvoteMap={upvotedProjectsMap}
          onUpvoteProject={onUpvoteProject}
        />
      )}

      <JoinCommunity />
    </>
  );
};

export default Explore;
