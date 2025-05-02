import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'never',
    assets: 'assets'
  },
  site: 'https://robert-sanford-hvac.netlify.app',
  vite: {
    build: {
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name][extname]',
        },
      },
    },
  },
});