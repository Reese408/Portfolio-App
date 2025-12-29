import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ REQUIRED for S3 / CloudFront
  output: "export",

  // ✅ Required so routes resolve to /route/index.html
  trailingSlash: true,

  // ✅ Disable Next/Image optimization (no server on S3)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
