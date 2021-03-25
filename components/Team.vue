<template>
  <div id="team" class="w-full overflow-hidden lg:my-32">
    <!-- <div class="h-full w-1/5 relative">
      <div id="left-round" class="w-24 h-24 absolute right-0 top-0 bg-red-400"></div>
    </div> -->
    <!-- <div class="h-full w-3/5 bg-red-400"> -->
      <div v-if="showBG" class="radius-bg-blob mx-auto px-5 lg:px-0 lg:w-3/5">
        <h1 class="text-5xl display-font mt-5">Meet the Team</h1>
        <div
          class="flex flex-col justify-center items-center py-5 space-y-5 lg:space-y-0 lg:space-x-5 lg:flex-row"
        >
          <TeamCard name="Mark Marrow" title="Co-Lead Pastor" image="/" />
          <TeamCard name="Jantzen Gray" title="Co-Lead Pastor" image="/" />
          <TeamCard name="Jacoby Gray" title="Worship Leader" image="/" />
        </div>
      </div>
    <!-- </div> -->
    <!-- <div class="h-full w-1/5 relative">
      <div id="right-round" class="w-24 h-24 absolute left-0 bottom-0 bg-red-400"></div>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      showBG: false,
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
      let message = document.getElementById("team");
      if (window.pageYOffset >= message.offsetTop / 1.5) {
        this.showBG = true;
        this.showText = true;
      }
    },
  },
};
</script>
<style scoped>
#right-round::after {
  content: '';
  border-bottom-left-radius: 9999px;
  height: 6rem;
  width: 6rem;
  display: block;
  background-color: #F8FAFC;
}

#left-round::after {
  content: '';
  border-top-right-radius: 9999px;
  height: 6rem;
  width: 6rem;
  display: block;
  background-color: #F8FAFC;
}
/* .bounce-enter-active,
.bounce-leave-active {
  animation: bounce 1s;
}

.radius-bg-blob {
  border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;	
}

@keyframes bounce {
  0% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  25% { 
    border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
  }
  50% {
    border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
  }
  75% {
    border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;		
  }
} */
</style>