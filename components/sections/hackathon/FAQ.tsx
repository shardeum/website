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
        FAQ
      </Text>
      <Box
        mx="auto"
        pt={[3, 4, "6rem"]}
        pb={[4, 20, 20]}
        maxW={["100%", "100%", "90%", "90%", "65%"]}
      >
        <Accordion padding={[6, 6, 8, 0]}>
          <AccordionItem
            _focus={{
              outline: "none",
            }}
          >
            <h2>
              <AccordionButton
                _expanded={{
                  fontWeight: "700",
                }}
                _focus={{
                  outline: "none",
                }}
                py={5}
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
                _focus={{
                  outline: "none",
                }}
                py={6}
              >
                <Box fontSize="2xl" flex="1" textAlign="left">
                  What is the prize amount?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>It&apos;s $25000 USD</AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{
                  fontWeight: "700",
                }}
                _focus={{
                  outline: "none",
                }}
                py={6}
              >
                <Box fontSize="2xl" flex="1" textAlign="left">
                  What is the hackathon duration?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>4 weeks (online).</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{
                  fontWeight: "700",
                }}
                _focus={{
                  outline: "none",
                }}
                py={6}
              >
                <Box fontSize="2xl" flex="1" textAlign="left">
                  Is it online?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes. It is online. We are also planning one day IRL as a Kickoff day event on 27 Aug
              2022.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{
                  fontWeight: "700",
                }}
                _focus={{
                  outline: "none",
                }}
                py={6}
              >
                <Box fontSize="2xl" flex="1" textAlign="left">
                  Do we get funding opportunities?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              We have participation from a few VCs and accelerator programs. If they liked your
              product on demo day, you will get an opportunity.{" "}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{
                  fontWeight: "700",
                }}
                _focus={{
                  outline: "none",
                }}
                py={6}
              >
                <Box fontSize="2xl" flex="1" textAlign="left">
                  I am new to web3. Can I participate in this hackathon?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Ofcourse. Since it is 4 weeks hackathon, you can attend our mentorship sessions,
              workshops for first 2 weeks and participate in hackathon in last 2 weeks{" "}
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
