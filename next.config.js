/* eslint @typescript-eslint/no-var-requires: "off" */
const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx"],
  i18n,
  trailingSlash: true,
  images: {
    domains: ["airtable.com", "dl.airtable.com", "v5.airtableusercontent.com", "shardeum.org"],
  },
  async redirects() {
    return [
      {
        source: "/live",
        destination: "https://youtube.com/watch?v=hGim9p92bw8",
        permanent: true,
      },
      {
        source: "/shardeum-liberty-alphanet",
        destination: "https://shardeum.org/betanet/",
        permanent: true,
      },
      {
        source: "/follow",
        destination: "https://shardeum.org/explore/follow-us/",
        permanent: false,
      },
      {
        source: "/roadmap/mainnet",
        destination:
          "https://shardeumfoundation.notion.site/3be10f9fef334db68e8b627ffc3d7650?v=51008332cd434fca82413733d6a058cc",
        permanent: false,
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
        source: "/",
        destination: "/html/index.html",
      },
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
      {
        source: "/shardeum-pepe/",
        destination: `/404`,
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
          {
            key: "Cache-Control",
            value: "s-maxage=3600, stale-while-revalidate=59",
          },
        ],
      },
      {
        source: "/explore/:slug*",
        headers: [
          { key: "x-forwarded-proto", value: "https" },
          { key: "x-forwarded-host", value: process.env.ENV_DOMAIN },
          { key: "host", value: process.env.ENV_DOMAIN },
          {
            key: "Cache-Control",
            value: "s-maxage=3600, stale-while-revalidate=59",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Content-Security-Policy",
            value: "self",
          },
          {
            key: "Permissions-Policy",
            value: "autoplay=(), web-share=(), fullscreen=()",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
