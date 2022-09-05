import { FC, useContext, useState } from "react";

import { Container, Flex, Grid, GridItem, HStack, Img, Text } from "@chakra-ui/react";
import CategoryBadge from "../CategoryBadge";

// types/models
import { Session } from "next-auth";
import { Project } from "models/project";
import { upvoteProject } from "services/explore.service";
import { getNumberWithSuffix } from "@shm/utils";
import { HorizontalTileButton } from "./HorizontalTileButton";
import SigninContext from "context/signin-window.context";
import { ShareIcon, ShareLinkIcon } from "@shm/Icons";
import Image from "next/image";
import Link from "next/link";

export type HorizontalTileProps = {
  project: Project;
  userUpvoted: boolean;
  session: Session | null;
  onOpen: () => void;
};

export const HorizontalTile: FC<HorizontalTileProps> = ({
  project,
  userUpvoted,
  session,
  onOpen,
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
        templateColumns={["auto auto", "auto auto", "auto auto", "auto auto auto"]}
        templateRows={[
          "repeat(5, auto)",
          "auto auto auto auto",
          "auto 4rem auto auto",
          "auto auto auto",
        ]}
        columnGap={[0, 8]}
        padding="2.5rem"
      >
        <GridItem mb={[6, 8, 8, 0]} colStart={1} colEnd={2} rowStart={[1]} rowEnd={[2, 2, 2, 4]}>
          <Img
            src={project.logo || "/Shardeum.png"}
            margin={["0 auto", 0]}
            boxSize={["7.5rem", "11.25rem"]}
            alt="logo"
          />
        </GridItem>
        <GridItem
          colStart={[1, 1, 1, 2]}
          colEnd={[2, 1, 1, 3]}
          rowStart={[2, 2, 2, 1]}
          rowEnd={[3, 3, 3, 2]}
        >
          <Text
            textAlign={["center", "left"]}
            mb={[4, 0, 4]}
            fontWeight="medium"
            color="brand.grey-90"
            fontSize={["3xl", "4xl", "5xl"]}
          >
            {project.name}
          </Text>
        </GridItem>
        <GridItem
          colStart={[1, 1, 1, 2]}
          colEnd={[2, 1, 1, 3]}
          rowStart={[4, 3, 3, 2]}
          rowEnd={[5, 4, 4, 3]}
        >
          <Text
            mb="4"
            lineHeight={{ base: "7", md: "8" }}
            fontWeight="normal"
            color="brand.grey-90"
            fontSize="xl"
          >
            {project.description}
          </Text>
          <CategoryBadge category={project.category} />
        </GridItem>
        <GridItem
          colStart={[1, 2, 2, 3]}
          colEnd={[2, 3, 3, 4]}
          rowStart={[3, 2, 2, 1]}
          rowEnd={[4, 3, 3, 3]}
        >
          <Flex
            marginBottom={[6, 0]}
            direction={["row", "column"]}
            columnGap={2}
            rowGap={[0, 2]}
            w={["100%", "175px"]}
          >
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
            <HorizontalTileButton onClick={onOpen}>
              <ShareIcon />
              &nbsp;&nbsp; Share
            </HorizontalTileButton>
          </Flex>
        </GridItem>
        <GridItem
          colStart={[1, 1, 1, 2]}
          colEnd={[2, 3, 3, 4]}
          rowStart={[5, 4, 4, 3]}
          rowEnd={[6, 4]}
          display="flex"
          justifyContent="space-between"
          mt="6"
        >
          <HStack columnGap={3}>
            <ShareLinkIcon />
            <Link href={project.githubUrl}>
              <Image
                src="/community/icons/github.svg"
                alt="community-logo"
                width={24}
                height={24}
              />
            </Link>
          </HStack>

          <Text color="brand.grey-60">
            Listed on {new Date(project.dateCreated).toLocaleDateString()}
          </Text>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default HorizontalTile;
