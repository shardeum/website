/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["airtable.com", "dl.airtable.com"],
  },
  async rewrites() {
    return [
      {
        source: "/blog/:slug*",
        destination: `${process.env.BLOG_URL}/:slug*`,
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
    ];
  },
};

module.exports = nextConfig;
