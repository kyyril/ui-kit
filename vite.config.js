import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'remove-crossorigin-css',
      transformIndexHtml(html) {
        return html.replace(
          /<link rel="stylesheet" crossorigin href="([^"]*)">/g,
          '<link rel="stylesheet" href="$1">'
        );
      },
    },
  ],
  resolve: {
    alias: {
      "@kits": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    fs: {
      allow: [".", "src"],
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
