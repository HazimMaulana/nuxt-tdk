<template>
  <div class="hidden lg:card bg-base-100 w-120 shadow-sm rounded-4xl">
    <div class="card-body bg-white rounded-t-4xl">
      <h2 class="card-title text-black">Card Title</h2>
      <p class="text-black">A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div class="card-actions justify-start">
        <button class="btn rounded-full bg-white text-black">More Details</button>
      </div>
    </div>
    <figure>
      <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
    </figure>
  </div>
  <div class="flex w-screen px-4">
    <div class="lg:hidden card bg-base-100 w-full shadow-sm rounded-4xl">
      <div class="card-body bg-white rounded-t-4xl">
        <h2 class="card-title text-black">Card Title</h2>
        <p class="text-black">A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div class="card-actions justify-start">
          <button class="btn rounded-full bg-white text-black">More Details</button>
        </div>
      </div>
      <figure>
        <img class="" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
      </figure>
    </div>
  </div>
</template>
