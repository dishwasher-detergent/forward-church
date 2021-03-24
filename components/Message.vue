<template>
  <div
    id="message"
    class="px-5 max-w-5xl mx-auto text-gray-900 my-24 text-xl md:px-0"
  >
    
        <div>
            <h1 class="text-5xl text-left mb-10 display-font">
            Welcome to Forward Church!
            </h1>
            <transition name="slide">
                <p v-if="showTag" class="mt-2 font-bold">
                Whatever your age or life story, you are welcome!
                </p>
            </transition>
            <transition name="slide">
                <p v-if="showBody">
                We know that once you know who Jesus really is, you will discover what he
                really wants for your life, and that’s a life in community. Together we
                can achieve more, reach further, and ultimately move forward.
                </p>
            </transition>
        </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showTag: false,
      showBody: false,
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
        if (window.pageYOffset >= (message.offsetTop/5)) {
            this.showTag = true;
        }
        if (window.pageYOffset >= (message.offsetTop/4)) {
            this.showBody = true;
        }
    },
  },
};
</script>
<style>

.slide-enter-active,
.slide-leave-active {
  transition: all .5s;
}

.slide-enter {
    transform: translate(-100%,0);
    /* opacity: 0; */
}
</style>