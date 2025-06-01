<template>
  <div class="navbar-start flex flex-row w-screen px-3 pt-3 justify-between">
    <div class="text-black">
      <p>LOGO</p>
    </div>
    <div class="dropdown  btn btn-ghost bg-gray-400/50 backdrop-blur-lg rounded-2xl p-1 px-3" @click="toggleDropdown">
      <div tabindex="0" role="button" class="text-black" >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul v-show="isDropdownOpen" tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false, 
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>
