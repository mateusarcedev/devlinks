/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  compress: false,
  images: {
    unoptimized: true
  },
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig