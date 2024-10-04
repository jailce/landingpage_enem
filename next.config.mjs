/** @type {import('next').NextConfig} */
const nextConfig = {

  trailingSlash: true, // Isso ajuda com a compatibilidade de rotas
  // Configure o caminho base para o GitHub Pages
 assetPrefix: process.env.NODE_ENV === 'production' ? '/landingpage_enem/' : '',
  output: 'export', 
};

export default nextConfig;
