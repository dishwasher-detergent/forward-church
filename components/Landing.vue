<template>
<div class="relative h-screen w-full overflow-hidden">
    <div class="absolute top-0 z-10 w-full h-full bg-gray-900 bg-opacity-80 flex flex-col items-center justify-center text-white">
        <h1 class="text-9xl display-font">Welcome Home</h1>
        <h2 class="text-xl text-center mt-2">People Helping People Know The <span class="display-font">REAL JESUS</span></h2>
    </div>
    <video class="absolute top-0 z-0 w-full" preload="auto" autoplay="autoplay" loop="loop" muted="muted">
        <source src="http://fwdchurch.tv/wp-content/uploads/2021/02/Heart-for-house_web-cut.mp4" type="video/mp4">
    </video>
    <div id="next" class="absolute bottom-0 h-14 text-white w-full flex justify-center pb-2 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
    </div>
</div>    
</template>
<script>
export default {
    
}
</script>

<style>
#next {
  animation-name: bounce;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes bounce {
  0%   {bottom:0rem;}
  50% {bottom:1rem;}
  100% {bottom:0rem;}
}
</style>