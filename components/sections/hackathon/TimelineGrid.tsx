import { Center, Divider, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import TimelineCard from "./TimelineCard";

function TimelineGrid() {
  return (
    <Flex justifyContent="center">
      <Grid
        position="relative"
        templateColumns={["auto auto", "auto auto", "20.375rem 8.75rem 20.375rem"]}
        templateRows="repeat(8, auto)"
        rowGap={[8, 8, 0]}
      >
        <Center
          left={["4.3%", "3.8%", "50%"]}
          top="50%"
          zIndex="-1"
          transform={[
            "translate(-20%, -51.5%)",
            "translate(-20%, -51.5%)",
            "translate(-50%, -50%)",
          ]}
          position="absolute"
          height={["calc(100% - 11.6rem)", "calc(100% - 11.6rem)", "calc(100% - 9.6875rem)"]}
        >
          <Divider
            opacity=".8"
            backgroundColor="brand.white"
            borderWidth="2px"
            orientation="vertical"
          />
        </Center>
        <GridItem colStart={3} colEnd={4}>
          <TimelineCard date="01 Aug - 26 Aug 2022" description="Open for registration" />
        </GridItem>
        <GridItem
          alignSelf="center"
          justifySelf="center"
          colStart={2}
          colEnd={3}
          rowStart={1}
          rowEnd={2}
          position="relative"
          width="100%"
        >
          <Divider
            w={["70%", "80%", "50%"]}
            top="50%"
            left={["50%", "20%", "50%"]}
            zIndex="-1"
            transform={["translateY(-50%)", "translateY(-20%)"]}
            opacity=".8"
            backgroundColor="brand.white"
            borderWidth="2px"
            position="absolute"
          />
          <Image mx={[0, 0, "auto"]} src="/hackathon/section-4-radio-button.png" />
        </GridItem>
        <GridItem colStart={[3, 3, 1]} colEnd={[4, 4, 2]} rowStart={2} rowEnd={3}>
          <TimelineCard
            date="27 Aug - 27 Aug 2022"
            description="Kick Off Day - IRL Event - Bengaluru"
          />
        </GridItem>
        <GridItem
          alignSelf="center"
          justifySelf="center"
          colStart={2}
          colEnd={3}
          rowStart={2}
          rowEnd={3}
          position="relative"
          w={["2rem", "5rem", "100%"]}
        >
          <Divider
            w={["70%", "80%", "50%"]}
            top="50%"
            left={["50%", "20%", "0"]}
            transform={["translateY(-50%)", "translateY(-20%)"]}
            opacity=".8"
            zIndex="-1"
            backgroundColor="brand.white"
            borderWidth="2px"
            position="absolute"
          />

          <Image mx={[0, 0, "auto"]} src="/hackathon/section-4-radio-button.png" />
        </GridItem>
        <GridItem colStart={3} colEnd={4} rowStart={3} rowEnd={4}>
          <TimelineCard
            date="27 Aug - 07 Sep 2022"
            description="Ideation & Planning (Workshops, Mentors sessions etc)"
          />
        </GridItem>
        <GridItem
          alignSelf="center"
          justifySelf="center"
          colStart={2}
          colEnd={3}
          rowStart={3}
          rowEnd={4}
          w={["2rem", "5rem", "100%"]}
          position="relative"
        >
          <Divider
            w={["70%", "80%", "50%"]}
            top="50%"
            left={["50%", "20%", "50%"]}
            transform={["translateY(-50%)", "translateY(-20%)"]}
            opacity=".8"
            zIndex="-1"
            backgroundColor="brand.white"
            borderWidth="2px"
            position="absolute"
          />
          <Image mx={[0, 0, "auto"]} src="/hackathon/section-4-radio-button.png" />
        </GridItem>
        <GridItem colStart={[3, 3, 1]} colEnd={[4, 4, 2]} rowStart={4} rowEnd={5}>
          <TimelineCard date="08 Sep - 20 Sep 2022" description="Hackathon DApp Development" />
        </GridItem>
        <GridItem
          alignSelf="center"
          justifySelf="center"
          colStart={2}
          colEnd={3}
          rowStart={4}
          rowEnd={5}
          w={["2rem", "5rem", "100%"]}
          position="relative"
        >
          <Divider
            w={["70%", "80%", "50%"]}
            top="50%"
            left={["50%", "20%", "0"]}
            transform={["translateY(-50%)", "translateY(-20%)"]}
            opacity=".8"
            zIndex="-1"
            backgroundColor="brand.white"
            borderWidth="2px"
            position="absolute"
          />
          <Image mx={[0, 0, "auto"]} src="/hackathon/section-4-radio-button.png" />
        </GridItem>
        <GridItem colStart={3} colEnd={4} rowStart={5} rowEnd={6}>
          <TimelineCard date="20 Sep - 21 Sep 2022" description="DApp Submission" />
        </GridItem>
        <GridItem
          alignSelf="center"
          justifySelf="center"
          colStart={2}
          colEnd={3}
          rowStart={5}
          rowEnd={6}
          w={["2rem", "5rem", "100%"]}
          position="relative"
        >
          <Divider
            w={["70%", "80%", "50%"]}
            top="50%"
            left={["50%", "20%", "50%"]}
            transform={["translateY(-50%)", "translateY(-20%)"]}
            opacity=".8"
            zIndex="-1"
            backgroundColor="brand.white"
            borderWidth="2px"
            position="absolute"
          />
          <Image mx={[0, 0, "auto"]} src="/hackathon/section-4-radio-button.png" />
        </GridItem>
        <GridItem colStart={[3, 3, 1]} colEnd={[4, 4, 2]} rowStart={6} rowEnd={7}>
          <TimelineCard date="23 Sep - 23 Sep 2022" description="Winner Announcement" />
        </GridItem>
        <GridItem
          alignSelf="center"
          justifySelf="center"
          colStart={2}
          colEnd={3}
          rowStart={6}
          rowEnd={7}
          w={["2rem", "5rem", "100%"]}
          position="relative"
        >
          <Divider
            w={["70%", "80%", "50%"]}
            top="50%"
            left={["50%", "20%", "0"]}
            transform={["translateY(-50%)", "translateY(-20%)"]}
            opacity=".8"
            zIndex="-1"
            backgroundColor="brand.white"
            borderWidth="2px"
            position="absolute"
          />
          <Image mx={[0, 0, "auto"]} src="/hackathon/section-4-radio-button.png" />
        </GridItem>
        <GridItem colStart={3} colEnd={4} rowStart={7} rowEnd={8}>
          <TimelineCard date="24 Sep - 24 Sep 2022" description="The Demo Day" />
        </GridItem>
        <GridItem
          alignSelf="center"
          justifySelf="center"
          colStart={2}
          colEnd={3}
          rowStart={7}
          rowEnd={8}
          w={["2rem", "5rem", "100%"]}
          position="relative"
        >
          <Divider
            w={["70%", "80%", "50%"]}
            top="50%"
            left={["50%", "20%", "50%"]}
            transform={["translateY(-50%)", "translateY(-20%)"]}
            opacity=".8"
            zIndex="-1"
            backgroundColor="brand.white"
            borderWidth="2px"
            position="absolute"
          />
          <Image mx={[0, 0, "auto"]} src="/hackathon/section-4-radio-button.png" />
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default TimelineGrid;
