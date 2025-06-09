<template>
  <div class="bg-[url(/img/placeholder.png)] h-[50vh] lg:h-screen bg-cover bg-center flex flex-col justify-center text-black items-center">
    <div class="space-y-2 lg:w-1/2 flex flex-col items-center">
      <h1 class="font-extrabold text-2xl lg:text-5xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p class="lg:text-2xl text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab magni explicabo quibusdam architecto tenetur?</p>
      <a href="" class="flex flex-row w-fit border-black border rounded-full px-4 py-2 mt-6 text-sm items-center space-x-2 hover:bg-gray-100 transition-colors">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.1969 10.625H1.625C1.30625 10.625 1.03925 10.517 0.824004 10.301C0.608754 10.085 0.500754 9.818 0.500004 9.5C0.499254 9.182 0.607254 8.915 0.824004 8.699C1.04075 8.483 1.30775 8.375 1.625 8.375H14.1969L8.68437 2.8625C8.45937 2.6375 8.35138 2.375 8.36038 2.075C8.36938 1.775 8.48675 1.5125 8.7125 1.2875C8.9375 1.08125 9.2 0.973246 9.5 0.963496C9.8 0.953746 10.0625 1.06175 10.2875 1.2875L17.7125 8.7125C17.825 8.825 17.9049 8.94687 17.9521 9.07812C17.9994 9.20937 18.0226 9.35 18.0219 9.5C18.0211 9.65 17.9979 9.79062 17.9521 9.92187C17.9064 10.0531 17.8265 10.175 17.7125 10.2875L10.2875 17.7125C10.0813 17.9187 9.82362 18.0219 9.51462 18.0219C9.20563 18.0219 8.93825 17.9187 8.7125 17.7125C8.4875 17.4875 8.375 17.2205 8.375 16.9115C8.375 16.6025 8.4875 16.3351 8.7125 16.1094L14.1969 10.625Z"
            fill="#EB5523"
          />
        </svg>
        <p class="font-semibold text-black">Our Services</p>
      </a>
    </div>
  </div>
  <div class="max-w-screen h-screen flex flex-col justify-center px-12 lg:px-24 text-justify space-y-4">
    <div class="flex flex-col w-full space-y-2">
      <h1 class="text-4xl lg:text-6xl font-bold text-[#EB5523]">Our Vision</h1>
      <p class="lg:text-2xl">
        Menjadi pemimpin terpercaya dalam perencanaan dan supervisi proyek, menciptakan solusi berkelanjutan dan inovatif yang berkontribusi pada pembangunan infrastruktur dan
        kemajuan masyarakat.
      </p>
    </div>
    <hr />
    <div class="flex flex-col w-full space-y-2">
      <h1 class="text-4xl lg:text-6xl font-bold text-[#EB5523]">Our Mission</h1>
      <ol class="list-decimal pl-6 lg:text-2xl">
        <li>Memberikan layanan perencanaan dan supervisi terbaik untuk proyek gedung, jalan, jembatan, dan sumber daya air.</li>
        <li>Memastikan manajemen konstruksi yang efisien dan memenuhi ekspektasi klien.</li>
        <li>Mengadopsi teknologi dan praktik inovatif yang memprioritaskan kualitas, keselamatan, dan keberlanjutan lingkungan.</li>
        <li>Membangun kemitraan jangka panjang yang didasarkan pada kepercayaan dan profesionalisme.</li>
      </ol>
    </div>
  </div>
  <div class="flex flex-col max-w-screen min-h-screen bg-white justify-center items-center">
    <h1 class="text-2xl text-[#EB5523] font-bold">Struktur Manajemen</h1>
    <h2 class="text-xl text-[#EB5523] font-semibold mb-4">Direktur Utama</h2>
    <div class="flex justify-center mb-12">
      <BioCard
        v-if="mainDirector"
        :name="mainDirector.name"
        :title="mainDirector.title"
        :image="mainDirector.image"
      />
      <p v-else>Direktur utama tidak ditemukan.</p>
    </div>

    <div class="flex flex-row mb-12 max-w-screen px-2 space-x-2">
      <BioCard
        v-for="member in otherDirectors"
        :key="member.id"
        :name="member.name"
        :title="member.title"
        :image="member.image"
       class=""/>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
      <BioCard
        v-for="member in generalManagement"
        :key="member.id"
        :name="member.name"
        :title="member.title"
        :image="member.image"
      />
    </div>

    <!-- <h1 class="text-black font-bold text-6xl mt-12 text-center w-full">the end</h1> -->
    <div class="flex flex-row w-full"></div>
  </div>
</template>

<script>
import { h } from "vue";
import BioCard from "/components/bio-card.vue";


export default {
  data() {
    return {
      managementTeam: [
        { level: 1, name: "John Doe", title: "Direktur Utama", image: "/img/bioprofile.png" },
        { level: 2, name: "Jane Smith", title: "Direktur Operasional", image: "/img/bioprofile.png" },
        { level: 2, name: "Peter Jones", title: "Direktur Keuangan", image: "/img/bioprofile.png" },
        { level: 2, name: "Alice Brown", title: "Kepala Divisi Teknis", image: "/img/bioprofile.png" },
        { level: 3, name: "Rizky Pratama", title: "Manajer Pemasaran", image: "/img/bioprofile.png" },
        { level: 3, name: "Maya Indah Sari", title: "Manajer SDM", image: "/img/bioprofile.png" },
        { level: 3, name: "Joko Susilo", title: "Kepala Proyek Senior", image: "/img/bioprofile.png" },
        { level: 3, name: "Citra Kirana", title: "Spesialis Desain Grafis", image: "/img/bioprofile.png" },
      ],
    };
  },
  computed: {
    // Computed property untuk Direktur Utama (ID 1)
    mainDirector() {
      return this.managementTeam.find(member => member.level === 1);
    },
    // Computed property untuk Direksi Lainnya (ID 2, 3, 4)
    otherDirectors() {
      return this.managementTeam.filter(member => member.level === 2);
    },
    // Computed property untuk Manajemen Umum (ID 5 ke atas)
    generalManagement() {
      return this.managementTeam.filter(member => member.level >= 3);
    },
  },
};
</script>
