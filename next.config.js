/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: "out",
  images: {
    unoptimized: true,
  },
  assetPrefix:
    process.env.NODE_ENV === "production" ? "https://wyreinnovations.com" : "",
  basePath: "",
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
