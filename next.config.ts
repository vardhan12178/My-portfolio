/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/img/**"
      }
    ]
  }
};

export default nextConfig;
