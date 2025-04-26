import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: 'https://robert-sanford-hvac.netlify.app',
    base: '/',
    integrations: [tailwind()]
});
