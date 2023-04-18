/* eslint @typescript-eslint/no-var-requires: "off" */
const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  trailingSlash: true,
  images: {
    domains: ["airtable.com", "dl.airtable.com", "v5.airtableusercontent.com"],
  },
  async redirects() {
    return [
      {
        source: "/live",
        destination: "https://youtube.com/live/yCdD2ywT7yY",
        permanent: true,
      },
      {
        source: "/shardeum-liberty-alphanet",
        destination: "https://shardeum.org/betanet/",
        permanent: true,
      },

      // Temp Redirection
      {
        source: "/hi",
        destination: "https://shardeum.org/",
        permanent: true,
      },
      {
        source: "/id",
        destination: "https://shardeum.org/",
        permanent: true,
      },
      {
        source: "/it",
        destination: "https://shardeum.org/",
        permanent: true,
      },
      {
        source: "/ja",
        destination: "https://shardeum.org/",
        permanent: true,
      },
      {
        source: "/kn",
        destination: "https://shardeum.org/",
        permanent: true,
      },
      {
        source: "/ko",
        destination: "https://shardeum.org/",
        permanent: true,
      },
      {
        source: "/ru",
        destination: "https://shardeum.org/",
        permanent: true,
      },
      {
        source: "/ta",
        destination: "https://shardeum.org/",
        permanent: true,
      },
      {
        source: "/te",
        destination: "https://shardeum.org/",
        permanent: true,
      },
      // {
      //   source: "/issuance",
      //   destination: "https://issuance-dashboard.vercel.app/",
      //   permanent: true,
      // },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/blog/:slug*",
        destination: `${process.env.BLOG_URL}/:slug*`,
      },
      {
        source: "/explore/:slug*",
        destination: `${process.env.EXPLORE_URL}/:slug*`,
      },
      {
        source: "/explore/wp-admin",
        destination: `${process.env.EXPLORE_URL}/wp-admin/index.php`,
      },
      {
        source: "/issuance-dashboard/:slug*",
        destination: `${process.env.ISSUANCE_URL}/:slug*`,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/blog/:slug*",
        headers: [
          { key: "x-forwarded-proto", value: "https" },
          { key: "x-forwarded-host", value: process.env.ENV_DOMAIN },
          { key: "host", value: process.env.ENV_DOMAIN },
        ],
      },
      {
        source: "/explore/:slug*",
        headers: [
          { key: "x-forwarded-proto", value: "https" },
          { key: "x-forwarded-host", value: process.env.ENV_DOMAIN },
          { key: "host", value: process.env.ENV_DOMAIN },
        ],
      },
      {
        source: "/issuance-dashboard/:slug*",
        headers: [
          { key: "x-forwarded-proto", value: "https" },
          { key: "x-forwarded-host", value: process.env.ENV_DOMAIN },
          { key: "host", value: process.env.ENV_DOMAIN },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
