/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/.well-known/:path*",
        destination: "../html/.well-known/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
