/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  experimental: { appDir: true },
  telemetry: false,
};

module.exports = nextConfig;