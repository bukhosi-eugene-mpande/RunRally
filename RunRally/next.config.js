/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'loremflickr.com'],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/home',
        destination: '/shop',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
