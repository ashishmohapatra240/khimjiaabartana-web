/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["raw.githubusercontent.com"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;