import { useContext, useState, useEffect } from "react";
import type { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";

import { Button } from "@chakra-ui/react";
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
    console.log("ON click", sessionObject);
    !sessionObject
      ? setPopup(true)
      : window.open("https://airtable.com/shrIXaaf87BzaTfYy", " _blank");
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
    setProjectSortDate(Projectdata);
    setProjectSortRandom(RandomProjectdata);
  }, []);

  const sortDate = (data: any) => {
    const arrayProject: any = [];
    data.map((element: any, index: any) => {
      const formattedDate = moment(element.dateCreated).format("YYYY-MM-DD");
      const startOfNextMonth = moment().add(1, "M").startOf("month").format("YYYY-MM-DD");
      const startOfMonth = moment().startOf("month").format("YYYY-MM-DD");

      const foundDateInRange = moment(formattedDate).isBetween(startOfMonth, startOfNextMonth);

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
      <Helmet>
        <title>{`Shardeum Ecosystem | dApps/Projects on Shardeum`}</title>
        <meta
          name="description"
          content={
            "Uncover the dApps and projects that are building on Shardeum to become an early adopter of the ecosystem"
          }
        />
      </Helmet>
      <ResponsiveHero
        heading="Explore the Shardeum Ecosystem"
        cta={
          <Button onClick={handleSubmitProject} variant="primary" size="lg" mt={8}>
            Submit your project
          </Button>
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
