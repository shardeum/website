import { FC } from "react";

import { Flex, Heading, LinkOverlay, LinkBox, Text, IconButton } from "@chakra-ui/react";

import Image from "next/image";
import NextLink from "next/link";
import { CategoryBadge } from "./CategoryBadge";
import { ChevronUpIcon } from "@chakra-ui/icons";

export type ProjectSectionCardProps = {
  title: string;
  category: string;
  description?: string;
  logo?: string;
  upvotes?: number;
  isUpvoted?: boolean;
  onUpvoteButtonClicked?: (upvoted: boolean) => void;
};

export const ProjectSectionCard: FC<ProjectSectionCardProps> = ({
  title,
  category,
  description = "",
  logo = "",
  upvotes = 0,
  isUpvoted = false,
  onUpvoteButtonClicked,
}) => {
  return (
    <LinkBox as="div">
      <Flex p="24px" h="166px">
        <Image src={logo} />

        <Flex flexDirection="column" ml="24px" justifyContent="space-between">
          <Heading as="h3" fontSize="lg">
            <NextLink href={"#"}>
              <LinkOverlay>{title}</LinkOverlay>
            </NextLink>
          </Heading>

          <Text noOfLines={2}>{description}</Text>

          <CategoryBadge category={category} />
        </Flex>

        {/* Upvotes button and count */}
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          borderLeft="1px solid brand.grey"
        >
          <IconButton
            aria-label={"Upvote Button"}
            color={isUpvoted ? "brand.blue" : "brand.black"}
            icon={<ChevronUpIcon />}
            onClick={() => {
              onUpvoteButtonClicked && onUpvoteButtonClicked(!isUpvoted);
            }}
          />

          {upvotes}
        </Flex>
      </Flex>
    </LinkBox>
  );
};
