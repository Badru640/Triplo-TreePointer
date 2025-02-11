import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.fbcdn.net", // Permite qualquer subdomínio do Facebook CDN
      },
      {
        protocol: "https",
        hostname: "mznews.co.mz",
      },
      {
        protocol: "https",
        hostname: "static01.nyt.com",
      },
      {
        protocol: "https",
        hostname: "media.wired.com",
      },
      {
        protocol: "https",
        hostname: "lance.co.mz",
      },
    ],
  },
};

export default nextConfig;
