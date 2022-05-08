import { Box, Container, Flex, SimpleGrid, VStack } from "@chakra-ui/react";
import Feature from "../../components/common/Feature";
import SectionHeading from "../../components/common/SectionHeading";

type UseCaseItem = {
  title: string;
  description: string;
  Icon?: React.FunctionComponent;
};

const UseCaseItem = ({ title, description, Icon }: UseCaseItem) => {
  return (
    <VStack alignItems="start" spacing={{ base: "5" }}>
      {Icon && <Icon />}
      <Box pr={{ md: "2", lg: "20" }}>
        <Feature
          title={title}
          titleSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          description={description}
          descriptionSize={{
            md: "xl",
          }}
        />
      </Box>
    </VStack>
  );
};

type UseCaseSection = {
  heading?: React.ReactNode;
  descriptiveMedia?: React.ReactNode;
  content?: UseCaseItem[];
};

const UseCases = ({ heading, descriptiveMedia, content }: UseCaseSection) => {
  return (
    <Flex bg="brand.white" as="section">
      <Container
        maxW="container.xl"
        mx="auto"
        py={{ base: "9", md: "20", lg: "32" }}
        px={{ base: 6, xl: 0 }}
      >
        <VStack spacing={{ base: "8", md: "8" }} alignItems="start" w="full" pb="16">
          <SimpleGrid columns={[1, 2]} justifyContent="space-between" w="full">
            <VStack alignItems="start" spacing="20">
              {heading && <SectionHeading color="brand.grey-90">{heading}</SectionHeading>}

              {descriptiveMedia && content?.length && (
                <UseCaseItem
                  Icon={content[0]["Icon"]}
                  title={content[0]["title"]}
                  description={content[0]["description"]}
                />
              )}
            </VStack>

            {/* In case an image / descriptive media is present then show it here */}
            {descriptiveMedia && (
              <Box display={{ base: "none", md: "block" }}>{descriptiveMedia}</Box>
            )}
          </SimpleGrid>
        </VStack>
        <SimpleGrid columns={[1, 2]} spacingX={30}>
          {content
            ?.filter((useCase, index: number) => (descriptiveMedia ? index !== 0 : true))
            .map((useCase: UseCaseItem) => (
              <Box py="16" borderTop="1px" borderColor="brand.grey-30" key={useCase.title}>
                <UseCaseItem
                  Icon={useCase.Icon}
                  title={useCase.title}
                  description={useCase.description}
                />
              </Box>
            ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default UseCases;
