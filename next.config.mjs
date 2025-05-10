/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Tambahkan ini:
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // Untuk debug:
  logging: {
    fetches: {
      fullUrl: true,
    },
  }
};

export default nextConfig;