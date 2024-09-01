/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        // Basic redirect
        {
          source: '/home',
          destination: '/shop',
          permanent: true,
        },
      ]
    },
}

module.exports = nextConfig;
