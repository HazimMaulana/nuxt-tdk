import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  // Mengambil konfigurasi dari nuxt.config.js
  const config = useRuntimeConfig();

  // Mengambil baseURL dari runtimeConfig.
  const baseURL = config.public.apiBaseUrl;

  if (!baseURL) {
    console.warn("API baseURL tidak diatur di runtimeConfig.public.apiBaseUrl");
  }

  // Membuat instance axios yang sudah dikonfigurasi
  const api = axios.create({
    baseURL: baseURL,
    withCredentials: true, // Jika perlu mengirim cookies atau header otentikasi
  });

  // Menambahkan interceptor untuk request
  api.interceptors.request.use(
    (config) => {
      // Contoh: Menambahkan token akses ke header Authorization
      const accessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NjdlNGZlZGQyYTk3NjNmM2NlNGZkNCIsImlhdCI6MTc1MzgwMzUyOSwiZXhwIjoxNzUzODA0NDI5fQ.YpW7h9lP4Cw5RRM8H5a4ULQ0unGU-ZF7Ou0uvx7cBic"; // Ganti dengan cara Anda mendapatkan token akses
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Menambahkan interceptor untuk response (opsional)
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      // Contoh: Menangani error global
      console.error("API Error:", error.response?.data || error.message);
      return Promise.reject(error);
    }
  );

  // Menyediakan instance 'api' ke seluruh aplikasi dengan nama `$api`
  nuxtApp.provide("api", api);
});
