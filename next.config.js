/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,
    assetPrefix: isProd ? '/my/' : '',
    basePath: isProd ? '/my' : '',
    output: 'export',
};

module.exports = nextConfig;