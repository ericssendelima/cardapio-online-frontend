import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    modules: {
      scopeBehaviour: 'local', // Pode ser 'global' ou 'local'
      globalModulePaths: [],
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      hashPrefix: 'prefix',
    },
  },
  server: {
    host: "0.0.0.0", // Permite conexões de todos os endereços IP
    port: 5174, // Porta padrão do Vite
  },
});
