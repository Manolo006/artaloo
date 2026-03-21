import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/artaloo/link/',
        destination: '/artaloo/link',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
