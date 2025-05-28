<script setup lang="ts">
import HomepageCard from '../components/homepage-card.vue';

</script>

<template>
  <div class="bg-[url(/img/placeholder.png)] h-lvh bg-cover bg-center">
    <navbar />

    <div class="flex flex-col w-full h-lvh justify-center items-center">
      <div class="flex flex-col w-[40%] justify-center items-center">
        <h1 class="font-bold text-xl text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p class="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi esse accusamus omnis nobis eaque tempore ipsam, odit culpa aut, similique eum dolores iure error
          temporibus molestiae, voluptatum natus! Minus!
        </p>
      </div>
      <a href="" class="flex flex-row border-black border-1 rounded-full px-4 py-1 mt-4 text-sm items-center space-x-2">
        <svg width="13" height="14" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.62842 14.4654V1.89356C7.62842 1.57481 7.73642 1.30781 7.95242 1.09256C8.16842 0.877309 8.43542 0.769309 8.75342 0.768559C9.07142 0.767809 9.33842 0.875809 9.55442 1.09256C9.77042 1.30931 9.87842 1.57631 9.87842 1.89356V14.4654L15.3909 8.95293C15.6159 8.72793 15.8784 8.61993 16.1784 8.62893C16.4784 8.63793 16.7409 8.75531 16.9659 8.98106C17.1722 9.20606 17.2802 9.46855 17.2899 9.76855C17.2997 10.0686 17.1917 10.3311 16.9659 10.5561L9.54092 17.9811C9.42842 18.0936 9.30654 18.1734 9.17529 18.2207C9.04404 18.2679 8.90342 18.2912 8.75342 18.2904C8.60342 18.2897 8.46279 18.2664 8.33154 18.2207C8.20029 18.1749 8.07842 18.0951 7.96592 17.9811L0.540918 10.5561C0.334668 10.3498 0.231543 10.0922 0.231543 9.78318C0.231543 9.47418 0.334668 9.20681 0.540918 8.98106C0.765918 8.75606 1.03292 8.64356 1.34192 8.64356C1.65092 8.64356 1.91829 8.75606 2.14404 8.98106L7.62842 14.4654Z"
            fill="#EB5523"
          />
        </svg>
        <p class="font-semibold mb-1">More Of Our Team</p>
      </a>
    </div>
  </div>

  <div class="flex h-[100vh] bg-white justify-center items-center">
    <div class="flex-col bg-[url(/img/grafisbg.png)] bg-cover bg-no-repeat w-[50%] h-[50%] rounded-4xl text-white px-6 space-y-2 justify-center flex">
      <p class="font-bold text-3xl">Visi Kami</p>
      <p class="pt-4 text-xl">
        Menjadi pemimpin terpercaya dalam perencanaan dan supervisi proyek, menciptakan solusi berkelanjutan dan inovatif yang berkontribusi pada pembangunan infrastruktur dan
        kemajuan masyarakat.
      </p>
      <a href="" class="flex flex-row items-center border-white border w-fit rounded-full px-4 py-1 space-x-2 mt-6">
        <svg width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.1969 10.625H1.625C1.30625 10.625 1.03925 10.517 0.824004 10.301C0.608754 10.085 0.500754 9.818 0.500004 9.5C0.499254 9.182 0.607254 8.915 0.824004 8.699C1.04075 8.483 1.30775 8.375 1.625 8.375H14.1969L8.68437 2.8625C8.45937 2.6375 8.35138 2.375 8.36038 2.075C8.36938 1.775 8.48675 1.5125 8.7125 1.2875C8.9375 1.08125 9.2 0.973246 9.5 0.963496C9.8 0.953746 10.0625 1.06175 10.2875 1.2875L17.7125 8.7125C17.825 8.825 17.9049 8.94687 17.9521 9.07812C17.9994 9.20937 18.0226 9.35 18.0219 9.5C18.0211 9.65 17.9979 9.79062 17.9521 9.92187C17.9064 10.0531 17.8265 10.175 17.7125 10.2875L10.2875 17.7125C10.0813 17.9187 9.82362 18.0219 9.51462 18.0219C9.20563 18.0219 8.93825 17.9187 8.7125 17.7125C8.4875 17.4875 8.375 17.2205 8.375 16.9115C8.375 16.6025 8.4875 16.3351 8.7125 16.1094L14.1969 10.625Z"
            fill="#EB5523"
          />
        </svg>
        <p class="text-white">About Us</p>
      </a>
    </div>
  </div>

  <div class="flex flex-col h-[100vh] bg-[#DDDDDD] justify-center items-center">
    <div class="flex flex-row justify-center items-center h-full">
      <homepage-card class=""/>
      <div class="grid grid-cols-2 gap-2 scale-50">
        <homepage-card class=""/>
        <homepage-card class=""/>
        <homepage-card class=""/>
        <homepage-card class=""/>
      </div>
    </div>
  </div>

  <footer-component />
</template>
