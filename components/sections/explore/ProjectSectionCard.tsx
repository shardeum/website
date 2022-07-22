import { FC } from "react";

import { Flex, Heading, LinkOverlay, LinkBox, Text, IconButton, Box } from "@chakra-ui/react";

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
  logo = "/Shardeum.png",
  upvotes = 0,
  isUpvoted = false,
  onUpvoteButtonClicked,
}) => {
  return (
    <LinkBox as="div">
      <Flex p="24px" pr={0} h="166px" background="brand.grey-10" color="brand.black">
        <Box minWidth="118px">
          <Image src={logo} width={118} height={118} />
        </Box>

        <Flex flexDirection="column" ml="24px" justifyContent="space-between" flexGrow={1}>
          <Heading as="h3" fontSize="lg">
            <NextLink href={"#"}>
              <LinkOverlay>{title}</LinkOverlay>
            </NextLink>
          </Heading>

          <Text noOfLines={2} color="brand.grey-80">
            {description}
          </Text>

          <CategoryBadge category={category} />
        </Flex>

        {/* Upvotes button and count */}
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          borderLeftColor="brand.grey-40"
          borderLeftWidth="1px"
          borderLeftStyle="solid"
          minW="106px"
          ml="30px"
        >
          <IconButton
            aria-label={"Upvote Button"}
            color={isUpvoted ? "brand.blue" : "brand.black"}
            icon={<ChevronUpIcon />}
            variant="unstyled"
            outline="none"
            border="none"
            _focus={{ outline: "none" }}
            isRound={true}
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
