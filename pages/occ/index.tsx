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
  const title = "OCC | The Guiding Principles of Shardeum";
  const canonical = "https://shardeum.org/occ/";
  const description =
    "OCC is short for Open, Collaborative & Community Driven which are the guiding principles of Shardeum in pursuit of enabling decentralization for everyone";
  const image = "https://shardeum.org/blog/wp-content/uploads/2023/04/OCC.jpg";
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
                / OCC
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
                    "name": "Privacy Policy",
                    "item": "https://shardeum.org/privacy-policy/"  
                  }]
                }
                `,
            }}
          />
          {/* <Text
            fontSize={{ base: "md", lg: "xl" }}
            textAlign="left"
            lineHeight={{ base: "7", md: "8" }}
            color={"#37352f"}
            paddingLeft="7.9cm"
          >
            <p>
              <NextLink href="/" passHref>
                Home
              </NextLink>{" "}
              / Privacy Policy
            </p>
          </Text> */}
          {/* <NotionRenderer recordMap={recordMap} fullPage={false} darkMode={false} /> */}
          <main className="notion light-mode notion-page notion-block-6be4e4b948f346629daf316e7bafffff">
            <div className="notion-viewport"></div>
            <h2
              className="notion-h notion-h1 notion-h-indent-0 notion-block-eb9c788db2a848cabd7ad8a72458d45e"
              data-id="eb9c788db2a848cabd7ad8a72458d45e"
            >
              <span>
                <div id="eb9c788db2a848cabd7ad8a72458d45e" className="notion-header-anchor"></div>
                <a
                  className="notion-hash-link"
                  href="#eb9c788db2a848cabd7ad8a72458d45e"
                  title="Privacy Policy for Shardeum"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <span className="notion-h-title">OCC: The Guiding Principles of Shardeum</span>
              </span>
            </h2>
            <div className="notion-text notion-block-c252121b80354ec9b8155453a0afaeed">
              When you think of Shardeum, you should think of the Internet. It’s not owned by
              anyone, it’s owned by everyone.
            </div>

            <br />
            <div className="notion-text notion-block-8fabf0960ea54c2a9647af3f62c99570">
              A few key principles we should follow to ensure Shardeum is to Crypto what the
              Internet is to information:
            </div>
            <ul className="notion-list notion-list-disc notion-block-b61dadeeb17a46cd985e0fe0fec0c0f5">
              <li>Open </li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-99915087d3374b84957b1475f27864b6">
              <li>Collaborative</li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-72c82db5271745cb8a0066a1c9da8e0b">
              <li>Community Driven</li>
            </ul>

            <h3
              className="notion-h notion-h2 notion-h-indent-1 notion-block-5f6e96b8426c40b983459fbfba84f60d"
              data-id="5f6e96b8426c40b983459fbfba84f60d"
            >
              <span>
                <div id="5f6e96b8426c40b983459fbfba84f60d" className="notion-header-anchor"></div>
                <a
                  className="notion-hash-link"
                  href="#5f6e96b8426c40b983459fbfba84f60d"
                  title="Log Files"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <span className="notion-h-title">Open</span>
              </span>
            </h3>
            <div className="notion-text notion-block-b51b21bc6c9b459caa6681ac699b7c53">
              We want to take an approach that’s not been tried by other blockchains until now. We
              want to be as open as possible when it comes to discussions, information, ideas,
              documents, and just about anything.
            </div>
            <div className="notion-text notion-block-b51b21bc6c9b459caa6681ac699b7c53">
              A mental model we’ll follow is that everyone in the world is a team member of
              Shardeum. Whether you’re in crypto or not, whether you’re a supporter or detractor,
              whether you’re a friend or foe, we want to ensure everyone has access to everything
              about Shardeum.
            </div>
            <h3
              className="notion-h notion-h2 notion-h-indent-1 notion-block-9009526d5a6b495e8e22d3356a7c8517"
              data-id="9009526d5a6b495e8e22d3356a7c8517"
            >
              <span>
                <div id="9009526d5a6b495e8e22d3356a7c8517" className="notion-header-anchor"></div>
                <a
                  className="notion-hash-link"
                  href="#9009526d5a6b495e8e22d3356a7c8517"
                  title="Cookies and Web Beacons"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <span className="notion-h-title">Collaborative</span>
              </span>
            </h3>
            <div className="notion-text notion-block-51a654e02b7e45e5bd00f1218ddf912f">
              We don’t view anyone as a competitor. We are here to onboard the world to Crypto. And
              that means collaborating with the ecosystem. We’ll look for ways to help every
              individual or group building on top of Shardeum. We’ll work on collaborating with
              anyone who is trying to achieve a similar goal of increasing crypto adoption.
            </div>
            <br />
            <div className="notion-text notion-block-51a654e02b7e45e5bd00f1218ddf912f">
              Choosing to go with EVM was in fact one of our steps towards committing to be
              collaborative. We want to ensure we’re building upon the work of others and we want
              others to build upon the work we do.
            </div>
            <br />
            <div className="notion-text notion-block-51a654e02b7e45e5bd00f1218ddf912f">
              We all have a common enemy, centralization. Let’s beat it together.
            </div>
            <h3
              className="notion-h notion-h2 notion-h-indent-1 notion-block-af615df804f64128adb8a120605ec217"
              data-id="af615df804f64128adb8a120605ec217"
            >
              <span>
                <div id="af615df804f64128adb8a120605ec217" className="notion-header-anchor"></div>
                <a
                  className="notion-hash-link"
                  href="#af615df804f64128adb8a120605ec217"
                  title="Advertising Partners Privacy Policies"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <span className="notion-h-title">Community Driven</span>
              </span>
            </h3>
            <div className="notion-text notion-block-a6b9f727311f48de8ef288aa6fb44b03">
              At Shardeum, the community is supreme. We want to ensure we involve the community in
              key decisions. But, decisions are just part of being community driven. An even more
              important aspect is to reduce the delta of project information. Whenever any of us
              thinks we have information that we should share with team members, we’ll share that
              with the community.
            </div>
            <div className="notion-text notion-block-c4ac0dbac0ec43239e01cd36ab15eb4b">
              In a company, the CEO is aware of everything. At Shardeum, the community is the CEO.
              We want to ensure the community knows everything.
            </div>
          </main>
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
