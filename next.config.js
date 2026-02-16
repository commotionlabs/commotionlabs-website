/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration for GitHub Pages
  output: 'export',
  
  // Configure for GitHub Pages subdirectory
  basePath: '/commotionlabs-website',
  assetPrefix: '/commotionlabs-website/',
  
  // Disable server-side features for static export
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Image optimization disabled for static export
  images: {
    unoptimized: true,
  },
  
  // Ensure static files are properly handled
  experimental: {
    outputFileTracingRoot: undefined,
  },
};

module.exports = nextConfig;