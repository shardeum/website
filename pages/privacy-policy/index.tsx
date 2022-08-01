import { NotionAPI } from "notion-client";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";
import NotionPagesLinks from "constants/notion";
import { NextSeo } from "next-seo";
import { getPageTitle } from "notion-utils";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Container, Flex } from "@chakra-ui/layout";

const Page = ({
  recordMap,
  notionPageDetails,
}: {
  recordMap: ExtendedRecordMap;
  notionPageDetails: any;
}) => {
  const title = notionPageDetails.title || getPageTitle(recordMap);
  const canonical = "https://shardeum.org/" + notionPageDetails.slug + "/";
  const description = notionPageDetails.description;
  const image = notionPageDetails.image;
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        additionalMetaTags={[
          {
            property: "keywords",
            content: "shardeum,blockchain,layer1 blockchain,evm compatible blockchain",
          },
          {
            property: "twitter:image",
            content: image,
          },
        ]}
        openGraph={{
          title: title,
          type: "website",
          url: canonical,

          description: description,
          images: [
            {
              url: image,
              alt: "Shardeum Image",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "https://shardeum.org",
          handle: "@shardeum",
        }}
      />
      <Flex bg="brand.white" as="section">
        <Container
          maxW="container.xl"
          mx="auto"
          py={{ base: "9", md: "10" }}
          px={{ base: 6, xl: 0 }}
        >
          <NotionRenderer recordMap={recordMap} fullPage={false} darkMode={false} />
        </Container>
      </Flex>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const notion = new NotionAPI();
  const pageId = "privacy-policy";
  // console.log(NotionPagesLinks);
  let notionPageDetails = { slug: "", notionId: "", title: "", description: "", image: "" };
  for (const nPage of NotionPagesLinks) {
    // console.log(nPage);
    if (nPage.slug == pageId) notionPageDetails = nPage;
  }

  if (!notionPageDetails.notionId) {
    //Redirect to 404
    return {
      // returns the default 404 page with a status code of 404
      notFound: true,
    };
  }
  // const notionPageDetails = NotionPagesLinks[pageId];
  const recordMap = await notion.getPage(notionPageDetails.notionId);
  // console.log(recordMap);
  return {
    props: {
      recordMap,
      notionPageDetails,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 10, // In seconds
  };
}

export default Page;
