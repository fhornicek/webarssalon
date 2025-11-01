// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
site: 'https://www.filiphornicek.cz',
  base: '/webarssalon', // pro root doménu
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});