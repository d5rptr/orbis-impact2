import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true, // Ensures routes end with a trailing slash
  images: {
    unoptimized: true, // Disables image optimization for easier hosting configurations
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // Example environment variable
  },
  async redirects() {
    return [
      {
        source: "/old-route/",
        destination: "/new-route/",
        permanent: true, // Redirect from old routes to new ones
      },
    ];
  },
};

export default nextConfig;
