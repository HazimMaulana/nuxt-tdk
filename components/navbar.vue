<template>
  <div class="w-full h-22 p-2 flex flex-row justify-between items-center ">
    <!-- LOGO -->
    <div class="text-black flex items-center">
      <p>LOGO</p>
    </div>

    <!-- Menu untuk layar kecil (mobile) menggunakan burger -->
    <div class="absolute right-0 top-0 p-2 lg:hidden">
      <div
        :class="[
          'bg-gray-300/40 backdrop-blur-sm shadow-md text-white p-4 rounded-2xl cursor-pointer transition-all duration-500 ease-in-out overflow-hidden w-fit flex flex-col items-end',
          isExpanded ? 'h-auto' : 'h-fit',
        ]"
        @click="togglePanel"
        :style="{ maxHeight: isExpanded ? '1000px' : '80px' }"
      >
        <h3 class="text-lg font-semibold">
          <svg class="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </h3>
        <div v-if="isExpanded" class="mt-2 flex flex-col items-end space-y-1.5 px-1 ml-14 text-black text-lg">
          <a href="">Home</a>
          <a href="">Article</a>
          <a href="">Our Portfolio</a>
          <a href="">Our Services</a>
          <a href="">About Us</a>
          <a href="">Contact</a>
        </div>
      </div>
    </div>

    <!-- Menu untuk layar besar (md dan lg) menggunakan menu horizontal -->
    <div class="hidden lg:flex flex-row space-x-6 shadow-md px-12 py-4 bg-gray-300/40 backdrop-blur-md text-black rounded-4xl">
      <a href="">Home</a>
      <a href="">Article</a>
      <a href="">Our Portfolio</a>
      <a href="">Our Services</a>
      <a href="">About Us</a>
      <a href="">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    togglePanel() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>
