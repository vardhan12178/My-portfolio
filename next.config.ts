/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [70, 75, 85],
    localPatterns: [
      {
        pathname: "/img/**",
      },
    ],
  },
};

export default nextConfig;
