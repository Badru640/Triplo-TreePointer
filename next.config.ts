import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.fmpm3-1.fna.fbcdn.net",
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
      {
        protocol: "https",
        hostname: "scontent.fdel27-1.fna.fbcdn.net", 
      },
    ],
  },
};

export default nextConfig;
