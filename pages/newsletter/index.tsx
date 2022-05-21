import { Container, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NewsletterInput from "../../components/common/NewsletterInput";
import JoinCommunity from "../../components/sections/JoinCommunity";

function Newsletter() {
  const { t: pageTranslation } = useTranslation("page-newsletter");
  return (
    <>
      <Container maxW="container.xl" mx="auto" py="12" px={{ base: "6", xl: "0" }} bg="brand.black">
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
            <Text fontSize={{ base: "base", md: "xl" }} color="brand.white">
              {pageTranslation("page-newsletter-newsletter-title")}
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
