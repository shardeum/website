import { FC, useContext, useState } from "react";

import { Button, Container, Grid, GridItem, Img, Text, VStack } from "@chakra-ui/react";
import CategoryBadge from "../CategoryBadge";

// types/models
import { Session } from "next-auth";
import { Project } from "models/project";
import { signIn } from "next-auth/react";
import { upvoteProject } from "services/explore.service";
import { getNumberWithSuffix } from "@shm/utils";
import { HorizontalTileButton } from "./HorizontalTileButton";
import SigninContext from "context/signin-window.context";

type Links = {
  twitter: string;
  discord: string;
};

export type HorizontalTileProps = {
  project: Project;
  userUpvoted: boolean;
  session: Session | null;
  links?: Links;
};

export const HorizontalTile: FC<HorizontalTileProps> = ({
  project,
  userUpvoted,
  session,
  links,
}) => {
  const [userUpvotedState, setUserUpvotedState] = useState(userUpvoted);
  const [upvoteCount, setUpvoteCount] = useState(project.numUpvotes);

  // to open signin window
  const { setPopup } = useContext(SigninContext);

  // to manage state of projects(update upvote count) and upvotedProjectsMap
  const handleUpvoteProjectState = (upvoted: boolean) => {
    setUpvoteCount((curCount) => {
      if (upvoted) {
        return curCount + 1; // increment since we are going to upvote
      } else {
        return curCount - 1; // decrement since we are going to negate upvoted state
      }
    });
    setUserUpvotedState(upvoted);
  };

  // this will make calls to the API, will call handleUpvoteProjectState (optimistic), and will revert by calling it again with the opposite value to revert state
  const onUpvoteProject = () => {
    // if user is not signed in, take them to sign in page
    if (!session) {
      // signIn("twitter");
      setPopup(true);
      return;
    }

    const upvoted = !userUpvotedState;

    // make the update on frontend state regardless of the API response
    handleUpvoteProjectState(upvoted);

    // call the upvote project service
    upvoteProject(project.id, session.user?.id, upvoted)
      .then()
      .catch((err) => {
        console.error(err);

        // undo the update from frontend side if the API call fails
        handleUpvoteProjectState(!upvoted);
      });
  };

  return (
    <Container
      mx="auto"
      maxW="container.xl"
      px={{ base: 8, xl: 0 }}
      pt={{ base: 4, md: 16 }}
      pb={{ base: 20, md: 16 }}
    >
      <Grid
        backgroundColor="brand.grey-10"
        templateColumns="auto auto auto"
        columnGap={8}
        padding="2.5rem"
      >
        <GridItem>
          <Img src={project.logo || "/Shardeum.png"} boxSize={["7.5rem", "11.25rem"]} alt="logo" />
        </GridItem>
        <GridItem>
          <Text mb="4" fontWeight="medium" color="brand.grey-90" fontSize={["3xl", "4xl", "5xl"]}>
            {project.name}
          </Text>
          <Text
            mb="4"
            lineHeight={{ base: "7", md: "8" }}
            fontWeight="thin"
            color="brand.grey-90"
            fontSize="2xl"
          >
            {project.description}
          </Text>
          <CategoryBadge category="DAO" />
        </GridItem>
        <GridItem>
          <VStack w={["100%", "175px"]}>
            <HorizontalTileButton
              onClick={onUpvoteProject}
              bg={userUpvotedState ? "brand.grey-90" : "brand.grey-5"}
              color={userUpvotedState ? "brand.grey-5" : "brand.grey-90"}
            >
              <Text as="span" transform={`rotateX(${userUpvotedState ? 180 : 0}deg)`}>
                &#9650;
              </Text>
              &nbsp;&nbsp; Upvote{userUpvotedState ? "d" : ""} &nbsp;
              <Text as="span" color="brand.grey-50">
                {getNumberWithSuffix(upvoteCount)}
              </Text>
            </HorizontalTileButton>
            <HorizontalTileButton>&nbsp;&nbsp; Share</HorizontalTileButton>
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default HorizontalTile;
