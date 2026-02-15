/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration for GitHub Pages
  output: 'export',
  
  // Disable server-side features for static export
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Configure for GitHub Pages subdirectory (if needed)
  // If deploying to a custom domain, remove basePath and assetPrefix
  basePath: '',
  assetPrefix: '',
  
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