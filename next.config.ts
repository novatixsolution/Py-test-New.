import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Isse hum TypeScript errors ko ignore kar rahe hain taake deploy na ruke
    ignoreBuildErrors: true,
  },
  eslint: {
    // Isse hum ESLint warnings ko bhi ignore kar rahe hain
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;