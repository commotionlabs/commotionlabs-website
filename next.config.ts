import type { NextConfig } from 'next';
import path from 'node:path';

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/commotionlabs-website' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
