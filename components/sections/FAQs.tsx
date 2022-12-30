import { Box, Container, Flex, Heading, VStack } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

type FAQItem = {
  q: React.ReactNode;
  a: string;
};

type FAQProps = {
  heading?: React.ReactNode;
  content?: FAQItem[];
};

const FAQs = ({ heading, content }: FAQProps) => {
  function createMarkup(c: any) {
    return { __html: c };
  }

  return (
    <Flex bg="brand.grey-10" as="section">
      <Container maxW="container.xl" mx="auto" pt="32" pb="32">
        {heading && (
          <Heading size="2xl" color="brand.grey-90" mb={20}>
            <h2>{heading}</h2>
          </Heading>
        )}
        <VStack spacing="40" alignItems="start" w="full">
          <Accordion
            allowMultiple
            defaultIndex={0}
            allowToggle
            w="full"
            py={10}
            color="brand.grey-90"
          >
            {content?.map((item, index) => (
              <AccordionItem key={index} bg="brand.white" mb={4}>
                <AccordionButton
                  px={5}
                  py={5}
                  _hover={{ bg: "brand.white" }}
                  _expanded={{ border: "none" }}
                >
                  <Box flex="1" textAlign="left">
                    <Heading size={"lg"}>
                      <h3>{item.q}</h3>
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel className="brand-orange-href" px={5} py={8}>
                  <>
                    <div dangerouslySetInnerHTML={createMarkup(item.a)}></div>
                  </>
                  {/* <ReactMarkdown linkTarget="_blank">
                  </ReactMarkdown> */}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
      </Container>
    </Flex>
  );
};

export default FAQs;
