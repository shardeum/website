import React, { useEffect, useState } from "react";
import { getSuperShardians } from "utils/api";
import Hero from "components/sections/Hero";
import BeASuperShardian from "components/sections/supershardians/BeASuperShardians";
import Shardians from "components/sections/supershardians/ShardiansList";
import JoinCommunity from "components/sections/JoinCommunity";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";

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
  const [filteredData, setFilteredData] = useState([] as any);

  useEffect(() => {
    setFilteredData(superShardians);
  }, []);

  const onCategoryChangeHandler = (event: any) => {
    if (event) {
      setFilteredData(
        superShardians.filter(
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
        heading={"Our Super Shardians"}
        description={
          "Meet our Super Shardians. These are people who have gone above and beyond the call of duty to contribute to Shardeum. Our Super Shardians are spread across the globe and stand testament to Shardeum’s OCC principles. Exciting rewards like crypto merchs, NFTs are awaiting them."
        }
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
        title={"Wanna be a Super Shardian?"}
        description={
          "You too can become a Super Shardian by joining our community today. All you need is passion and the drive to add value to Shardeum as a content creator, designer, marketer, translator, developer or in any way you can. The community has always got your back."
        }
      />
      <JoinCommunity />
    </>
  );
};

export const getStaticProps = async () => {
  const superShardians = await getSuperShardians();
  return {
    props: { superShardians },
  };
};

export default SuperShardians;
