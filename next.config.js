/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        dns: false,
        child_process: false,
        tty: false,
      };
    }

    // Add support for importing .move files
    config.module.rules.push({
      test: /\.move$/,
      use: 'raw-loader',
    });

    return config;
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true, // Set to false for production
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true, // Set to false for production
  },
  images: {
    domains: ['avatars.githubusercontent.com'], // Add other domains as needed
  },
  // Enable React Strict Mode
  reactStrictMode: true,
  // Enable SWC minification (faster builds)
  swcMinify: true,
  // Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Enable compiler options
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

module.exports = nextConfig;
