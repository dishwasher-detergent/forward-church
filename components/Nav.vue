<template>
  <div
    id="nav"
    class="w-full fixed top-0 z-50"
    :class="{
      'bg-gray-50': !showNavbar,
      'text-gray-900': !showNavbar,
      'shadow-lg': !showNavbar,
      'h-16': !showNavbar,
      'text-white': showNavbar,
      'bg-transparent': showNavbar,
      'h-24': showNavbar,
    }"
  >
    <div
      class="h-full max-w-5xl mx-auto flex flex-row justify-between items-center"
    >
      <div class="h-10">
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
      <ul class="flex items-center h-full space-x-10">
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
      lastScrollPosition: 0,
      scrollValue: 0,
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
  },
};
</script>
<style>
#nav {
    transition: all .25s !important;
}
</style>