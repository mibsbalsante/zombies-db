import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import ";',
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@ast": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@cmp": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@utl": fileURLToPath(new URL("./src/utils", import.meta.url)),
    },
  },
  server: {
    port: 9000,
  },
});
