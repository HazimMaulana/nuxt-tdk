<template>
  <div class="flex flex-col h-screen bg-white py-4">
    <div class="flex flex-row w-full justify-between px-6 items-center">
      <h1 class="text-3xl font-bold text-[#EB5523]">Profile</h1>
      <logout-component />
    </div>

    <hr class="border-0.5 border-black mt-4" />

    <div class="flex flex-col h-full w-full items-center mt-6">
      <div class="mx-auto w-40 text-center">
        <div class="relative w-40">
          <img class="w-40 h-40 rounded-full absolute" src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
          <button
            @click="triggerFileInput"
            class="w-40 h-40 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500"
          >
            <img class="hidden group-hover:block w-12" src="https://www.svgrepo.com/show/33565/upload.svg" alt="Upload Icon" />
          </button>

          <input type="file" ref="fileInput" @change="handleFileChange" accept="image/*" class="hidden" />
        </div>
      </div>

      <div class="flex flex-col w-full pt-40 items-center">
        <form action="" class="text-black w-[45%] flex flex-col space-y-2">
          <div class="flex flex-col space-y-1">
            <label for="" class="font-bold text-lg">Name</label>
            <input type="email" class="rounded-xl border border-black py-2" />
          </div>
          <div class="flex flex-col space-y-1">
            <label for="" class="font-bold text-lg">Email</label>
            <input type="email" class="rounded-xl border border-black py-2" />
          </div>
          <div class="flex flex-col space-y-1">
            <label for="" class="font-bold text-lg">Password</label>
            <input type="email" class="rounded-xl border border-black py-2" />
          </div>
          <div class="flex flex-col space-y-1">
            <label for="" class="font-bold text-lg">Confirm Password</label>
            <input type="email" class="rounded-xl border border-black py-2" />
          </div>
          <div class="flex w-full justify-end">
            <button class="flex flex-row py-2 px-5 text-white rounded-xl bg-[#EB5523] mt-4 hover:opacity-40 hover:text-black">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.4549 5.41583C21.5499 5.56004 21.5922 5.73261 21.5747 5.90442C21.5573 6.07622 21.481 6.23673 21.3589 6.35883L12.1659 15.5508C12.0718 15.6448 11.9545 15.7121 11.8259 15.7458L7.99689 16.7458C7.87032 16.7788 7.73732 16.7782 7.61109 16.7439C7.48485 16.7096 7.36978 16.6429 7.27729 16.5504C7.18479 16.4579 7.1181 16.3429 7.08382 16.2166C7.04955 16.0904 7.04888 15.9574 7.08189 15.8308L8.08189 12.0028C8.1118 11.8882 8.16679 11.7816 8.24289 11.6908L17.4699 2.46983C17.6105 2.32938 17.8011 2.25049 17.9999 2.25049C18.1986 2.25049 18.3893 2.32938 18.5299 2.46983L21.3589 5.29783C21.3938 5.33467 21.4259 5.37411 21.4549 5.41583ZM19.7679 5.82783L17.9999 4.06083L9.48189 12.5788L8.85689 14.9718L11.2499 14.3468L19.7679 5.82783Z"
                  fill="currentColor"
                />
                <path
                  d="M19.641 17.1601C19.9143 14.824 20.0016 12.47 19.902 10.1201C19.8997 10.0647 19.9088 10.0094 19.929 9.95778C19.9491 9.90614 19.9798 9.85925 20.019 9.82008L21.003 8.83608C21.0299 8.80904 21.064 8.79033 21.1013 8.78222C21.1385 8.77411 21.1774 8.77693 21.2131 8.79034C21.2488 8.80375 21.2798 8.82719 21.3025 8.85783C21.3252 8.88847 21.3386 8.92502 21.341 8.96308C21.5257 11.7543 21.4554 14.5566 21.131 17.3351C20.895 19.3571 19.271 20.9421 17.258 21.1671C13.7633 21.5538 10.2367 21.5538 6.74201 21.1671C4.73001 20.9421 3.10501 19.3571 2.86901 17.3351C2.45512 13.7905 2.45512 10.2097 2.86901 6.66508C3.10501 4.64308 4.72901 3.05808 6.74201 2.83308C9.39446 2.54012 12.0667 2.46888 14.731 2.62008C14.7691 2.62281 14.8057 2.63642 14.8363 2.65929C14.867 2.68215 14.8904 2.71332 14.9039 2.7491C14.9173 2.78487 14.9203 2.82376 14.9123 2.86115C14.9044 2.89854 14.8859 2.93287 14.859 2.96008L13.866 3.95208C13.8272 3.99092 13.7808 4.02136 13.7297 4.04149C13.6786 4.06162 13.6239 4.07101 13.569 4.06908C11.3458 3.99293 9.11993 4.07815 6.90901 4.32408C6.26295 4.39558 5.65986 4.6828 5.19717 5.13933C4.73447 5.59586 4.43919 6.19504 4.35901 6.84008C3.95787 10.2684 3.95787 13.7318 4.35901 17.1601C4.43919 17.8051 4.73447 18.4043 5.19717 18.8608C5.65986 19.3174 6.26295 19.6046 6.90901 19.6761C10.264 20.0511 13.736 20.0511 17.092 19.6761C17.7381 19.6046 18.3412 19.3174 18.8039 18.8608C19.2666 18.4043 19.5608 17.8051 19.641 17.1601Z"
                  fill="currentColor"
                />
              </svg>
              <p>Submit</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from "chart.js";

definePageMeta({
  layout: "admin",
});
</script>
