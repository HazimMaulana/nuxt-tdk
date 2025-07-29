import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  // Mengambil konfigurasi dari nuxt.config.js
  const config = useRuntimeConfig();

  // Mengambil baseURL dari runtimeConfig.
  // Pastikan ini sudah diatur di nuxt.config.js
  const baseURL = config.public.apiBaseUrl;

  if (!baseURL) {
    console.warn("API baseURL tidak diatur di runtimeConfig.public.apiBase");
  }

  // Membuat instance axios yang sudah dikonfigurasi
  const api = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    withCredentials: true, // Jika perlu mengirim cookies atau header otentikasi
  });

  // Anda bisa menambahkan interceptor di sini jika perlu
  // api.interceptors.request.use(...)

  // Menyediakan instance 'api' ke seluruh aplikasi dengan nama `$api`
  return {
    provide: {
      api: api,
    },
  };
});
