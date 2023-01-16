/* eslint-disable react/no-unknown-property */
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
import { Container, Flex, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import Hero from "components/sections/Hero";

const Terms = ({
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
                / Terms
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
                    "name": "Terms",
                    "item": "https://shardeum.org/terms/"  
                  }]
                }
                </script>`,
            }}
          ></script>
          {/* <NotionRenderer recordMap={recordMap} fullPage={false} darkMode={false} /> */}
          <main className="notion light-mode notion-page notion-block-17362a2d159c4a94b1b221983d23e063">
            <div className="notion-viewport"></div>
            <h3
              className="notion-h notion-h2 notion-h-indent-0 notion-block-016edc45e8a94786981d151da6a4bc3c"
              data-id="016edc45e8a94786981d151da6a4bc3c"
            >
              <span>
                <div id="016edc45e8a94786981d151da6a4bc3c" className="notion-header-anchor"></div>
                <a
                  className="notion-hash-link"
                  href="#016edc45e8a94786981d151da6a4bc3c"
                  title="Terms and Conditions"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <span className="notion-h-title">Terms and Conditions</span>
              </span>
            </h3>
            <div className="notion-text notion-block-16c2857b0a2c46fcbfc6ba43fa0d934b">
              Welcome to Shardeum!
            </div>
            <div className="notion-text notion-block-cbf79d21e0f7411b83bb8def356ab41b">
              These terms and conditions outline the rules and regulations for the use of
              Shardeum&#x27;s Website, located at https://shardeum.org.
            </div>
            <div className="notion-text notion-block-059f4fed8235474d99fd33a7cb73c69b">
              By accessing this website we assume you accept these terms and conditions. Do not
              continue to use Shardeum if you do not agree to take all of the terms and conditions
              stated on this page.
            </div>
            <div className="notion-text notion-block-323d902106de4c218b5c90aa6a5820bf">
              The following terminology applies to these Terms and Conditions, Privacy Statement and
              Disclaimer Notice and all Agreements: &quot;Client&quot;, &quot;You&quot; and
              &quot;Your&quot; refers to you, the person log on this website and compliant to the
              Company’s terms and conditions. &quot;The Company&quot;, &quot;Ourselves&quot;,
              &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers to our Company.
              &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client
              and ourselves. All terms refer to the offer, acceptance and consideration of payment
              necessary to undertake the process of our assistance to the Client in the most
              appropriate manner for the express purpose of meeting the Client’s needs in respect of
              provision of the Company’s stated services, in accordance with and subject to,
              prevailing law. Any use of the above terminology or other words in the singular,
              plural, capitalization and/or he/she or they, are taken as interchangeable and
              therefore as referring to same.
            </div>
            <h4
              className="notion-h notion-h3 notion-h-indent-1 notion-block-b4cf5a58bd344f28bc17435ee580fa19"
              data-id="b4cf5a58bd344f28bc17435ee580fa19"
            >
              <span>
                <div id="b4cf5a58bd344f28bc17435ee580fa19" className="notion-header-anchor"></div>
                <a
                  className="notion-hash-link"
                  href="#b4cf5a58bd344f28bc17435ee580fa19"
                  title="Cookies"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <span className="notion-h-title">
                  <b>Cookies</b>
                </span>
              </span>
            </h4>
            <div className="notion-text notion-block-c74ddbe087ea4143945927adce89d544">
              We employ the use of cookies. By accessing Shardeum, you agreed to use cookies in
              agreement with the Shardeum&#x27;s Privacy Policy.
            </div>
            <div className="notion-text notion-block-fe06bf0098f848678e729e57dc464134">
              Most interactive websites use cookies to let us retrieve the user’s details for each
              visit. Cookies are used by our website to enable the functionality of certain areas to
              make it easier for people visiting our website. Some of our affiliate/advertising
              partners may also use cookies.
            </div>
            <h4
              className="notion-h notion-h3 notion-h-indent-1 notion-block-2d517b79edbe46b19b57d735b14a1219"
              data-id="2d517b79edbe46b19b57d735b14a1219"
            >
              <span>
                <div id="2d517b79edbe46b19b57d735b14a1219" className="notion-header-anchor"></div>
                <a
                  className="notion-hash-link"
                  href="#2d517b79edbe46b19b57d735b14a1219"
                  title="License"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <span className="notion-h-title">
                  <b>License</b>
                </span>
              </span>
            </h4>
            <div className="notion-text notion-block-ded78d75b6cf41978b264ece1b2609ea">
              Unless otherwise stated, Shardeum and/or its licensors own the intellectual property
              rights for all material on Shardeum. All intellectual property rights are reserved.
              You may access this from Shardeum for your own personal use subjected to restrictions
              set in these terms and conditions.
            </div>
            <div className="notion-text notion-block-35ebd6de53984ffd87fb901aa8421ac6">
              You must not:
            </div>
            <ul className="notion-list notion-list-disc notion-block-cf8bdbbdd8394446acfa526b5b04a405">
              <li>Republish material from Shardeum</li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-9b367a8f82e94d63b479f31d35788a3b">
              <li>Sell, rent or sub-license material from Shardeum</li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-161e2b86795f47d8946f5c275a6309a3">
              <li>Reproduce, duplicate or copy material from Shardeum</li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-4cd051333f4e4284be25994c45a341d9">
              <li>Redistribute content from Shardeum</li>
            </ul>
            <div className="notion-text notion-block-a427ad63633f4f6a9d33bb418fb079cb">
              This Agreement shall begin on the date hereof. Our Terms and Conditions were created
              with the help of the
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="notion-link"
                href="https://www.privacypolicies.com/blog/sample-terms-conditions-template/"
              >
                Terms And Conditions Template
              </a>
              .
            </div>
            <div className="notion-text notion-block-54d654c4c1de44b4ba390f10886cd747">
              Parts of this website offer an opportunity for users to post and exchange opinions and
              information in certain areas of the website. Shardeum does not filter, edit, publish
              or review Comments prior to their presence on the website. Comments do not reflect the
              views and opinions of Shardeum,its agents and/or affiliates. Comments reflect the
              views and opinions of the person who post their views and opinions. To the extent
              permitted by applicable laws, Shardeum shall not be liable for the Comments or for any
              liability, damages or expenses caused and/or suffered as a result of any use of and/or
              posting of and/or appearance of the Comments on this website.
            </div>
            <div className="notion-text notion-block-8a6ad2d6dfd4461789f10e8153551455">
              Shardeum reserves the right to monitor all Comments and to remove any Comments which
              can be considered inappropriate, offensive or causes breach of these Terms and
              Conditions.
            </div>
            <div className="notion-text notion-block-fd1a01e2670c49d3b9977cfaa03a147d">
              You warrant and represent that:
            </div>
            <ul className="notion-list notion-list-disc notion-block-9fbf8ec49360453c847cf7dcf6537723">
              <li>
                You are entitled to post the Comments on our website and have all necessary licenses
                and consents to do so;
              </li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-428e1efc76a5449a92b1108ab6b9c3ca">
              <li>
                The Comments do not invade any intellectual property right, including without
                limitation copyright, patent or trademark of any third party;
              </li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-86057da97254423daa40a006efe35dbf">
              <li>
                The Comments do not contain any defamatory, libelous, offensive, indecent or
                otherwise unlawful material which is an invasion of privacy
              </li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-d577783f9e17477eab3d913d3d8cd1bd">
              <li>
                The Comments will not be used to solicit or promote business or custom or present
                commercial activities or unlawful activity.
              </li>
            </ul>
            <div className="notion-text notion-block-c8bc1b87f10b431e96eedbf1d9fd2f64">
              You hereby grant Shardeum a non-exclusive license to use, reproduce, edit and
              authorize others to use, reproduce and edit any of your Comments in any and all forms,
              formats or media.
            </div>
            <h4
              className="notion-h notion-h3 notion-h-indent-1 notion-block-e03610d0506e4403ad32873ea244cff3"
              data-id="e03610d0506e4403ad32873ea244cff3"
            >
              <span>
                <div id="e03610d0506e4403ad32873ea244cff3" className="notion-header-anchor"></div>
                <a
                  className="notion-hash-link"
                  href="#e03610d0506e4403ad32873ea244cff3"
                  title="Hyperlinking to our Content"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <span className="notion-h-title">
                  <b>Hyperlinking to our Content</b>
                </span>
              </span>
            </h4>
            <div className="notion-text notion-block-cab03a85e71b4be88ceb465559b7b3da">
              The following organizations may link to our Website without prior written approval:
            </div>
            <ul className="notion-list notion-list-disc notion-block-ad9141b3395e4f57ba3f34e8aa126af4">
              <li>Government agencies;</li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-d6a0db1a4a964ee7b1b885df72b7950f">
              <li>Search engines;</li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-18262947c5f8446ea86c9ce9638198c4">
              <li>News organizations;</li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-21eaab31a1a44be9b0e93c32fc90e861">
              <li>
                Online directory distributors may link to our Website in the same manner as they
                hyperlink to the Websites of other listed businesses; and
              </li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-734e3cc398a64224bac0ed43ff3cb54c">
              <li>
                System wide Accredited Businesses except soliciting non-profit organizations,
                charity shopping malls, and charity fundraising groups which may not hyperlink to
                our Web site.
              </li>
            </ul>
            <div className="notion-text notion-block-2454b11dfc07409eb96f8031d054470c">
              These organizations may link to our home page, to publications or to other Website
              information so long as the link: (a) is not in any way deceptive; (b) does not falsely
              imply sponsorship, endorsement or approval of the linking party and its products
              and/or services; and (c) fits within the context of the linking party’s site.
            </div>
            <div className="notion-text notion-block-8e6e87ef3dec4c22b80c9db59798346a">
              We may consider and approve other link requests from the following types of
              organizations:
            </div>
            <ul className="notion-list notion-list-disc notion-block-b136ceae295d4e1aa6cd0f8938af12dd">
              <li>commonly-known consumer and/or business information sources;</li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-23c705a74071436c87cee2aba6d9c2fd">
              <li>dot.com community sites;</li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-7cd4aa18c2c449e9a2a9d5084827a089">
              <li>associations or other groups representing charities;</li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-a29bfa5705464e498ddcd1f974a803f9">
              <li>online directory distributors;</li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-98d2b1445cb34ab6858aa9d075319c43">
              <li>internet portals;</li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-1ce402ec292a4ee29842803a30a9ade3">
              <li>accounting, law and consulting firms; and</li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-e8cad1974b944045ab8caca8f193aead">
              <li>educational institutions and trade associations.</li>
            </ul>
            <div className="notion-text notion-block-a9160d7f099749fd9ef918cadeed4d36">
              We will approve link requests from these organizations if we decide that: (a) the link
              would not make us look unfavorably to ourselves or to our accredited businesses; (b)
              the organization does not have any negative records with us; (c) the benefit to us
              from the visibility of the hyperlink compensates the absence of Shardeum; and (d) the
              link is in the context of general resource information.
            </div>
            <div className="notion-text notion-block-040a83d26c354bb89a0cfc02fd48f026">
              These organizations may link to our home page so long as the link: (a) is not in any
              way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the
              linking party and its products or services; and (c) fits within the context of the
              linking party’s site.
            </div>
            <div className="notion-text notion-block-850b3394e98349e8a898551ed48a2006">
              If you are one of the organizations listed in paragraph 2 above and are interested in
              linking to our website, you must inform us by sending an e-mail to Shardeum. Please
              include your name, your organization name, contact information as well as the URL of
              your site, a list of any URLs from which you intend to link to our Website, and a list
              of the URLs on our site to which you would like to link. Wait 2-3 weeks for a
              response.
            </div>
            <div className="notion-text notion-block-c3138fec1f664c2cb1bc4ac67c2bdfea">
              Approved organizations may hyperlink to our Website as follows:
            </div>
            <ul className="notion-list notion-list-disc notion-block-9537cffe2dcc42baadd586bc50cacc94">
              <li>By use of our corporate name; or</li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-32f1ca1e7ab743b9bd17154373dbc8f0">
              <li>By use of the uniform resource locator being linked to; or</li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-d3df60c4f231478981a1bd7b028b84b5">
              <li>
                By use of any other description of our Website being linked to that makes sense
                within the context and format of content on the linking party’s site.
              </li>
            </ul>
            <div className="notion-text notion-block-45bc598505084a968f71ad4c90f7d4b2">
              No use of Shardeum&#x27;s logo or other artwork will be allowed for linking absent a
              trademark license agreement.
            </div>
            <h4
              className="notion-h notion-h3 notion-h-indent-1 notion-block-e72e3901176c4c0ca5b3af4ff391f7ea"
              data-id="e72e3901176c4c0ca5b3af4ff391f7ea"
            >
              <span>
                <div id="e72e3901176c4c0ca5b3af4ff391f7ea" className="notion-header-anchor"></div>
                <a
                  className="notion-hash-link"
                  href="#e72e3901176c4c0ca5b3af4ff391f7ea"
                  title="iFrames"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <span className="notion-h-title">
                  <b>iFrames</b>
                </span>
              </span>
            </h4>
            <div className="notion-text notion-block-809e59191dde4f07956916d64dfbb913">
              Without prior approval and written permission, you may not create frames around our
              Webpages that alter in any way the visual presentation or appearance of our Website.
            </div>
            <h4
              className="notion-h notion-h3 notion-h-indent-1 notion-block-12de1ba60e43435ca6b95777cb67d54e"
              data-id="12de1ba60e43435ca6b95777cb67d54e"
            >
              <span>
                <div id="12de1ba60e43435ca6b95777cb67d54e" className="notion-header-anchor"></div>
                <a
                  className="notion-hash-link"
                  href="#12de1ba60e43435ca6b95777cb67d54e"
                  title="Content Liability"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <span className="notion-h-title">
                  <b>Content Liability</b>
                </span>
              </span>
            </h4>
            <div className="notion-text notion-block-187ef38e1864458a8f6a0f00657c7896">
              We shall not be hold responsible for any content that appears on your Website. You
              agree to protect and defend us against all claims that is rising on your Website. No
              link(s) should appear on any Website that may be interpreted as libelous, obscene or
              criminal, or which infringes, otherwise violates, or advocates the infringement or
              other violation of, any third party rights.
            </div>
            <h4
              className="notion-h notion-h3 notion-h-indent-1 notion-block-3a68acec7aef4a3aa970a004ee51f076"
              data-id="3a68acec7aef4a3aa970a004ee51f076"
            >
              <span>
                <div id="3a68acec7aef4a3aa970a004ee51f076" className="notion-header-anchor"></div>
                <a
                  className="notion-hash-link"
                  href="#3a68acec7aef4a3aa970a004ee51f076"
                  title="Your Privacy"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <span className="notion-h-title">
                  <b>Your Privacy</b>
                </span>
              </span>
            </h4>
            <div className="notion-text notion-block-f0f763acfcee4aa79f65afb6ddea70db">
              Please read Privacy Policy
            </div>
            <h4
              className="notion-h notion-h3 notion-h-indent-1 notion-block-c4f65d567dc2487ca054227b64ad6846"
              data-id="c4f65d567dc2487ca054227b64ad6846"
            >
              <span>
                <div id="c4f65d567dc2487ca054227b64ad6846" className="notion-header-anchor"></div>
                <a
                  className="notion-hash-link"
                  href="#c4f65d567dc2487ca054227b64ad6846"
                  title="Reservation of Rights"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <span className="notion-h-title">
                  <b>Reservation of Rights</b>
                </span>
              </span>
            </h4>
            <div className="notion-text notion-block-74637d7ff5da4867a6621ecffa8e99df">
              We reserve the right to request that you remove all links or any particular link to
              our Website. You approve to immediately remove all links to our Website upon request.
              We also reserve the right to amen these terms and conditions and it’s linking policy
              at any time. By continuously linking to our Website, you agree to be bound to and
              follow these linking terms and conditions.
            </div>
            <h4
              className="notion-h notion-h3 notion-h-indent-1 notion-block-a8a69f1b688c4f8d9bed6dcce4595410"
              data-id="a8a69f1b688c4f8d9bed6dcce4595410"
            >
              <span>
                <div id="a8a69f1b688c4f8d9bed6dcce4595410" className="notion-header-anchor"></div>
                <a
                  className="notion-hash-link"
                  href="#a8a69f1b688c4f8d9bed6dcce4595410"
                  title="Removal of links from our website"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <span className="notion-h-title">
                  <b>Removal of links from our website</b>
                </span>
              </span>
            </h4>
            <div className="notion-text notion-block-f77d9ee6d29b42aab3a463094f5e02f6">
              If you find any link on our Website that is offensive for any reason, you are free to
              contact and inform us any moment. We will consider requests to remove links but we are
              not obligated to or so or to respond to you directly.
            </div>
            <div className="notion-text notion-block-4dfbae44e07d438ea13dfd7cc92d4a5a">
              We do not ensure that the information on this website is correct, we do not warrant
              its completeness or accuracy; nor do we promise to ensure that the website remains
              available or that the material on the website is kept up to date.
            </div>
            <h4
              className="notion-h notion-h3 notion-h-indent-1 notion-block-f9bb86ef32284fcdbe82ec842380ca84"
              data-id="f9bb86ef32284fcdbe82ec842380ca84"
            >
              <span>
                <div id="f9bb86ef32284fcdbe82ec842380ca84" className="notion-header-anchor"></div>
                <a
                  className="notion-hash-link"
                  href="#f9bb86ef32284fcdbe82ec842380ca84"
                  title="Disclaimer"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <span className="notion-h-title">
                  <b>Disclaimer</b>
                </span>
              </span>
            </h4>
            <div className="notion-text notion-block-86261d48883c448e9a19c6abe4573f17">
              To the maximum extent permitted by applicable law, we exclude all representations,
              warranties and conditions relating to our website and the use of this website. Nothing
              in this disclaimer will:
            </div>
            <ul className="notion-list notion-list-disc notion-block-93087f9c9a964f658efad5c58d14c32a">
              <li>limit or exclude our or your liability for death or personal injury;</li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-1e7ed5f93d3146bb95538f716e50cec8">
              <li>
                limit or exclude our or your liability for fraud or fraudulent misrepresentation;
              </li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-1e82faa0183a417881def4d697503d73">
              <li>
                limit any of our or your liabilities in any way that is not permitted under
                applicable law; or
              </li>
            </ul>
            <ul className="notion-list notion-list-disc notion-block-c1c7169d5c27418dbb51a5d7e112956e">
              <li>
                exclude any of our or your liabilities that may not be excluded under applicable
                law.
              </li>
            </ul>
            <div className="notion-text notion-block-a58d9288054d4e2a80863bf0037e0015">
              The limitations and prohibitions of liability set in this Section and elsewhere in
              this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all
              liabilities arising under the disclaimer, including liabilities arising in contract,
              in tort and for breach of statutory duty.
            </div>
            <div className="notion-text notion-block-5155c5e59eab4c15b66cde6502d129aa">
              As long as the website and the information and services on the website are provided
              free of charge, we will not be liable for any loss or damage of any nature.
            </div>
            <div className="notion-blank notion-block-fee5f00b74854568afd9bf51564fb4d0"></div>
          </main>
        </Container>
      </Flex>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const notion = new NotionAPI();
  const pageId = "terms";
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

export default Terms;
