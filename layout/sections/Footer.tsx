import { Box, Container, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import Logo from "../../components/common/Logo";
import { BLOG_URL, COMMUNITY_URL, WHITEPAPER_URL } from "../../constants/links";

const LinksMap = {
  General: [
    { title: "Home", href: "/" },
    { title: "Community", href: COMMUNITY_URL },
    { title: "Super Shardians", href: "#" },
    { title: "Blog", href: BLOG_URL },
    { title: "Languages", href: "#" },
  ],
  Resources: [
    { title: "Whitepaper", href: WHITEPAPER_URL },
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
              <Box as="a">
                <Logo />
              </Box>
            </Link>
            <Text color="brand.grey-50" display={{ base: "none", md: "block" }}>
              Copyright &copy; Shardeum {new Date().getFullYear()}
            </Text>
          </Flex>
          <SimpleGrid columns={[2, 2, 3]} gap={{ base: 6 }} rowGap={{ base: 10 }}>
            {Object.entries(LinksMap).map(([title, links]) => {
              return (
                <VStack alignItems="start" spacing="4" key={title}>
                  <Text color="white" fontWeight="medium">
                    {title}
                  </Text>
                  <VStack spacing="3" alignItems="start">
                    {links.map((link) => (
                      <Link href={link.href} passHref key={link.href}>
                        <Text as="a" color="brand.grey-50" _hover={{ color: "brand.grey-30" }}>
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
        <Text color="brand.grey-50" display={{ md: "none" }} mt="10">
          Copyright &copy; Shardeum {new Date().getFullYear()}
        </Text>
      </Container>
    </Flex>
  );
}

export default Footer;
