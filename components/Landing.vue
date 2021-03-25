<template>
<div class="relative h-screen w-full overflow-hidden" :class="{'hero-bg': !isMobile()}">
    <div class="absolute top-0 z-10 w-full h-full bg-gray-900 bg-opacity-80 text-white">
        <div id="hero-text" class="absolute w-full text-center" :style="top">
            <h1 class="text-5xl display-font lg:text-9xl">Welcome Home</h1>
            <h2 class="text-lg text-center mt-2 lg:text-xl">People Helping People Know The <span class="display-font">REAL JESUS</span></h2>
        </div>
    </div>
    <div class="overflow-hidden w-full h-full">
        <video v-if="isMobile()" id="vid"  preload="auto" autoplay="autoplay" loop="loop" muted="muted">
            <source src="http://fwdchurch.tv/wp-content/uploads/2021/02/Heart-for-house_web-cut.mp4" type="video/mp4">
        </video>
    </div>
    <div id="next" class="absolute bottom-0 h-14 text-white w-full flex justify-center pb-2 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
    </div>
</div>    
</template>
<script>
export default {
    data() {
        return {
        top: '',
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
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return false
            } else {
                return true
            }
        },
        onScroll() {
            let amount = (window.innerHeight/2) - (window.pageYOffset/2)
            this.top = 'top:' + amount + 'px'
        },
    }
}
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

#hero-text {
    top: 50%;
    transform: translateY(-50%);
    
}

#next {
  animation-name: bounce;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.hero-bg {
    background-image: url(~/static/hero.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

@keyframes bounce {
  0%   {bottom:0rem;}
  50% {bottom:1rem;}
  100% {bottom:0rem;}
}

#vid {
  position: absolute;
  top: 50%; 
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  min-width: 100%; 
  min-height: 100%; 
  width: auto; 
  height: auto;
  overflow: hidden;
  max-width: unset !important;
}
</style>