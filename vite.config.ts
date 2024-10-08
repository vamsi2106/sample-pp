import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Redirect API requests to the fake API
      "/auth": {
        target: "https://dummyjson.com", // The API URL
        changeOrigin: true, // Changes the origin to avoid CORS issues
        rewrite: (path) => path.replace(/^\/auth/, "/auth"),
      },
    },
  },
});
