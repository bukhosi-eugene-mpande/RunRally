/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'loremflickr.com'],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/shop',
        destination: '/shop/merchandise',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
