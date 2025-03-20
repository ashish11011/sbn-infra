import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // allow all local images
    domains: ["*"],
  },
};

export default nextConfig;
