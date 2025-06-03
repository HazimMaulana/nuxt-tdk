<template>
  <div class="flex justify-between px-6 items-center pt-2 w-full fixed z-30">
    <div class="text-black">
      <p>LOGO</p>
    </div>
    <div
      class="hidden md:flex flex-row shadow-md rounded-full px-12 py-4 space-x-6 text-[1rem] bg-gray-300/40 backdrop-blur-md text-black">
      <a href="#">Home</a>
      <a href="#">Article</a>
      <a href="#">Our Portofolio</a>
      <a href="#">Our Service</a>
      <a href="#">About Us</a>
      <a href="#">Contact</a>
    </div>
    <div class="lg:hidden flex items-center justify-center z-40">
      <label class="btn btn-ghost swap swap-rotate rounded-2xl bg-gray-400/50 backdrop-blur-md">
        <input type="checkbox" @change="handleMenuToggle" v-model="isMobileMenuOpen" />

        <svg class="swap-off fill-black" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
          viewBox="0 0 512 512">
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        <svg class="swap-on fill-black" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
          <polygon
            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
    </div>
    <div class="w-screen h-screen fixed top-0 left-0 bg-gray-900/50 backdrop-blur-md z-20 items-center justify-center"
      :class="{ 'flex': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }" id="mobile-menu">
      <div class="flex flex-col items-start justify-center h-full space-y-6 text-white">
        <a href="#" class="text-lg" @click="closeMobileMenu">
          <p class="font-extrabold text-5xl">Home</p>
        </a>
        <a href="#" class="text-lg" @click="closeMobileMenu">
          <p class="font-extrabold text-5xl">Article</p>
        </a>
        <a href="#" class="text-lg" @click="closeMobileMenu">
          <p class="font-extrabold text-5xl">Our Portfolio</p>
        </a>
        <a href="#" class="text-lg" @click="closeMobileMenu">
          <p class="font-extrabold text-5xl">Our Service</p>
        </a>
        <a href="#" class="text-lg" @click="closeMobileMenu">
          <p class="font-extrabold text-5xl">About</p>
        </a>
        <a href="#" class="text-lg" @click="closeMobileMenu">
          <p class="font-extrabold text-5xl">Contact</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false // State untuk melacak status menu mobile
    };
  },
  methods: {
    handleMenuToggle() {
      console.log('Menu toggled, new state:', this.isMobileMenuOpen);
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    }
  }
};
</script>
