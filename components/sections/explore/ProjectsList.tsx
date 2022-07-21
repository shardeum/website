import { Container, Flex } from "@chakra-ui/react";
import React, { Fragment } from "react";
import CategoryList from "./CategoryList";
import ProjectCard from "./ProjectCard";
import TitleAndSearchInput from "./TitleAndSearchInput";

interface Props {
  name?: string | null;
  description?: string | null;
  category?: string | null;
  logo?: string | null;
  screenShots?: string | null;
  website?: string | null;
}

function ProjectsList(projects: any) {
  return (
    <Flex bg="brand.white" as="section">
      <Container maxW="container.xl" mx="auto" pt="16" pb="28" px={{ base: 6, xl: 0 }}>
        <TitleAndSearchInput />
        <CategoryList />
        {/* {projects.map((item) => {
          return (
            <Fragment key={item.name}> */}
        <ProjectCard
          imageURL="https://dl.airtable.com/.attachments/10700c81bf9b8caa5ebda8964c24156d/d8d2f701/shardeumSwap.jpeg?ts=1658131801&userId=usrAW07lCdOEL0HwA&cs=1c4be9cb0b3baf73"
          title="Main"
          category="NFT"
          description="yo yo honey singh"
        />
        {/* </Fragment>
          );
        })} */}
      </Container>
    </Flex>
  );
}

export default ProjectsList;
