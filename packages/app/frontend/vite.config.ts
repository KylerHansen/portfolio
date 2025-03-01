import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  envDir: "./config/",
  optimizeDeps: {
    esbuildOptions: {
      target: "ES2022",
    },
  },
  build: {
    target: "ES2022",
  },
});
