/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  async redirects() {
    return [
      // Parana Three-Eras URLs -> aluth Two-Eras structure eka
      { source: "/eras/learn", destination: "/eras/student", permanent: true },
      { source: "/eras/belong", destination: "/eras/visit", permanent: true },
      { source: "/eras/discover", destination: "/eras/student", permanent: true },
    ];
  },
};

module.exports = nextConfig;
