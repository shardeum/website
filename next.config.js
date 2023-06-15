/* eslint @typescript-eslint/no-var-requires: "off" */
const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  trailingSlash: true,
  images: {
    domains: ["airtable.com", "dl.airtable.com", "v5.airtableusercontent.com", "shardeum.org"],
  },
  async redirects() {
    return [
      {
        source: "/live",
        destination: "https://youtube.com/live/hmRlBMtWvxk",
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
        source: "/shm-tokenomics/:slug*",
        destination: `https://issuance-dashboard.vercel.app/:slug*`,
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
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
