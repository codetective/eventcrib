/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WALLET_CONNECT_PROJECT_ID: process.env.WALLET_CONNECT_PROJECT_ID,
    WEB3STORAGE_TOKEN: process.env.WEB3STORAGE_TOKEN,
  },
};

module.exports = nextConfig;
