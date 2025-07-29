<template>
  <div class="flex flex-col min-h-screen bg-white py-4">
    <div class="flex flex-row w-full justify-between px-6 items-center">
      <h1 class="text-3xl font-bold text-[#EB5523]">{{ judulHalaman }}</h1>
      <logout-component />
    </div>
    <hr class="border-0.5 border-black mt-4" />

    <div v-if="tampilanAktif === 'daftar'" class="px-6 mt-12">
      <div class="flex flex-row justify-between items-center w-full">
        <button @click="tampilanAktif = 'buat'" class="btn shadow-none border-0 flex flex-row justify-center items-center space-x-2 px-4 py-3 rounded-xl bg-[#EB5523] text-white">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.857 3.56689C11.3367 3.56689 11.7255 3.95575 11.7255 4.43543V10.5151H17.8053C18.2849 10.5151 18.6738 10.904 18.6738 11.3837C18.6738 11.8634 18.2849 12.2522 17.8053 12.2522H11.7255V18.3319C11.7255 18.8116 11.3367 19.2005 10.857 19.2005C10.3773 19.2005 9.98847 18.8116 9.98847 18.3319V12.2522H3.90875C3.42908 12.2522 3.04022 11.8634 3.04022 11.3837C3.04022 10.904 3.42908 10.5151 3.90875 10.5151H9.98847V4.43543C9.98847 3.95575 10.3773 3.56689 10.857 3.56689Z"
              fill="#F1F1F1"
            />
          </svg>
          <p>Create Portofolio</p>
        </button>
        <div class="flex flex-row items-center space-x-3">
          <FloatLabel variant="on">
            <InputText :class="$style.myinput" id="on_label" v-model="value" />
            <label for="on_label" class="flex felx-row items-center space-x-2">
              <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.61043 9.20962C3.36411 9.20962 2.30943 8.77787 1.44638 7.91437C0.583333 7.05086 0.151581 5.99618 0.151123 4.75032C0.150666 3.50446 0.582418 2.44978 1.44638 1.58627C2.31034 0.722768 3.36502 0.291016 4.61043 0.291016C5.85583 0.291016 6.91074 0.722768 7.77516 1.58627C8.63958 2.44978 9.0711 3.50446 9.06973 4.75032C9.06973 5.25342 8.98969 5.72793 8.82961 6.17386C8.66953 6.61979 8.45229 7.01427 8.17787 7.3573L12.0197 11.1992C12.1455 11.3249 12.2084 11.485 12.2084 11.6794C12.2084 11.8738 12.1455 12.0338 12.0197 12.1596C11.894 12.2854 11.7339 12.3483 11.5395 12.3483C11.3451 12.3483 11.185 12.2854 11.0593 12.1596L7.2174 8.31776C6.87438 8.59218 6.4799 8.80943 6.03397 8.9695C5.58804 9.12958 5.11353 9.20962 4.61043 9.20962ZM4.61043 7.83753C5.46798 7.83753 6.19702 7.5375 6.79754 6.93743C7.39806 6.33737 7.69809 5.60833 7.69764 4.75032C7.69718 3.8923 7.39715 3.16349 6.79754 2.56389C6.19794 1.96428 5.4689 1.66402 4.61043 1.66311C3.75195 1.66219 3.02314 1.96245 2.424 2.56389C1.82485 3.16532 1.52459 3.89413 1.52322 4.75032C1.52184 5.6065 1.8221 6.33554 2.424 6.93743C3.02589 7.53933 3.7547 7.83936 4.61043 7.83753Z"
                  fill="black"
                />
              </svg>
              <p>Search</p>
            </label>
          </FloatLabel>

          <div class="dropdown dropdown-hover dropdown-end w-full">
            <div tabindex="0" role="button" class="btn m-1 bg-white text-black rounded-4xl shadow-none flex flex-row space-x-2 w-fit">
              <p>Sort By</p>
              <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.33334 6.12106L12.6417 0.812728C12.8222 0.632173 13.036 0.544784 13.283 0.550562C13.53 0.556339 13.7435 0.649747 13.9236 0.830784C14.1037 1.01182 14.194 1.2256 14.1945 1.47212C14.1949 1.71864 14.1047 1.93217 13.9236 2.11273L8.36251 7.65578C8.21807 7.80023 8.05557 7.90856 7.87501 7.98078C7.69446 8.053 7.5139 8.08912 7.33334 8.08912C7.15279 8.08912 6.97223 8.053 6.79168 7.98078C6.61112 7.90856 6.44862 7.80023 6.30418 7.65578L0.743068 2.09467C0.562512 1.91412 0.475122 1.70347 0.480901 1.46273C0.486678 1.22199 0.580086 1.01134 0.761124 0.830783C0.942161 0.650228 1.15594 0.55995 1.40246 0.55995C1.64898 0.55995 1.86251 0.650228 2.04307 0.830783L7.33334 6.12106Z"
                  fill="black"
                />
              </svg>
            </div>
            <ul tabindex="0" class="dropdown-content menu bg-white text-black border border-black rounded-box z-1 w-52 p-2">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex flex-col w-full mt-6 space-y-4">
        <h1 class="text-2xl font-bold text-[#EB5523]">Highlight Portofolio</h1>
        <div class="flex flex-row w-full border border-black rounded-4xl p-4 space-x-2 items-center">
          <PortoCardAdmin /><PortoCardAdmin /><PortoCardAdmin /><PortoCardAdmin />
          <button class="p-4 bg-[#F43232] h-fit rounded-xl ml-6">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.202 15.2891H6.48682V13.0507H13.202V6.33545H15.4404V13.0507H22.1557V15.2891H15.4404V22.0043H13.202V15.2891Z" fill="#FEF7FF" />
            </svg>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-12 w-full pt-6">
        <PortoCardAdmin /><PortoCardAdmin /><PortoCardAdmin /><PortoCardAdmin /><PortoCardAdmin /><PortoCardAdmin /><PortoCardAdmin /><PortoCardAdmin /><PortoCardAdmin /><PortoCardAdmin />
      </div>
    </div>

<div v-else-if="tampilanAktif === 'buat'" class="px-6">
  <div class="bg-gray-50 p-8 rounded-lg border">
    <form @submit.prevent="submitPortfolio" class="space-y-4">
      <div>
        <label for="title" class="block text-2xl font-bold text-[#EB5523]">Portfolio Title</label>
        <input v-model="portfolio.title" type="text" id="title" class="mt-1 block w-full shadow-sm p-2 text-black border border-gray-700 rounded-2xl" required />
      </div>
      <div>
        <label for="cover-image-upload" class="block text-2xl font-bold text-[#EB5523] mb-2">Cover Image</label>
        <label for="cover-image-upload" class="relative flex flex-col items-center justify-center w-full h-32 border-2 border-gray-400 border-dashed rounded-2xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
          <div class="flex items-center justify-center bg-[#EB5523] text-white p-2 rounded-box">
             <span v-if="portfolio.coverImage">{{ portfolio.coverImage.name }}</span>
            <svg v-else class="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5.75V14.25M5.75 10H14.25" />
            </svg>
          </div>
          <input @change="handleFileUpload" id="cover-image-upload" type="file" class="hidden" accept="image/*" />
        </label>
      </div>
      <div>
        <label for="shortDescription" class="block text-2xl font-bold text-[#EB5523]">Short Description</label>
        <textarea v-model="portfolio.shortDescription" id="shortDescription" rows="4" class="mt-1 block w-full shadow-sm p-2 text-black border border-gray-700 rounded-2xl" required></textarea>
      </div>
      <div>
        <label for="description" class="block text-2xl font-bold text-[#EB5523]">Description</label>
        <Editor
          v-model="portfolio.description" 
          editorStyle="height: 320px"
          :pt="{
            toolbar: { style: { backgroundColor: 'white', borderColor: '#D1D5DB' } },
          }"
          class="mt-1 block w-full shadow-sm border border-gray-700 rounded-2xl bg-white overflow-hidden"
        />
      </div>
      <div class="flex justify-end pt-4 space-x-3">
        <button type="button" @click="tampilanAktif = 'daftar'" class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Cancel</button>
        <button type="submit" class="flex flex-row items-center space-x-2 px-4 py-2 bg-[#EB5523] text-white rounded-lg hover:bg-orange-600">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
import { AutoComplete } from "primevue";
import PortoCardAdmin from "../../components/portoCard-admin.vue";
import api from "../../server/api"; 

definePageMeta({
  layout: "admin",
});

export default {
  components: {
    PortoCardAdmin,
  },

  data() {
    return {
      tampilanAktif: "daftar",
      portfolio: {
        title: "",
        shortDescription: "",
        description: "",
        coverImage: null, 
      },
      value: "",
      items: [],
    };
  },

  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.portfolio.coverImage = file;
      }
    },

    async submitPortfolio() {
      const formData = new FormData();
      formData.append("title", this.portfolio.title);
      formData.append("shortDescription", this.portfolio.shortDescription);
      formData.append("description", this.portfolio.description);
      if (this.portfolio.coverImage) {
        formData.append("coverImage", this.portfolio.coverImage);
      }
      
      try {
        console.log(formData)
        const response = await api.post("/portfolios/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });
        console.log(response)
        
        console.log("Portfolio berhasil dibuat:", response.data);
        alert("Portfolio berhasil dibuat!");

        this.tampilanAktif = 'daftar';
        
      } catch (error) {
        console.error("Gagal membuat portfolio:", error);
        alert("Gagal membuat portfolio. Cek console untuk detail.");
      }
    },
    
    search(event) {
      this.items = [...Array(10).keys()].map((item) => event.query + "-" + item);
    },
  },

  computed: {
    judulHalaman() {
      if (this.tampilanAktif === "buat") {
        return "Create Portofolio";
      }
      return "Portofolio";
    },
  },
};
</script>

<style module>
.myinput {
  border-radius: 2rem;
  border-width: 1px;
  border-color: black;
  width: 300px;
}
</style>

