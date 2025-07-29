import tailwindcss from "@tailwindcss/vite";
import Aura from "@primevue/themes/aura";
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || "kon", // Pastikan ini ada
      node_env: process.env.NODE_ENV || "development", // Tambahkan ini untuk mengakses NODE_ENV
    },
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@primevue/nuxt-module"],
  primevue: {
    options: {
      // unstyled: true,
      pt: {},
      theme: {
        preset: Aura, // 'Aura' sekarang bisa ditemukan
        options: {
          darkModeSelector: "",
        },
      },
    },
  },
});
