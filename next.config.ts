import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://cdnblog.webkul.com/blog/wp-content/uploads/2024/02/next-js-image-component.png')],
  },
};

export default nextConfig;
