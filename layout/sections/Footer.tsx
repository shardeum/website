import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import Logo from "../../components/common/Logo";

const LinksMap = {
  General: [
    { title: "Home", href: "#" },
    { title: "Community", href: "#" },
    { title: "Super Shardians", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Languages", href: "#" },
  ],
  Resources: [
    { title: "Whitepaper", href: "#" },
    { title: "FAQ", href: "#" },
    { title: "Brand Asset Page", href: "#" },
    { title: "Public Drive Link", href: "#" },
  ],
  Contact: [
    { title: "General Enquiries", href: "#" },
    { title: "Investment Purpose", href: "#" },
  ],
};

function Footer() {
  return (
    <Flex bg="brand.grey-95" as="footer">
      <Container maxW="container.xl" mx="auto" py="12">
        <SimpleGrid columns={[1, 1, 2]} gap={["8", "12"]}>
          <Flex direction="column" justifyContent="space-between">
            <Link href="/" passHref>
              <Box as="a" >
                <Logo width={"200px"} height={"20px"} />
              </Box>
            </Link>
            <Text color="brand.grey-50">
              Copyright &copy; Shardeum {new Date().getFullYear()}
            </Text>
          </Flex>
          <SimpleGrid columns={[2, 2, 3]}>
            {Object.entries(LinksMap).map(([title, links]) => {
              return (
                <VStack alignItems="start" spacing="4" key={title}>
                  <Text color="white" fontWeight="medium">
                    {title}
                  </Text>
                  <VStack spacing="3" alignItems="start">
                    {links.map((link) => (
                      <Link href={link.href} passHref>
                        <Text
                          as="a"
                          color="brand.grey-50"
                          _hover={{ color: "brand.grey-30" }}
                        >
                          {link.title}
                        </Text>
                      </Link>
                    ))}
                  </VStack>
                </VStack>
              );
            })}
          </SimpleGrid>
        </SimpleGrid>
      </Container>
    </Flex>
  );
}

export default Footer;
