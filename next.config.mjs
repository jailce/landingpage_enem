/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.pixabay.com'],
      output: 'export', // Adiciona exportação estática
      basePath: '/landingpage_enem', // Substitua "reponame" pelo nome do seu repositório
      trailingSlash: true, // Adiciona uma barra ao final das URLs
    },
  };
  
  export default nextConfig;