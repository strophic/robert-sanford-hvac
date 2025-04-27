import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'never'
  },
  site: 'https://robert-sanford-hvac.netlify.app',
});