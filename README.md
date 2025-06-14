# Proyek Nuxt dengan DaisyUI, Tailwind CSS, dan PrimeVue 

Selamat datang di proyek Nuxt.js ini\! Starter ini dirancang dengan kombinasi kuat antara **Tailwind CSS** untuk fondasi styling, **DaisyUI** untuk komponen berbasis kelas yang cepat, dan **PrimeVue** untuk komponen UI yang kaya fitur dan siap pakai.

[](https://nuxt.com)
[](https://daisyui.com)
[](https://primevue.org/)
[](https://tailwindcss.com/)

## ✨ Tumpukan Teknologi Utama (Tech Stack)

  * **Framework**: [Nuxt.js](https://nuxt.com)
  * **Styling**: [Tailwind CSS](https://tailwindcss.com/)
  * **Komponen UI (Kelas CSS)**: [DaisyUI](https://daisyui.com/)
  * **Library Komponen**: [PrimeVue](https://primevue.org/) dengan tema [Aura](https://primevue.org/aura/)
  * **Ikon**: [PrimeIcons](https://primevue.org/icons/)

## 📁 Struktur File Penting

Konfigurasi untuk proyek ini tersebar di beberapa file kunci:

```
/
├── nuxt.config.ts        # Konfigurasi Nuxt, modul, & PrimeVue
├── tailwind.config.js      # Konfigurasi Tailwind & plugin DaisyUI
├── assets/
│   └── css/
│       └── main.css      # Import Tailwind & style global kustom
└── package.json
```

## ⚙️ Konfigurasi Kunci

Berikut adalah detail konfigurasi di setiap file penting.

### 1\. File `nuxt.config.ts`

File ini adalah pusat kendali proyek Nuxt. Di sini kita mendaftarkan modul PrimeVue dan plugin Vite untuk Tailwind CSS.

```typescript
// nuxt.config.ts
import tailwindcss from "@tailwindcss/vite";
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  // Menentukan file CSS global
  css: ['~/assets/css/main.css'],

  // Mendaftarkan modul PrimeVue
  modules: ["@primevue/nuxt-module"],

  // Mengaktifkan Tailwind CSS melalui Vite
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  
  // Konfigurasi spesifik untuk PrimeVue dan tema Aura
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: ".dark", // Disesuaikan dengan implementasi dark mode Anda
        },
      },
    },
  },
});
```

### 2\. File `tailwind.config.js`

Di sini DaisyUI diintegrasikan sebagai plugin dari Tailwind CSS.

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui') // Menambahkan DaisyUI sebagai plugin
  ],
  daisyui: {
    themes: ["light", "dark"], // Tentukan tema DaisyUI yang Anda inginkan
  }
};
```

### 3\. File `assets/css/main.css`

File ini adalah titik masuk untuk semua style global Anda. Ini mengimpor layer dasar Tailwind dan berisi style kustom Anda.

```css
/* assets/css/main.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

/* Mengimpor layer dasar, komponen, dan utilitas Tailwind */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Style global kustom Anda */
@layer base {
  body {
    font-family: "Inter", sans-serif;
  }
}

.stroke {
  -webkit-text-stroke-width: 1px;
  -webkit-text-fill-color: transparent;
  color: #fff;
}

.color-signature {
  color: #EB5523;
}
```

## 🚀 Memulai Proyek (Getting Started)

### 1\. Instalasi Dependensi

Pastikan semua dependensi telah terinstal.

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### 2\. Menjalankan Server Development

Mulai server development di `http://localhost:3000`.

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## 🎨 Penggunaan (Usage)

### Menggunakan DaisyUI

Tambahkan kelas komponen DaisyUI langsung pada elemen HTML Anda.

```html
<button class="btn btn-primary">Tombol DaisyUI</button>
```

### Menggunakan PrimeVue

Gunakan komponen PrimeVue sebagai tag di template Anda.

```html
<Button label="Tombol PrimeVue" icon="pi pi-check" />
```

### Menggunakan Style Kustom

Terapkan kelas kustom yang Anda definisikan di `main.css`.

```html
<h1 class="color-signature">Teks dengan Warna Signature</h1>
```

> **💡 Pro Tip**: PrimeVue (dengan tema) dan DaisyUI sama-sama memiliki style untuk komponen umum seperti tombol. Jika terjadi tumpang tindih, Anda bisa menggunakan mode **Unstyled** dari PrimeVue atau membuat kelas CSS Anda lebih spesifik untuk menimpa style yang tidak diinginkan.

## 📦 Build & Deployment

Membangun aplikasi untuk production:

```bash
npm run build
```

Menjalankan preview dari build production secara lokal:

```bash
npm run preview
```

-----

Untuk informasi lebih lanjut, kunjungi dokumentasi resmi [Nuxt.js](https://nuxt.com/docs/getting-started/introduction).