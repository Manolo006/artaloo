import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/link/",
        destination: "/link",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
