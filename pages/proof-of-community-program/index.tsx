/* eslint-disable react/no-unknown-property */
import { NotionAPI } from "notion-client";
import { Container, Flex, Text, VStack } from "@chakra-ui/react";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";
import NotionPagesLinks from "constants/notion";
import { NextSeo } from "next-seo";
import { getPageTitle } from "notion-utils";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import NextLink from "next/link";
import Hero from "components/sections/Hero";

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
      <Hero
        cta={
          <>
            <Text
              fontSize={{ base: "md", lg: "xl" }}
              textAlign="left"
              lineHeight={{ base: "7", md: "8" }}
              // color={"#37352f"}
              // paddingLeft="7.9cm"
            >
              <p>
                <NextLink href="/" passHref>
                  Home
                </NextLink>{" "}
                / Proof Of Community
              </p>
            </Text>
          </>
        }
      />
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
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
                    "name": "Super Shardian: Proof Of Community",
                    "item": "https://shardeum.org/proof-of-community-program/"  
                  }]
                }
               `,
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [{
                  "@type": "Question",
                  "name": "What are the minimum criteria to start contributing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Interest in building community
              Knows the basics of Web3 
              Enthusiasm and zeal"
                  }
                },{
                  "@type": "Question",
                  "name": "What are the different ways I can contribute to this program?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contribute in many ways: 
              You can become a volunteer with any of the existing chapters.
              If you don’t have a chapter in your local area, you can start a new chapter with us. 
               You can use your skills (Social media marketing, graphics design, technical writing) to help grow your local community."
                  }
                },{
                  "@type": "Question",
                  "name": "How to get started with Meetup?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can look for communities in your local area. If you want to start a chapter, please fill the below form out. We’ll get in touch with you."
                  }
                },{
                  "@type": "Question",
                  "name": "What if I have an existing community? How can I map meet-ups with the current group?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If you have an existing community, you can host meetups under your existing community. You can reach out to us for more information and support at loveneesh@shardeum.org."
                  }
                },{
                  "@type": "Question",
                  "name": "How to get an audience for my Meetup?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Marketing the event plays an essential role in getting the audience for your event. We have a guide which will be available once you get onboarded as a Super Shardian."
                  }
                },{
                  "@type": "Question",
                  "name": "What is the budget for a meetup?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The budget for a meetup depends on the geography size of the event you are planning."
                  }
                },{
                  "@type": "Question",
                  "name": "Can I run meetups without registering communities with Shardeum?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely, you can run meetups without registering the community with us. You can contact us and we can plan it out."
                  }
                },{
                  "@type": "Question",
                  "name": "Can I leave this program in between?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can leave this program in between. You can reach out to us at loveneesh@shardeum.org."
                  }
                }]
              }
              `,
            }}
          />
          <NotionRenderer recordMap={recordMap} fullPage={false} darkMode={false} />
        </Container>
      </Flex>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const notion = new NotionAPI();
  const pageId = "proof-of-community-program";
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
