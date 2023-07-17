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
                / Privacy Policy
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
                <span className="notion-h-title">Privacy Policy for Shardeum</span>
              </span>
            </h2>
            <div className="notion-text notion-block-c252121b80354ec9b8155453a0afaeed">
              At Shardeum, accessible from https://shardeum.org, one of our main priorities is the
              privacy of our visitors. This Privacy Policy document contains types of information
              that is collected and recorded by Shardeum and how we use it.
            </div>
            <div className="notion-text notion-block-d41587d493e34d74a66d0adf6b977b87">
              If you have additional questions or require more information about our Privacy Policy,
              do not hesitate to contact us
            </div>
            <div className="notion-text notion-block-94627db03a01431b97390a4d1ae1b50b">
              This Privacy Policy applies only to our online activities and is valid for visitors to
              our website with regards to the information that they shared and/or collect in
              Shardeum. This policy is not applicable to any information collected offline or via
              channels other than this website.
            </div>
            <h3
              className="notion-h notion-h2 notion-h-indent-1 notion-block-f62043dd5e264b039c53d10768464f73"
              data-id="f62043dd5e264b039c53d10768464f73"
            >
              <span>
                <div id="f62043dd5e264b039c53d10768464f73" className="notion-header-anchor"></div>
                <a
                  className="notion-hash-link"
                  href="#f62043dd5e264b039c53d10768464f73"
                  title="Consent"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <span className="notion-h-title">
                  <b>Consent</b>
                </span>
              </span>
            </h3>
            <div className="notion-text notion-block-59529f6210f14813933d450516df58a2">
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </div>
            <h3
              className="notion-h notion-h2 notion-h-indent-1 notion-block-105b376f804440eba33734d221fdf552"
              data-id="105b376f804440eba33734d221fdf552"
            >
              <span>
                <div id="105b376f804440eba33734d221fdf552" className="notion-header-anchor"></div>
                <a
                  className="notion-hash-link"
                  href="#105b376f804440eba33734d221fdf552"
                  title="Information we collect"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <span className="notion-h-title">Information we collect</span>
              </span>
            </h3>
            <div className="notion-text notion-block-43370aa0f5544ebfa418848df43f361d">
              The personal information that you are asked to provide, and the reasons why you are
              asked to provide it, will be made clear to you at the point we ask you to provide your
              personal information.
            </div>
            <div className="notion-text notion-block-eaafdcbfdb5f45f99beb4ca802caf709">
              If you contact us directly, we may receive additional information about you such as
              your name, email address, phone number, the contents of the message and/or attachments
              you may send us, and any other information you may choose to provide.
            </div>
            <div className="notion-text notion-block-a005a90b9d794859a066ed33b38f7736">
              When you register for an Account, we may ask for your contact information, including
              items such as name, company name, address, email address, and telephone number.
            </div>
            <div className="notion-text notion-block-db212e1d55784139bd74356270526ad3">
              When you subscribe to our newsletter, we may ask for your email address
            </div>
            <h3
              className="notion-h notion-h2 notion-h-indent-1 notion-block-7ad8a91f9a7448d58dc1c4632dba5bfc"
              data-id="7ad8a91f9a7448d58dc1c4632dba5bfc"
            >
              <span>
                <div id="7ad8a91f9a7448d58dc1c4632dba5bfc" className="notion-header-anchor"></div>
                <a
                  className="notion-hash-link"
                  href="#7ad8a91f9a7448d58dc1c4632dba5bfc"
                  title="How we use your information"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <span className="notion-h-title">How we use your information</span>
              </span>
            </h3>
            <div className="notion-text notion-block-8fabf0960ea54c2a9647af3f62c99570">
              We use the information we collect in various ways, including to:
            </div>
            <ul className="notion-list notion-list-disc notion-block-b61dadeeb17a46cd985e0fe0fec0c0f5">
              <li>Provide, operate, and maintain our website</li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-99915087d3374b84957b1475f27864b6">
              <li>Improve, personalize, and expand our website</li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-72c82db5271745cb8a0066a1c9da8e0b">
              <li>Understand and analyze how you use our website</li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-4f8163f3dca34b2383fb4875bda5d329">
              <li>Develop new products, services, features, and functionality</li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-6300ac7b093d4f768a2885be6fdff2ca">
              <li>
                Communicate with you, either directly or through one of our partners, including for
                customer service, to provide you with updates and other information relating to the
                website, and for marketing and promotional purposes
              </li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-61dc31c609e04bb6b87a7508d148a475">
              <li>Send you emails</li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-093a00ed3cdc4cfc886da857463bf1d2">
              <li>Find and prevent fraud</li>
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
                <span className="notion-h-title">Log Files</span>
              </span>
            </h3>
            <div className="notion-text notion-block-b51b21bc6c9b459caa6681ac699b7c53">
              Shardeum follows a standard procedure of using log files. These files log visitors
              when they visit websites. All hosting companies do this and a part of hosting
              services&#x27; analytics. The information collected by log files include internet
              protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time
              stamp, referring/exit pages, and possibly the number of clicks. These are not linked
              to any information that is personally identifiable. The purpose of the information is
              for analyzing trends, administering the site, tracking users&#x27; movement on the
              website, and gathering demographic information.
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
                <span className="notion-h-title">Cookies and Web Beacons</span>
              </span>
            </h3>
            <div className="notion-text notion-block-51a654e02b7e45e5bd00f1218ddf912f">
              Like any other website, Shardeum uses &#x27;cookies&#x27;. These cookies are used to
              store information including visitors&#x27; preferences, and the pages on the website
              that the visitor accessed or visited. The information is used to optimize the
              users&#x27; experience by customizing our web page content based on visitors&#x27;
              browser type and/or other information.
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
                <span className="notion-h-title">Advertising Partners Privacy Policies</span>
              </span>
            </h3>
            <div className="notion-text notion-block-a6b9f727311f48de8ef288aa6fb44b03">
              You may consult this list to find the Privacy Policy for each of the advertising
              partners of Shardeum.
            </div>
            <div className="notion-text notion-block-c4ac0dbac0ec43239e01cd36ab15eb4b">
              Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or
              Web Beacons that are used in their respective advertisements and links that appear on
              Shardeum, which are sent directly to users&#x27; browser. They automatically receive
              your IP address when this occurs. These technologies are used to measure the
              effectiveness of their advertising campaigns and/or to personalize the advertising
              content that you see on websites that you visit.
            </div>
            <div className="notion-text notion-block-85f027b2ba314b4284362dce90c1505c">
              Note that Shardeum has no access to or control over these cookies that are used by
              third-party advertisers.
            </div>
            <h3
              className="notion-h notion-h2 notion-h-indent-1 notion-block-fa795eeee9684090b1e40119227e17a4"
              data-id="fa795eeee9684090b1e40119227e17a4"
            >
              <span>
                <div id="fa795eeee9684090b1e40119227e17a4" className="notion-header-anchor"></div>
                <a
                  className="notion-hash-link"
                  href="#fa795eeee9684090b1e40119227e17a4"
                  title="Third Party Privacy Policies"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <span className="notion-h-title">Third Party Privacy Policies</span>
              </span>
            </h3>
            <div className="notion-text notion-block-80d29bffab8c4276bd879cfcf9017903">
              Shardeum&#x27;s Privacy Policy does not apply to other advertisers or websites. Thus,
              we are advising you to consult the respective Privacy Policies of these third-party ad
              servers for more detailed information. It may include their practices and instructions
              about how to opt-out of certain options.
            </div>
            <div className="notion-text notion-block-343f4a69732b4c9d99c331648c71fa56">
              You can choose to disable cookies through your individual browser options. To know
              more detailed information about cookie management with specific web browsers, it can
              be found at the browsers&#x27; respective websites.
            </div>
            <h3
              className="notion-h notion-h2 notion-h-indent-1 notion-block-d067ab4304434fd58bd8df5bad23900b"
              data-id="d067ab4304434fd58bd8df5bad23900b"
            >
              <span>
                <div id="d067ab4304434fd58bd8df5bad23900b" className="notion-header-anchor"></div>
                <a
                  className="notion-hash-link"
                  href="#d067ab4304434fd58bd8df5bad23900b"
                  title="CCPA Privacy Rights (Do Not Sell My Personal Information)"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <span className="notion-h-title">
                  CCPA Privacy Rights (Do Not Sell My Personal Information)
                </span>
              </span>
            </h3>
            <div className="notion-text notion-block-3ec22c20f8084d55966ede6b7f97cf60">
              Under the CCPA, among other rights, California consumers have the right to:
            </div>
            <div className="notion-text notion-block-e1bfb8e65feb41f6ba38c0cf9fbf964e">
              Request that a business that collects a consumer&#x27;s personal data disclose the
              categories and specific pieces of personal data that a business has collected about
              consumers.
            </div>
            <div className="notion-text notion-block-87491f54a5f14cccb3846c47fcca1b98">
              Request that a business delete any personal data about the consumer that a business
              has collected.
            </div>
            <div className="notion-text notion-block-9f74253872c44f99906ca94dbabf309a">
              Request that a business that sells a consumer&#x27;s personal data, not sell the
              consumer&#x27;s personal data.
            </div>
            <div className="notion-text notion-block-b44ceed932dc4cb2b64247d06420f709">
              If you make a request, we have one month to respond to you. If you would like to
              exercise any of these rights, please contact us.
            </div>
            <h3
              className="notion-h notion-h2 notion-h-indent-1 notion-block-fd784208206d4c349bdf777d982a3740"
              data-id="fd784208206d4c349bdf777d982a3740"
            >
              <span>
                <div id="fd784208206d4c349bdf777d982a3740" className="notion-header-anchor"></div>
                <a
                  className="notion-hash-link"
                  href="#fd784208206d4c349bdf777d982a3740"
                  title="GDPR Data Protection Rights"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <span className="notion-h-title">GDPR Data Protection Rights</span>
              </span>
            </h3>
            <div className="notion-text notion-block-a8ab838c54a442e1aebce6c1fe8a1687">
              We would like to make sure you are fully aware of all of your data protection rights.
              Every user is entitled to the following:
            </div>
            <div className="notion-text notion-block-6105fff40e22486bafe93b821dd73ba1">
              The right to access – You have the right to request copies of your personal data. We
              may charge you a small fee for this service.
            </div>
            <div className="notion-text notion-block-d1da5c8bf3894aaeb700e8dd80bff5a3">
              The right to rectification – You have the right to request that we correct any
              information you believe is inaccurate. You also have the right to request that we
              complete the information you believe is incomplete.
            </div>
            <div className="notion-text notion-block-84c6ec70d15d42bb8f3a49c482e5c895">
              The right to erasure – You have the right to request that we erase your personal data,
              under certain conditions.
            </div>
            <div className="notion-text notion-block-8da2ac03630d4d9dbdfc1f54ed152288">
              The right to restrict processing – You have the right to request that we restrict the
              processing of your personal data, under certain conditions.
            </div>
            <div className="notion-text notion-block-afd92cc883074b49bcbd64b9921baee3">
              The right to object to processing – You have the right to object to our processing of
              your personal data, under certain conditions.
            </div>
            <div className="notion-text notion-block-34b0af52bfbe415388198bfe7972fa27">
              The right to data portability – You have the right to request that we transfer the
              data that we have collected to another organization, or directly to you, under certain
              conditions.
            </div>
            <div className="notion-text notion-block-76c463ec69f941858269e24104d5436e">
              If you make a request, we have one month to respond to you. If you would like to
              exercise any of these rights, please contact us.
            </div>
            <h3
              className="notion-h notion-h2 notion-h-indent-1 notion-block-3be1b81c5e21469f9f04f19cdeb3ae31"
              data-id="3be1b81c5e21469f9f04f19cdeb3ae31"
            >
              <span>
                <div id="3be1b81c5e21469f9f04f19cdeb3ae31" className="notion-header-anchor"></div>
                <a
                  className="notion-hash-link"
                  href="#3be1b81c5e21469f9f04f19cdeb3ae31"
                  title="Children&#x27;s Information"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <span className="notion-h-title">Children&#x27;s Information</span>
              </span>
            </h3>
            <div className="notion-text notion-block-7883df4b65324f2190879cf3d2286ff7">
              Another part of our priority is adding protection for children while using the
              internet. We encourage parents and guardians to observe, participate in, and/or
              monitor and guide their online activity.
            </div>
            <div className="notion-text notion-block-63429b719c8042af8069b056358af809">
              Shardeum does not knowingly collect any Personal Identifiable Information from
              children under the age of 13. If you think that your child provided this kind of
              information on our website, we strongly encourage you to contact us immediately and we
              will do our best efforts to promptly remove such information from our records.
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
