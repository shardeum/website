import { Box, Container, Flex, HStack, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import NavLink from "./common/NavLink";

const Navbar = () => {
  return (
    <Flex bg="black" w="100%" p={2} color="white">
      <Container maxW="container.xl">
        <Flex justify="space-between" align={"center"}>
          <Box>
            <Image src={"/shardeum.svg"} width={"200px"} height={"20px"} />
          </Box>
          <HStack spacing={"1rem"}>
            <NavLink>Yooo</NavLink>
            <Box>Community</Box>
            <Box>Whitepaper</Box>
            <Box>Learn</Box>
            <Box>Blog</Box>
            <Box>Language</Box>
          </HStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
