<template>
  <div class="card bg-base-100 w-full shadow-lg rounded-2xl overflow-hidden">
    <div class="card-body bg-white rounded-t-2xl p-4 sm:p-6">
      <h2 class="card-title text-black text-xl sm:text-2xl">Card Title</h2>
      <p class="text-black text-sm sm:text-base mt-1">
        A card component has a figure, a body part, and inside body there are title and actions parts.
      </p>
      <div class="card-actions justify-start mt-4">
        <button class="btn btn-sm sm:btn-md rounded-full bg-gray-200 hover:bg-gray-300 text-black transition-colors">
          More Details
        </button>
      </div>
    </div>
    <figure>
      <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes"
        class="w-full h-auto object-cover" />
    </figure>
  </div>
</template>
