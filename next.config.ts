import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.fallback = { 
      fs: false,
      path: false 
    };
    return config;
  },
  serverExternalPackages: ['pdfjs-dist']
}

export default nextConfig