import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },

  // 👇 ESTA PARTE É A QUE RESOLVE O ERRO DO ROLLDOWN
  vite: {
    build: {
      rollupOptions: {}
    }
  }
});
