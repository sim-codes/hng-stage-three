/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.timbu.cloud',
            port: '',
            pathname: '/images/**',
          },
        ],
      },
};

export default nextConfig;
