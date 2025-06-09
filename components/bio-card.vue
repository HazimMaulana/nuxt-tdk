<template>
  <div class="flex flex-col items-center justify-center w-64 sm:w-72 p-4 md:aspect-square border rounded-4xl border-black space-y-2">
    <img :src="image" :alt="name" class="object-contain w-32 h-32  md:w-40 md:h-40">
    <div class="flex flex-col space-y-0 text-center">
      <h2 class="font-bold text-black text-xl sm:text-2xl">{{ name }}</h2>
      <p class="text-black text-base">{{ title }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Define the props that this component expects to receive
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: '/img/bioprofile.png' // Provide a default image if none is passed
  }
});
</script>