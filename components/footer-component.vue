<template>
  <main class="min-h-screen bg-[#EB5523] flex flex-col text-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col flex-grow">

      <div class="flex flex-col md:flex-row w-full mt-12 sm:mt-16 justify-between gap-12">

        <nav aria-label="Main Navigation" class="flex flex-col space-y-2 text-base sm:text-lg order-2 md:order-1">
          <a href="#"
            class="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-white/70 rounded">Home</a>
          <a href="#"
            class="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-white/70 rounded">Article</a>
          <a href="#"
            class="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-white/70 rounded">Our
            Portofolio</a>
          <a href="#"
            class="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-white/70 rounded">Our
            Service</a>
          <a href="#"
            class="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-white/70 rounded">About
            Us</a>
        </nav>

        <div class="flex flex-col w-full md:w-auto md:flex-grow lg:w-3/5 order-1 md:order-2">
          <p class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <a href="#"
            class="flex flex-row items-center border-white border w-fit rounded-full px-4 py-2 space-x-2 mt-8 text-sm sm:text-base hover:bg-white/20 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-200">
            <svg width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true">
              <title>Arrow pointing right</title>
              <path
                d="M14.1969 10.625H1.625C1.30625 10.625 1.03925 10.517 0.824004 10.301C0.608754 10.085 0.500754 9.818 0.500004 9.5C0.499254 9.182 0.607254 8.915 0.824004 8.699C1.04075 8.483 1.30775 8.375 1.625 8.375H14.1969L8.68437 2.8625C8.45937 2.6375 8.35138 2.375 8.36038 2.075C8.36938 1.775 8.48675 1.5125 8.7125 1.2875C8.9375 1.08125 9.2 0.973246 9.5 0.963496C9.8 0.953746 10.0625 1.06175 10.2875 1.2875L17.7125 8.7125C17.825 8.825 17.9049 8.94687 17.9521 9.07812C17.9994 9.20937 18.0226 9.35 18.0219 9.5C18.0211 9.65 17.9979 9.79062 17.9521 9.92187C17.9064 10.0531 17.8265 10.175 17.7125 10.2875L10.2875 17.7125C10.0813 17.9187 9.82362 18.0219 9.51462 18.0219C9.20563 18.0219 8.93825 17.9187 8.7125 17.7125C8.4875 17.4875 8.375 17.2205 8.375 16.9115C8.375 16.6025 8.4875 16.3351 8.7125 16.1094L14.1969 10.625Z"
                fill="white" />
            </svg>
            <p>Contact Us</p>
          </a>
        </div>
      </div>

      <div class="flex flex-col w-full items-center justify-center flex-grow py-8">
        <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-stroke font-extrabold uppercase break-words">
          PT.TOTAL
          DESAIN<br>KONSULTAN</h1>
      </div>

      <footer class="flex flex-col md:flex-row justify-between text-sm sm:text-base pb-4 sm:pb-6 lg:pb-8">
        <p>Privacy Policy</p>
        <p>©2025 PT. Total Desain Konsultan</p>
      </footer>
    </div>
  </main>
</template>

<script setup>
// Script setup jika Anda memerlukan logika, jika tidak bisa dikosongkan.
</script>

<style>
.text-stroke {
  color: #EB5523;
  text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
}
</style>