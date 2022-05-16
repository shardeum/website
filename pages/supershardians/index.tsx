import React, { useEffect, useState } from "react";
import { getSuperShardians } from "utils/api";
import Hero from "components/sections/Hero";
import BeASuperShardian from "components/sections/supershardians/BeASuperShardians";
import Shardians from "components/sections/supershardians/ShardiansList";
import JoinCommunity from "components/sections/JoinCommunity";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const buttonCategories = [
  { name: "All", selected: true },
  { name: "Content", selected: false },
  { name: "Design", selected: false },
  { name: "Marketing", selected: false },
  { name: "Technology", selected: false },
];

const SuperShardians = ({
  superShardians,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactNode => {
  const [categories, setCategories] = useState(buttonCategories);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const { t: ssTranslation } = useTranslation("page-super-shardians");

  useEffect(() => {
    setFilteredData(superShardians);
  }, []);

  const onCategoryChangeHandler = (event: any) => {
    if (event) {
      setFilteredData(
        superShardians?.filter(
          (data: any) => event.target.value === "All" || data.category[0] === event.target.value
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
      <Hero
        heading={ssTranslation("heading")}
        description={ssTranslation("description")}
        bg="brand.grey-5"
        titleColor="brand.black"
        descColor="brand.grey-90"
        media={
          <Image
            objectFit="contain"
            src="/supershardian.png"
            alt="Shardeum Use Case Illustrations"
            width="490px"
            height="328px"
          />
        }
      />
      <Shardians
        categories={categories}
        filteredData={filteredData}
        changeCategory={onCategoryChangeHandler}
      />
      <BeASuperShardian
        title={ssTranslation("beASuperShardianTitle")}
        description={ssTranslation("beASuperShardianDesc")}
        joinButtonText={ssTranslation("startHere")}
      />
      <JoinCommunity />
    </>
  );
};

export const getStaticProps = async () => {
  const superShardians = await getSuperShardians();
  return {
    props: {
      superShardians,
      ...(await serverSideTranslations("en", ["page-super-shardians"])),
    },
  };
};

export default SuperShardians;
