import React, { useEffect, useState } from "react";
import { getSuperShardians } from "utils/api";
import BeASuperShardian from "components/sections/supershardians/BeASuperShardians";
import Shardians from "components/sections/supershardians/ShardiansList";
import JoinCommunity from "components/sections/JoinCommunity";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { Shardian } from "types";
import ResponsiveHero from "@shm/components/sections/ResponsiveHero";
import NextLink from "next/link";
import { Helmet } from "react-helmet";
import Head from "next/head";
const initialButtonCategories = [{ name: "All", selected: true }];

const SuperShardians = ({ superShardians }: { superShardians: Shardian[] }): React.ReactNode => {
  const [categories, setCategories] = useState(initialButtonCategories);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const { t: ssTranslation } = useTranslation("page-super-shardian");

  useEffect(() => {
    // const script = document.createElement("script");
    // script.type = "application/ld+json";
    // script.text = `{
    //   "@context": "https://schema.org/",
    //   "@type": "BreadcrumbList",
    //   "itemListElement": [{
    //   "@type": "ListItem",
    //   "position": 1,
    //   "name": "Home",
    //   "item": "https://shardeum.org/"
    //   },{
    //   "@type": "ListItem",
    //   "position": 2,
    //   "name": "Super Shardian",
    //   "item": "https://shardeum.org/super-shardian/"
    //   }]
    //   };`;

    // document.head.appendChild(script);
    const buttonCategories = [
      ...initialButtonCategories,
      ...Array.from(new Set(superShardians.map((shardian: any) => shardian.category))).map(
        (item) => ({ name: item, selected: false })
      ),
    ];
    setCategories(buttonCategories);
    setFilteredData(superShardians);
  }, []);

  const onCategoryChangeHandler = (event: any) => {
    if (event) {
      setFilteredData(
        superShardians.filter(
          (data: any) => event.target.value === "All" || data.category === event.target.value
        )
      );
      setCategories(
        categories.map((category) =>
          event.target?.value === category.name
            ? { selected: true, name: category.name }
            : { selected: false, name: category.name }
        )
      );
    }
  };
  return (
    <>
      {/* <Helmet>
        
      </Helmet> */}
      <Head>
        <title>{"Top contributors of Shardeum AKA Super Shardians"}</title>
        <meta
          name="description"
          content="Create, collaborate and contribute to build a layer 1 blockchain network that aims to onboard billions of daily users to Web3 for the first time ever."
        />
        <meta
          name="keywords"
          content="super shardian, shardeum, shardeum dapps, shardeum community, testnet, alphanet, blockchain,layer1 blockchain,evm based blockchain"
        />
        <meta property="og:title" content="Top contributors of Shardeum AKA Super Shardians" />
        <meta
          property="og:description"
          content="Create, collaborate and contribute to build a layer 1 blockchain network that aims to onboard billions of daily users to Web3 for the first time ever"
        />
        <meta property="og:url" content="https://shardeum.org/super-shardian" />
        <meta
          property="og:image"
          content="https://shardeum.org/blog/wp-content/uploads/2022/05/Super-Shardian.png"
        />
        <meta name="twitter:title" content="Top contributors of Shardeum AKA Super Shardians" />
        <meta
          name="twitter:description"
          content="Create, collaborate and contribute to build a layer 1 blockchain network that aims to onboard billions of daily users to Web3 for the first time ever"
        />
        <meta
          name="twitter:image"
          content="https://shardeum.org/blog/wp-content/uploads/2022/05/Super-Shardian.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shardeum" />
        <link rel="canonical" href="https://shardeum.org/super-shardian" />

        <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/08f8687cb2b708c3de5b4b9f/script.js"
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
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
                "name": "Super Shardian",
                "item": "https://shardeum.org/super-shardian/"  
              }]
            }`,
          }}
        />
      </Head>
      <NextSeo
        title="Top contributors of Shardeum AKA Super Shardians"
        description="Create, collaborate, contribute to building world's 1st EVM-based L1 with linear scalability and get recognized and rewarded for it."
        canonical="https://shardeum.org/super-shardian/"
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "super shardian, shardeum, shardeum dapps, shardeum community, testnet, alphanet, blockchain,layer1 blockchain,evm compatible blockchain",
          },
          {
            property: "twitter:image",
            content: "https://shardeum.org/blog/wp-content/uploads/2022/05/Super-Shardian.png",
          },
        ]}
        openGraph={{
          url: "https://shardeum.org/super-shardian/",
          title: "Top contributors of Shardeum AKA Super Shardians",
          description:
            "Create, collaborate, contribute to building world's 1st EVM-based L1 with linear scalability and get recognized and rewarded for it.",
          images: [
            {
              url: "https://shardeum.org/blog/wp-content/uploads/2022/05/Super-Shardian.png",
              width: 800,
              height: 600,
              alt: "Top contributors of Shardeum AKA Super Shardians",
              type: "image/jpeg",
            },
          ],
          site_name: "Top contributors of Shardeum AKA Super Shardians",
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "https://shardeum.org",
          handle: "@shardeum",
        }}
      />
      <ResponsiveHero
        heading={ssTranslation("page-super-shardian-heading")}
        description={ssTranslation("page-super-shardian-description")}
        breadcrumb={
          <>
            <p>
              <NextLink href="/" passHref>
                Home
              </NextLink>
              / Super Shardian
            </p>
          </>
        }
        src="/supershardian.png"
      />
      <Shardians
        categories={categories}
        filteredData={filteredData}
        changeCategory={onCategoryChangeHandler}
      />
      <BeASuperShardian
        title={ssTranslation("page-super-shardian-be-a-super-shardian-title")}
        description={ssTranslation("page-super-shardian-be-a-super-shardian-desc")}
        joinButtonText={ssTranslation("page-super-shardian-start-here")}
      />
      <JoinCommunity />
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const superShardians = await getSuperShardians();
  return {
    props: {
      superShardians,
      ...(await serverSideTranslations(locale, ["common", "page-super-shardian"])),
    },
  };
};

export default SuperShardians;
