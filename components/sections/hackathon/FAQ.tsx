import {
  Text,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
} from "@chakra-ui/react";
import RegisterPromoTile from "./RegisterPromoTile";

function FAQ() {
  return (
    <Box background="brand.grey-90">
      <Text textAlign="center" pt="4rem" mb="3.75rem" fontSize="7xl" fontWeight="bold">
        About Shardeum
      </Text>
      <Box mx="auto" pt="6rem" pb="6.875rem" maxW={["100%", "100%", "90%", "90%", "65%"]}>
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{
                  fontWeight: "700",
                }}
                py={6}
              >
                <Box fontSize="2xl" flex="1" textAlign="left">
                  Who is eligible?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Shardeum is an EVM-based L1 smart contract platform with a mission to enable
              decentralization for everyone. Shardeum co-founded by Nischal shetty and Omar Syed.
              Currently, decentralized applications are limited by rising gas fees and long
              transaction queues as a result of blockchains that can&apos;t scale.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{
                  fontWeight: "700",
                }}
                py={6}
              >
                <Box fontSize="2xl" flex="1" textAlign="left">
                  Who is eligible?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Shardeum is an EVM-based L1 smart contract platform with a mission to enable
              decentralization for everyone. Shardeum co-founded by Nischal shetty and Omar Syed.
              Currently, decentralized applications are limited by rising gas fees and long
              transaction queues as a result of blockchains that can&apos;t scale.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{
                  fontWeight: "700",
                }}
                py={6}
              >
                <Box fontSize="2xl" flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Container
        mx="auto"
        maxW="container.xl"
        px={{ base: 8, xl: 0 }}
        pt={{ base: 4, md: 16, lg: "6rem" }}
        pb={{ base: 20, md: 16, lg: "8rem" }}
      >
        <RegisterPromoTile
          gradientTitleIndex={0}
          firstLine="#BuildWeb3"
          secondLine="India 2022"
          description="Create Solutions to innovate blockchain.
            Hackathon 2022."
          reverse={true}
        />
      </Container>
    </Box>
  );
}

export default FAQ;
