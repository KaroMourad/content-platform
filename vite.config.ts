import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  const port = parseInt(env.PORT) || 3000;
  const VITE_API_CLIENT_ID = env.VITE_API_CLIENT_ID || "";
  const VITE_API_BASE_URL = env.VITE_API_BASE_URL || "https://api.unsplash.com";
  return {
    plugins: [react(), svgr()],
    build: {
      minify: 'esbuild',
    },
    server: {
      port,
    },
    preview: {
      open: false,
      port,
    },
    // vite config
    define: {
      VITE_API_CLIENT_ID: JSON.stringify(VITE_API_CLIENT_ID),
      VITE_API_BASE_URL: JSON.stringify(VITE_API_BASE_URL),
      VITE_PORT: JSON.stringify(port),
    },
  };
});
