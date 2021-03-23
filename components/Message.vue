<template>
  <div
    id="message"
    class="px-5 max-w-5xl mx-auto text-gray-900 my-24 text-xl md:px-0"
  >
    <transition name="up">
        <div v-if="showElement">
            <h1 class="text-5xl text-left mb-10 display-font">
            Welcome to Forward Church!
            </h1>
            <p class="mt-2 font-bold">
            Whatever your age or life story, you are welcome!
            </p>
            <p>
            We know that once you know who Jesus really is, you will discover what he
            really wants for your life, and that’s a life in community. Together we
            can achieve more, reach further, and ultimately move forward.
            </p>
        </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showElement: false,
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
      let message = document.getElementById("message");
      if (window.pageYOffset >= (message.offsetTop/3)) {
        this.showElement = true;
        window.removeEventListener("scroll", this.onScroll);
        return;
      }
    },
  },
};
</script>
<style>

.up-enter-active,
.up-leave-active {
  transition: all .5s;
}

.up-enter {
    transform: translate(0,-100%);
}
.up-leave-to{
    transform: translate(0,100%);
}
</style>