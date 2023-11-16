/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "postit-backend-v2jc.onrender.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
