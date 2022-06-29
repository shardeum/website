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
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: `${process.env.BLOG_URL}`,
      },
      {
        source: "/blog/:slug*",
        destination: `${process.env.BLOG_URL}/:slug*/`,
      },
    ];
  },
  async headers() {
    return [
      {
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
