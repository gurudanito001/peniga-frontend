/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.daisyui.com',
        port: '',
        pathname: '/images/stock/**',
      },
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/gurudanito001/image/upload/**', // Corrected pathname
      },
    ],
  },
};

module.exports = nextConfig;