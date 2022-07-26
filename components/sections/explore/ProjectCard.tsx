import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { getNumberWithSuffix } from "@shm/utils";
import Image from "next/image";
import React from "react";
import { CategoryBadge } from "./CategoryBadge";
import { HorizontalTileButton } from "./Details/HorizontalTileButton";

export type ProjectCardProps = {
  imageURL?: string;
  title: string;
  description: string;
  category: string;
  userUpvotedState: boolean;
  onUpvoteProject: () => void;
  upvoteCount: number;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  category,
  imageURL,
  userUpvotedState,
  onUpvoteProject,
  upvoteCount = 0,
}) => {
  const numProjectsPerPage: number | undefined = useBreakpointValue({
    lg: 170,
    base: 100,
  });

  return (
    <Box
      w={{ lg: "32.5%", sm: "20.375rem" }}
      maxW={{ lg: "32.5%", sm: "20.375rem" }}
      h={{ lg: "28rem", base: "27rem" }}
      minH={{ lg: "28rem", base: "27rem" }}
      background="brand.grey-10"
      px="2rem"
      py="2rem"
    >
      <Image width={80} height={80} src={String(imageURL)} alt={title + "Image"} />
      <Text
        mt={{ lg: "8", sm: "6" }}
        mb={{ base: "2" }}
        color="brand.grey-80"
        fontSize={{ base: "md", sm: "md", lg: "lg" }}
        fontWeight={"bold"}
      >
        {title}
      </Text>
      {/* <Text mb="6" color="brand.grey-70" fontWeight="semibold">
        <Text as="span" color="#EC5B29">
          &#9733;&nbsp;&nbsp;
        </Text>
        4.6
      </Text> */}
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

      {numProjectsPerPage && description?.length > numProjectsPerPage ? (
        <Text
          mb={{ base: "8" }}
          fontSize={{ base: "md", lg: "md" }}
          textAlign="left"
          color="brand.grey-80"
        >
          {description.slice(0, numProjectsPerPage)}...
          <Text cursor="pointer" as="span" color="#2031E6">
            read more
          </Text>
        </Text>
      ) : (
        <Text
          mb={{ base: "8" }}
          fontSize={{ base: "md", lg: "md" }}
          textAlign="left"
          color="brand.grey-80"
        >
          {description}
        </Text>
      )}

      <CategoryBadge category={category} />
    </Box>
  );
};

export default ProjectCard;
