import tailwindcss from "@tailwindcss/vite";
import Aura from "@primevue/themes/aura"; 
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ["@primevue/nuxt-module"],
  
  primevue: {
    options: {
      // unstyled: true,
      pt: {},
      theme: {
        preset: Aura, // 'Aura' sekarang bisa ditemukan
        options: {
          darkModeSelector: '',
        }
      },
    },
  },
});