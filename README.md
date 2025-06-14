# Proyek Nuxt dengan DaisyUI dan PrimeVue

Proyek ini adalah starter Nuxt.js yang telah dikonfigurasi untuk menggunakan **Tailwind CSS** dengan plugin **DaisyUI** untuk styling komponen cepat, dan **PrimeVue** untuk koleksi komponen UI yang kaya dan fungsional.

[![Nuxt](https://img.shields.io/badge/Nuxt-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com)
[![PrimeVue](https://img.shields.io/badge/PrimeVue-42B883?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://primevue.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## ✨ Tumpukan Teknologi Utama (Tech Stack)

* **Framework**: [Nuxt.js](https://nuxt.com)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Komponen UI (Kelas CSS)**: [DaisyUI](https://daisyui.com/)
* **Komponen UI (Lengkap)**: [PrimeVue](https://primevue.org/)
* **Ikon**: [PrimeIcons](https://primevue.org/icons/)

## ⚙️ Konfigurasi Kunci

Konfigurasi utama untuk UI framework berada di dua file:

1.  **Tailwind CSS & DaisyUI** (`tailwind.config.js`):
    DaisyUI ditambahkan sebagai plugin di dalam konfigurasi Tailwind. Di sini Anda juga bisa mengatur tema DaisyUI yang ingin digunakan.

    ```javascript
    // tailwind.config.js
    module.exports = {
      // ...
      plugins: [
        require('daisyui'),
      ],
      // (Opsional) Konfigurasi tema DaisyUI
      daisyui: {
        themes: ["light", "dark", "cupcake"],
      },
    }
    ```

2.  **PrimeVue** (`nuxt.config.ts`):
    PrimeVue diintegrasikan menggunakan modul Nuxt-nya. Di sini Anda bisa mengonfigurasi opsi seperti penggunaan komponen secara otomatis, tema, *ripple effect*, dan lainnya.

    ```typescript
    // nuxt.config.ts
    export default defineNuxtConfig({
      modules: [
          '@primevue/nuxt-module'
      ],
      primevue: {
          usePrimeVue: true,
          components: {
              prefix: '', // atau 'P' jika Anda ingin <p-button>
              include: ['Button', 'DataTable', 'InputText'] // tentukan komponen yang ingin diimpor global
          },
          // (Opsional) Atur tema atau gunakan mode unstyled
          theme: {
            preset: 'Lara', // Contoh tema
            options: {
                darkModeSelector: '.dark-mode'
            }
          }
      }
    })
    ```

## 🚀 Memulai Proyek (Getting Started)

### 1. Instalasi Dependensi

Pastikan semua dependensi yang dibutuhkan telah terinstal.

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install