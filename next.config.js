/* eslint @typescript-eslint/no-var-requires: "off" */
const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  trailingSlash: true,
  images: {
    domains: ["airtable.com", "dl.airtable.com"],
  },
  async redirects() {
    return [
      {
        source: "/live",
        destination: "https://www.youtube.com/watch?v=sKczslvXBd4",
        permanent: true,
      },
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
    ];
  },
};

module.exports = nextConfig;
