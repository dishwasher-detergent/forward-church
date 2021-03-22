<template>
  <div
    id="nav"
    class="w-full fixed top-0 z-50 h-16 px-5"
    :class="{
      'bg-gray-50': !showNavbar,
      'text-gray-900': !showNavbar,
      'shadow-lg': !showNavbar,
      'h-16': !showNavbar,
      'text-white': showNavbar,
      'bg-transparent': showNavbar,
    }"
  >
    <div
      class="h-full max-w-5xl mx-auto flex flex-row justify-between items-center"
    >
      <div class="h-5">
        <img
          v-if="showNavbar"
          class="h-full"
          src="~/static/website-LOGO_2_WHITE.png"
          alt="Forward Church OKC logo"
        />
        <img
          v-else
          class="h-full"
          src="~/static/website-LOGO_2_BLACK.png"
          alt="Forward Church OKC logo"
        />
      </div>
      <button @click="toggleNav()" class="h-10 w-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <ul class="w-full p-5 absolute left-0 top-16 h-auto bg-white text-gray-900 text-lg space-y-2" :class="{ 'block': isActive, 'hidden': !isActive }">
        <li>Home</li>
        <li>LIVESTREAM</li>
        <li>Media</li>
        <li>Our Community</li>
        <li>Give</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
</template>
<script>
const OFFSET = 500;
export default {
  data() {
    return {
      showNavbar: true,
      isActive: false,
    };
  },

  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll() {
      if (window.pageYOffset >= OFFSET) {
        this.showNavbar = false;
        return;
      } else {
        this.showNavbar = true;
        return;
      }
    },
    toggleNav() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style>
#nav {
  transition: all 0.25s !important;
}
</style>