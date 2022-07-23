import { FC } from "react";

import {
  Grid,
  Flex,
  Heading,
  LinkOverlay,
  LinkBox,
  Text,
  IconButton,
  Box,
  Image,
  GridItem,
} from "@chakra-ui/react";

import NextLink from "next/link";
import { CategoryBadge } from "./CategoryBadge";
import { ChevronUpIcon } from "@chakra-ui/icons";

export type ProjectSectionCardProps = {
  id: string;
  title: string;
  category: string;
  description?: string;
  logo?: string;
  upvotes?: number;
  isUpvoted?: boolean;
  onUpvoteButtonClicked?: (upvoted: boolean) => void;
};

export const ProjectSectionCard: FC<ProjectSectionCardProps> = ({
  id,
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
      <Grid
        templateColumns={["10% auto auto", "7% auto auto", "14% auto auto", "auto auto auto"]} //xs , rest
        templateRows="repeat(2 , auto)"
        p={{ base: 4, sm: 4, md: 4, lg: 6 }}
        columnGap={4}
        maxH="10.375rem"
        background="brand.grey-10"
        color="brand.black"
      >
        <GridItem
          rowStart={1}
          rowEnd={[2, 2, 3, 3]} // xs,sm,md,lg
          colSpan={1}
          position="relative"
        >
          <Image
            src={logo}
            boxSize={["2rem", "2rem", "7.375rem", "7.375rem"]} // xs,sm,md,lg
          />
        </GridItem>

        <GridItem>
          <Heading as="h3" fontSize="lg">
            <NextLink href={`/explore/${id}`}>
              <LinkOverlay>{title}</LinkOverlay>
            </NextLink>
          </Heading>
        </GridItem>
        <GridItem
          minW="100%"
          textAlign="center"
          borderLeftColor="brand.grey-40"
          borderLeftWidth="1px"
          borderLeftStyle="solid"
          colStart={3}
          colEnd={4}
          rowStart={1}
          rowEnd={3}
          pl={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontWeight="medium" pb="1.125rem">
            &#9650;
          </Text>
          <Text fontWeight="medium">{upvotes}</Text>
        </GridItem>
        <GridItem
          overflow="hidden"
          colStart={[1, 1, 2, 2]} // xs,sm,md,lg
          colEnd={3}
        >
          <Text color="brand.grey-80" textOverflow="ellipsis">
            dApp 1 is an NFT application based on Shardeum blockchain. Their unique…
          </Text>
          <CategoryBadge category={category} />
        </GridItem>
        {/* Upvotes button and count */}
      </Grid>
    </LinkBox>
  );
};
