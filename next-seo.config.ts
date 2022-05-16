import { DefaultSeoProps } from "next-seo";

const defaultSEOValues: DefaultSeoProps = {
  title: "Shardeum | EVM-based sharded layer 1 blockchain",
  description:
    "Shardeum is the world's first EVM based L1 blockchain that truly solves scalability trilemma with linear scaling and low gas fees forever",
  canonical: "https://shardeum.org",

  openGraph: {
    title: "Shardeum | EVM-based sharded layer 1 blockchain",
    type: "website",
    url: "https://shardeum.org",

    description:
      "Shardeum is the world's first EVM based L1 blockchain that truly solves scalability trilemma with linear scaling and low gas fees forever",
    images: [
      {
        url: "https://shardeum.org/Shardeum.png",
        alt: "Shardeum Image",
      },
    ],
  },

  twitter: {
    cardType: "summary_large_image",
    site: "https://shardeum.org",
    handle: "@shardeum",
  },

  additionalMetaTags: [
    {
      property: "keywords",
      content: "shardeum,blockchain,layer1 blockchain,evm compatible blockchain",
    },
  ],
};

export default defaultSEOValues;
