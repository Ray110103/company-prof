import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "quiverwater-us.backendless.app",
      },
    ],
  },
};

export default nextConfig;
