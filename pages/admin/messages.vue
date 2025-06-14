<template>
  <div class="flex flex-col min-h-screen bg-white py-4">
    <div class="flex flex-row w-full justify-between px-6 items-center">
      <h1 class="text-3xl font-bold text-[#EB5523]">Messages</h1>
      <logout-component />
    </div>
    <hr class="border-0.5 border-black mt-4" />
    <div class="flex flex-col w-full h-full p-12">
      <div class="rounded-box border border-gray-300 text-black">
        <table class="table">
          <thead>
            <tr class="text-center text-black border-b border-black">
              <th>From</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="!messages" class="text-center">
              <td colspan="3">Loading data...</td>
            </tr>
            <tr class="border-b border-gray-200" v-for="(message, index) in messages" :key="index" v-else>
              <td class="text-center">{{ message.profile }}</td>
              <td class="text-center">{{ message.email }}</td>
              <td>{{ message.text }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: null,
    };
  },
  mounted() {
    this.messages = [
      {
        profile: "Budi Santoso",
        email: "budi.s@example.com",
        text: "Halo, saya ingin bertanya mengenai ketersediaan produk XYZ. Apakah masih ada stok?",
      },
      {
        profile: "Jane Smith",
        email: "jane.smith@email.com",
        text: "Thank you for the recent update. Everything looks great from my end. Let's proceed.",
      },
      {
        profile: "Siti Aminah",
        email: "siti.aminah@mail.net",
        text: "Permisi, mau konfirmasi jadwal meeting kita untuk besok. Apakah jadi jam 10 pagi?",
      },
      {
        profile: "Alex Williams",
        email: "alex.w@web.dev",
        text: "Just a quick follow-up on our last conversation. Any news on the project timeline?",
      },
      {
        profile: "Dewi Lestari",
        email: "dewi.lestari@example.co.id",
        text: "Terima kasih atas bantuannya. Sangat membantu sekali!",
      },
    ];
  },
};

definePageMeta({
  layout: "admin",
});
</script>
