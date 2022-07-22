import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export type ProjectCardProps = {
  imageURL?: string;
  title?: string;
  description?: string;
  category?: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  category,
  imageURL,
}) => {
  return (
    <Box width="368px" height="448px" background="brand.grey-10" px="2rem" py="2rem">
      <Image width={80} height={80} src={String(imageURL)} alt={title + "Image"} />
      <Text
        mt="2rem"
        color={"brand.grey-80"}
        fontSize={{ base: "md", sm: "md", lg: "lg" }}
        fontWeight={"bold"}
      >
        {title}
      </Text>
      <Text
        fontSize={{ base: "md", lg: "md" }}
        textAlign="left"
        lineHeight={{ base: "7", md: "8" }}
        color="brand.grey-80"
      >
        {description}
      </Text>
      <Box px="1.2rem" py="0.6rem" maxWidth="fit-content" background="brand.grey-30">
        <Text color="brand.grey-80">{category}</Text>
      </Box>
    </Box>
  );
};

export default ProjectCard;
