import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Espejo de "paths" en jsconfig.json: "@/hooks/useRoute" -> "src/hooks/useRoute".
    // Imports independientes de la ubicación del archivo, para poder moverlo sin romperlos.
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
