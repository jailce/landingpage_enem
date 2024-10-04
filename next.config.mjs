/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Desabilita a otimização de imagens
  },
  trailingSlash: true,

  output: 'export',
};

export default nextConfig;
