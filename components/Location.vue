<template>
  <div id="location" class="w-full overflow-hidden relative h-128">
    <!-- Content -->
    <transition name="slide-right">
      <div
        v-if="showText"
        class=" relative max-w-7xl h-full mx-auto flex flex-row items-center justify-end px-5 overflow-hidden md:px-0 z-10"
      >
        <div class="w-full md:w-3/5">
          <h1 class="text-5xl display-font mt-5 text-gray-900 md:-ml-10">
            Join Us Every Sunday
          </h1>
          <div
            class="rounded bg-gray-800 my-5 flex flex-col justify-center text-white md:flex-row md:m-10"
          >
            <div class="flex flex-row p-10">
              <div class="w-10 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p class="text-2xl pl-5">
                1312 South Morgan Road<br />
                Suite A<br />
                Oklahoma City, OK 73128<br />
              </p>
            </div>
            <div class="flex flex-row p-10">
              <div class="w-10 h-10">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p class="text-2xl pl-5">Every Sunday at 11:00 am</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- Rounded Background -->
    <transition name="slide-left">
      <div
        v-if="showBG"
        class="w-4/5 h-full absolute left-0 top-0 rounded-tr-full bg-red-400"
      >
        <div class="h-full w-1/2 hidden absolute left-0 md:block">
          <div
            class="absolute top-0 left-0 w-full h-full bg-gradient-to-l to-transparent from-red-400"
          ></div>
          <div
            id="img"
            class="w-full h-full"
            src=""
            alt="Join Us Every Sunday at 11am"
          />
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showBG: false,
      showText: false,
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
        let message = document.getElementById("location");
        if (window.pageYOffset >= (message.offsetTop/2)) {
            this.showBG = true;
            this.showText = true;
        }
    },
  },
};
</script>
<style scoped>
img {
  max-width: unset !important;
}
#img {
  background-image: url("~/static/worship.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.slide-left-enter-active,
.slide-left-leave-active {
  animation: bounce-left .5s;
}
.slide-right-enter-active,
.slide-right-leave-active {
  animation: bounce-right .5s;
}

@keyframes bounce-right {
  0% {
    transform: translate(100%, 0);
  }
  33% {
    transform: translate(0%, 0);
  }
  66% {
    transform: translate(2%, 0);
  }
  100% {
    transform: translate(0%, 0);
  }   
}
@keyframes bounce-left {
  0% {
    transform: translate(-100%, 0);
  }
  33% {
    transform: translate(0%, 0);
  }
  66% {
    transform: translate(-2%, 0);
  }
  100% {
    transform: translate(0%, 0);
  }
}
</style>