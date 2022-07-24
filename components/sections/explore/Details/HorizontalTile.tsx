import { Box, Container, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

function HorizontalTile() {
  return (
    <Container
      mx="auto"
      maxW="container.xl"
      px={{ base: 8, xl: 0 }}
      pt={{ base: 4, md: 16 }}
      pb={{ base: 20, md: 16 }}
    >
      <Grid padding="2.5rem">
        <Image boxSize="11.25" />
        <Box>
          <Text fontSize={{}}></Text>
        </Box>
      </Grid>
    </Container>
  );
}

export default HorizontalTile;
