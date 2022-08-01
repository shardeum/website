import {
  Box,
  Container,
  Flex,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { HackathonPageProps } from "pages/hackathon";
import React, { FC, Fragment } from "react";
import ImageCard from "./ImageCard";

const PanelOfJudges: FC<HackathonPageProps> = ({
  judges,
  mentors,
  vcs,
  angels,
  partners,
}: HackathonPageProps) => {
  return (
    <Box id="section-6" background="#EFF0F8" position="relative">
      <Image
        src="/hackathon/section-5-floating-image.png"
        position="absolute"
        bottom="0%"
        left="2%"
        zIndex="10"
        transform="translateY(73.5%)"
        width={["7rem", "8rem", "8rem", "auto"]}
      />
      <Container
        mx="auto"
        maxW="container.xl"
        px={{ base: 8, sm: 4, xl: 0 }}
        pt={{ base: 20, md: 16, lg: "6rem" }}
        pb={{ base: 20, md: 16, lg: "8rem" }}
      >
        <Tabs w="100%">
          <TabList mb="3rem" w="100%">
            <Tab
              _selected={{
                borderColor: "brand.black",
                color: "brand.black",
                fontWeight: "700",
                borderBottom: "none",
                _after: {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  height: "3px",
                  background:
                    "linear-gradient(97.77deg, #00B2FF -2.3%, #579AFF 29.87%, #D93FFF 57.73%, #FC4236 84.99%, #FFF500 113.99%)",
                },
              }}
              _focus={{ outline: 0 }}
              position="relative"
              w="20%"
              color="brand.grey-60"
              borderBottomWidth="3px"
              borderBottomColor="brand.grey-40"
              paddingBottom={[1, 3, "1.125rem"]}
              fontSize={["smaller", "medium", "1.25rem"]}
            >
              Judges
            </Tab>
            <Tab
              _selected={{
                borderColor: "brand.black",
                color: "brand.black",
                fontWeight: "700",
                borderBottom: "none",
                _after: {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  height: "3px",
                  background:
                    "linear-gradient(97.77deg, #00B2FF -2.3%, #579AFF 29.87%, #D93FFF 57.73%, #FC4236 84.99%, #FFF500 113.99%)",
                },
              }}
              _focus={{ outline: 0 }}
              position="relative"
              w="20%"
              color="brand.grey-60"
              borderBottomWidth="3px"
              borderBottomColor="brand.grey-40"
              paddingBottom={[1, 3, "1.125rem"]}
              fontSize={["smaller", "medium", "1.25rem"]}
            >
              Mentors
            </Tab>
            <Tab
              _selected={{
                borderColor: "brand.black",
                color: "brand.black",
                fontWeight: "700",
                borderBottom: "none",
                _after: {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  height: "3px",
                  background:
                    "linear-gradient(97.77deg, #00B2FF -2.3%, #579AFF 29.87%, #D93FFF 57.73%, #FC4236 84.99%, #FFF500 113.99%)",
                },
              }}
              _focus={{ outline: 0 }}
              position="relative"
              w="20%"
              borderBottomWidth="3px"
              color="brand.grey-60"
              borderBottomColor="brand.grey-40"
              paddingBottom={[1, 3, "1.125rem"]}
              fontSize={["smaller", "medium", "1.25rem"]}
            >
              Angels
            </Tab>
            <Tab
              _selected={{
                borderColor: "brand.black",
                color: "brand.black",
                fontWeight: "700",
                borderBottom: "none",
                _after: {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  height: "3px",
                  background:
                    "linear-gradient(97.77deg, #00B2FF -2.3%, #579AFF 29.87%, #D93FFF 57.73%, #FC4236 84.99%, #FFF500 113.99%)",
                },
              }}
              _focus={{ outline: 0 }}
              position="relative"
              w="20%"
              borderBottomWidth="3px"
              color="brand.grey-60"
              borderBottomColor="brand.grey-40"
              paddingBottom={[1, 3, "1.125rem"]}
              fontSize={["smaller", "medium", "1.25rem"]}
            >
              VCs
            </Tab>
            <Tab
              _selected={{
                borderColor: "brand.black",
                color: "brand.black",
                fontWeight: "700",
                borderBottom: "none",
                _after: {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  height: "3px",
                  background:
                    "linear-gradient(97.77deg, #00B2FF -2.3%, #579AFF 29.87%, #D93FFF 57.73%, #FC4236 84.99%, #FFF500 113.99%)",
                },
              }}
              _focus={{ outline: 0 }}
              position="relative"
              w="20%"
              color="brand.grey-60"
              borderBottomWidth="3px"
              borderBottomColor="brand.grey-40"
              paddingBottom={[1, 3, "1.125rem"]}
              fontSize={["smaller", "medium", "1.25rem"]}
            >
              Outreach partners
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel padding={0}>
              <Flex flexWrap="wrap" justifyContent="center" gap={[4, 4, "3rem"]}>
                {judges.map((panelMember) => (
                  <Fragment key={panelMember.id}>
                    <ImageCard
                      imageLocation={panelMember.photo}
                      name={panelMember.name}
                      designation={panelMember.designation}
                      linkedInURL={panelMember.linkedInURL}
                    />
                  </Fragment>
                ))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex flexWrap="wrap" justifyContent="center" gap={[4, 4, "3rem"]}>
                {mentors.map((panelMember) => (
                  <Fragment key={panelMember.id}>
                    <ImageCard
                      imageLocation={panelMember.photo}
                      name={panelMember.name}
                      designation={panelMember.designation}
                      linkedInURL={panelMember.linkedInURL}
                    />
                  </Fragment>
                ))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex flexWrap="wrap" justifyContent="center" gap={[4, 4, "3rem"]}>
                {vcs.map((panelMember) => (
                  <Fragment key={panelMember.id}>
                    <ImageCard
                      imageLocation={panelMember.photo}
                      name={panelMember.name}
                      designation={panelMember.designation}
                      linkedInURL={panelMember.linkedInURL}
                    />
                  </Fragment>
                ))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex flexWrap="wrap" justifyContent="center" gap={[4, 4, "3rem"]}>
                {angels.map((panelMember) => (
                  <Fragment key={panelMember.id}>
                    <ImageCard
                      imageLocation={panelMember.photo}
                      name={panelMember.name}
                      designation={panelMember.designation}
                      linkedInURL={panelMember.linkedInURL}
                    />
                  </Fragment>
                ))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex flexWrap="wrap" justifyContent="center" gap={[4, 4, "3rem"]}>
                {partners.map((panelMember) => (
                  <Fragment key={panelMember.id}>
                    <ImageCard
                      imageLocation={panelMember.photo}
                      name={panelMember.name}
                      designation={panelMember.designation}
                      linkedInURL={panelMember.linkedInURL}
                    />
                  </Fragment>
                ))}
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};

export default PanelOfJudges;
