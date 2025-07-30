import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: '/linknest/',
  plugins: [react()],
  resolve: {
    alias: {
      "@bootstrap": path.resolve(__dirname, "node_modules/bootstrap/scss"),
      "@bootstrap-icons": path.resolve(
        __dirname,
        "node_modules/bootstrap-icons/font"
      ),
    },
  },

})
