import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  server: {
    proxy: {
        "/api": {
            target: 'http://ec2-13-209-68-37.ap-northeast-2.compute.amazonaws.com:8000',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
            secure: false,
            ws: true,
        },
    },
  },
});
