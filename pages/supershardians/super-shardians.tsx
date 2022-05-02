import { Box, Button, Container, HStack, SimpleGrid } from "@chakra-ui/react";
import Card from "components/common/ProfileInfoCard";
import Footer from "components/sections/Footer";
import Hero from "components/sections/Hero";
import BeASuperShardian from "components/sections/BeASuperShardian";
import JoinCommunity from "components/sections/JoinCommunity";
import Shardians from "components/sections/Shardians";
import { NextPage } from "next";
import Image from "next/image";
import React, { useState } from "react";

// This will come from air table
const superShardianData = [
  {
    name: "Shailendra Sahu",
    description:
      "John is a front-end developer with more than 10 years of experience in the tech industry",
    category: "Technology",
  },
  {
    name: "Dewansh Parashar",
    description:
      "Dewansh is a front-end developer with more than 10 years of experience in the tech industry",
    category: "Design",
  },
  {
    name: "Jhon Doe",
    description:
      "John is a front-end developer with more than 10 years of experience in the tech industry",
    category: "Marketing",
  },
  {
    name: "Apurv",
    description:
      "Apurv is a front-end developer with more than 10 years of experience in the tech industry",
    category: "Content",
  },
  {
    name: "Anvay Kshtriya",
    description:
      "Anvay is a front-end developer with more than 10 years of experience in the tech industry",
    category: "Technology",
  },
  {
    name: "Anurag Deol",
    description:
      "Anurag is a front-end developer with more than 10 years of experience in the tech industry",
    category: "Design",
  },
  {
    name: "Jim Carry ",
    description:
      "Jim is a front-end developer with more than 10 years of experience in the tech industry",
    category: "Marketing",
  },
];

let filteredData = superShardianData;

const buttonCategories = [
  { name: "All", selected: true },
  { name: "Content", selected: false },
  { name: "Design", selected: false },
  { name: "Marketing", selected: false },
  { name: "Technology", selected: false },
];

const SuperShardians: NextPage = () => {
  const [categories, setCategories] = useState(buttonCategories);

  const onCategoryChangeHandler = (event: any) => {
    if (event) {
      filteredData = superShardianData.filter(
        (data) => event.target.value === "All" || data.category === event.target.value
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
        media={
          <Image
            objectFit="contain"
            src="/supershardian.png" // Image needs to be changed, needed white background
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

export default SuperShardians;
