/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WALLET_CONNECT_PROJECT_ID: process.env.WALLET_CONNECT_PROJECT_ID,
    WEB3STORAGE_TOKEN: process.env.WEB3STORAGE_TOKEN,
    DATABASE_URL: process.env.DATBASE_URL,
    WEB3STORAGE_TOKEN: process.env.WEB3STORAGE_TOKEN,
  },
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
