/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/me/' : '',
  basePath: isProd ? '/me/' : '',
}

module.exports = nextConfig
