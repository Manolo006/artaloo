import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/link/',
        destination: '/link',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
