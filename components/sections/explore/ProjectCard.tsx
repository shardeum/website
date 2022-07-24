import { Box, color, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { CategoryBadge } from "./CategoryBadge";

export type ProjectCardProps = {
  imageURL?: string;
  title: string;
  description: string;
  category: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  category,
  imageURL,
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
      <Text mb="6" color="brand.grey-70" fontWeight="semibold">
        <Text as="span" color="#EC5B29">
          &#9733;&nbsp;&nbsp;
        </Text>
        4.6
      </Text>

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
