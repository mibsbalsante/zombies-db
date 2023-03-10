import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@ast/mixins.scss';",
      },
    },
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: "1.5rem",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@api": fileURLToPath(new URL("./src/api", import.meta.url)),
      "@ast": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@cmp": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@ctx": fileURLToPath(new URL("./src/context", import.meta.url)),
      "@fa": fileURLToPath(
        new URL("./src/assets/fontawesome/solid", import.meta.url)
      ),
      "@utl": fileURLToPath(new URL("./src/utils", import.meta.url)),
    },
  },
  server: {
    port: 9000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.js",
  },
})
