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

let buttonCategories = [{ name: "All", selected: true }];

const SuperShardians = ({ superShardians }: { superShardians: Shardian[] }): React.ReactNode => {
  const [categories, setCategories] = useState(buttonCategories);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const { t: ssTranslation } = useTranslation("page-super-shardian");

  useEffect(() => {
    buttonCategories = [
      ...buttonCategories,
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
      <NextSeo
        title={ssTranslation("page-super-shardian-seo-title")}
        description={ssTranslation("page-super-shardian-seo-description")}
        canonical="https://shardeum.org/super-shardian/"
        additionalMetaTags={[
          {
            property: "keywords",
            content: ssTranslation("page-super-shardian-seo-keywords"),
          },
          {
            property: "twitter:image",
            content: "https://shardeum.org/blog/wp-content/uploads/2022/05/Super-Shardian.png",
          },
        ]}
        openGraph={{
          url: "https://shardeum.org/super-shardian/",
          title: ssTranslation("page-super-shardian-seo-title"),
          description: ssTranslation("page-super-shardian-seo-description"),
          images: [
            {
              url: "https://shardeum.org/blog/wp-content/uploads/2022/05/Super-Shardian.png",
              width: 800,
              height: 600,
              alt: ssTranslation("page-super-shardian-seo-title"),
              type: "image/jpeg",
            },
          ],
          site_name: ssTranslation("page-super-shardian-seo-title"),
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
