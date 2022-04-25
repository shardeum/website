import { Box, Container, Flex, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

type UseCaseItem = {
  title: string;
  description: string;
  Icon?: React.FunctionComponent | React.ReactNode;
};

const UseCaseItem = ({ title, description, Icon }: UseCaseItem) => {
  return (
    <VStack alignItems="start">
      <VStack spacing="5" alignItems="start">
        {Icon}
        <Text fontSize="3xl" color="brand.black" fontWeight="bold">
          {title}
        </Text>
      </VStack>
      <Text fontSize="xl" color="brand.grey-70" fontWeight="medium" maxW="xl">
        {description}
      </Text>
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
      <Container maxW="container.xl" mx="auto" pt="32" pb="32">
        <VStack spacing="20" alignItems="start" w="full" pb="16">
          <SimpleGrid columns={[1, 2]} justifyContent="space-between" w="full">
            <VStack alignItems="start" spacing="20">
              {heading && (
                <Heading size="2xl" color="brand.grey-90">
                  {heading}
                </Heading>
              )}

              {descriptiveMedia && content?.length && (
                <UseCaseItem
                  Icon={content[0]["Icon"]}
                  title={content[0]["title"]}
                  description={content[0]["description"]}
                />
              )}
            </VStack>

            {/* In case an image / descriptive media is present then show it here */}
            {descriptiveMedia}
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
