import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        biteAndBrew: resolve(__dirname, 'demos/bite-and-brew/index.html'),
        cakrawalaAcademy: resolve(__dirname, 'demos/cakrawala-academy/index.html'),
        urbanCart: resolve(__dirname, 'demos/urban-cart/index.html'),
        sehatMedika: resolve(__dirname, 'demos/sehat-medika/index.html'),
        kriyaNusantara: resolve(__dirname, 'demos/kriya-nusantara/index.html'),
      },
    },
  },
});
