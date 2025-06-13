import { defineNuxtPlugin } from '#app';
import PrimeVue from 'primevue/config';
// Path impor yang benar menggunakan '@' karena ini adalah paket terpisah
import Aura from '@primevue/themes/aura'; // <--- PERBAIKI BARIS INI

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PrimeVue, {
        unstyled: true,
        pt: Aura
    });
});