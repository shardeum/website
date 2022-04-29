/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["airtable.com", "dl.airtable.com"],
  },
};

module.exports = nextConfig;
