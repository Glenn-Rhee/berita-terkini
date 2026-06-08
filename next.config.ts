import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.antaranews.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "akcdn.detik.net.id",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
