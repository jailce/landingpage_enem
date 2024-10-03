/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.pixabay.com'],
  },
  // Adicione esta linha para permitir a exportação estática
  trailingSlash: true, // Isso ajuda com a compatibilidade de rotas
  // Configure o caminho base para o GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/landingpage_enem/' : '',
};

export default nextConfig;
