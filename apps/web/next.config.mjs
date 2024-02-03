/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:true,
  transpilePackages: ["@repo/ui", "database"]
};

export default nextConfig;
