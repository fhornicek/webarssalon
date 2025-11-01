// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // site: 'https://www.example.com', // zakomentujte nebo vynechte
  base: '/', // pro root doménu
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});