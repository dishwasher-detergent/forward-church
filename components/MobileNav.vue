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
    </div>
    <transition name="drop">
      <ul v-if="isActive" class="w-full mt-5 py-2 h-60 bg-white text-gray-900 text-lg rounded shadow-lg ring-2 ring-gray-100">
        <li class="w-full"><a class="w-full px-5 py-1 block">Home</a></li>
        <li class="w-full"><a class="w-full px-5 py-1 block" href="https://forwardchurchokc.online.church/" target="_blank">LIVESTREAM</a></li>
        <li class="w-full"><a class="w-full px-5 py-1 block">Media</a></li>
        <li class="w-full"><a class="w-full px-5 py-1 block">Our Community</a></li>
        <li class="w-full"><a class="w-full px-5 py-1 block">Give</a></li>
        <li class="w-full"><a class="w-full px-5 py-1 block">Contact</a></li>
      </ul>
    </transition>  
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

.drop-enter-active,
.drop-leave-active {
  transition: opacity .5s, height .24s;
}

.drop-enter,
.drop-leave-to{
  height: 20px;
  opacity: 0;
}
</style>