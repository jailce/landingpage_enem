/** @type {import('next').NextConfig} */
const nextConfig = {

  trailingSlash: true, // Isso ajuda com a compatibilidade de rotas
  // Configure o caminho base para o GitHub Pages
  basePath: '/landingpage_enem', // Adicione o nome do seu repositório aqui
  assetPrefix: '/landingpage_enem', // O mesmo valor do basePath
  output: 'export', 
};

export default nextConfig;
