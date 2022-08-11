/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ["page.jsx", "page.ts", "page.tsx", "api.ts"],
};

module.exports = nextConfig;
