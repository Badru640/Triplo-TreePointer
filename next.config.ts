import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Habilita o modo estrito do React
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.fmpm3-1.fna.fbcdn.net", // Domínio configurado para imagens externas
      },
      {
        protocol: "https",
        hostname: "mznews.co.mz", // Adicionado domínio mznews.co.mz
      },
      {
        protocol: "https",
        hostname: "static01.nyt.com", // Adicionado domínio static01.nyt.com
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
