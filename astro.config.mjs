import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Site vitrine « L'enfant au milieu » — conflit-parental.fr
// Statique, SEO-first. L'app d'enquêtes vit sur sondages.conflit-parental.fr (séparée).
export default defineConfig({
  site: 'https://conflit-parental.fr',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // On expose les pages publiques uniquement (les pages légales sont noindex).
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) =>
        !page.includes('/mentions-legales') && !page.includes('/confidentialite'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    // URLs propres : /contact au lieu de /contact/index.html
    format: 'file',
  },
});
