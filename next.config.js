/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  pageExtensions: ["page.jsx", "page.ts", "page.tsx", "api.ts"],
};

module.exports = nextConfig;
