import { Container, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NewsletterInput from "../../components/common/NewsletterInput";
import JoinCommunity from "../../components/sections/JoinCommunity";
import NextLink from "next/link";

function Newsletter() {
  const { t: pageTranslation } = useTranslation("page-newsletter");
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `<script type="application/ld+json">
            {
              "@context": "https://schema.org/", 
              "@type": "BreadcrumbList", 
              "itemListElement": [{
                "@type": "ListItem", 
                "position": 1, 
                "name": "Home",
                "item": "https://shardeum.org/"  
              },{
                "@type": "ListItem", 
                "position": 2, 
                "name": "Newsletter",
                "item": "https://shardeum.org/newsletter/"  
              }]
            }
            </script>	`,
        }}
      ></script>
      <Container maxW="container" mx="auto" py="12" px={{ base: "6", xl: "0" }} bg="brand.black">
        <VStack
          spacing="6"
          maxW={{ base: "xl", lg: "3xl" }}
          mx="auto"
          my="auto"
          h={{ base: "30vh", lg: "50vh" }}
          justifyContent="center"
        >
          <VStack
            alignItems={{ base: "left", md: "center" }}
            spacing="6"
            maxWidth="2xl"
            mx="auto"
            w="full"
          >
            <Text
              fontSize={{ base: "md", lg: "xl" }}
              textAlign="left"
              lineHeight={{ base: "7", md: "8" }}
              color={"brand.grey-20"}
            >
              <p>
                <NextLink href="/" passHref>
                  Home
                </NextLink>{" "}
                / Newsletter
              </p>
            </Text>
            <Text fontSize={{ base: "base", md: "xl" }} color="brand.white">
              <h1>{pageTranslation("page-newsletter-newsletter-title")}</h1>
            </Text>
          </VStack>
          <NewsletterInput type="newsletterPage" />
        </VStack>
      </Container>
      <JoinCommunity />
    </>
  );
}
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "page-newsletter"])),
    },
  };
}

export default Newsletter;
