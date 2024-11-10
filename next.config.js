// @ts-check

const isProduction = process.env.NODE_ENV === "production";
const outputDir = process.env.BRANCH === "dev" ? "dev" : "out";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  distDir: outputDir,
  basePath: '/Raffey-Portfolio', // Set to your GitHub Pages repo name
  compiler: {
    reactRemoveProperties: isProduction,
    removeConsole: isProduction,
    styledComponents: {
      displayName: !isProduction,
      minify: isProduction,
      pure: true,
    },
  },
  devIndicators: {
    buildActivityPosition: "top-right",
  },
  experimental: {
    legacyBrowsers: false,
    swcFileReading: true,
    appDir: true,
  },
  optimizeFonts: true,
  productionBrowserSourceMaps: isProduction,
  swcMinify: !isProduction,
  images: {
    unoptimized: true, // Disable image optimization for static export
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
