<template>
<div class="w-full overflow-hidden relative h-128">
    <div class="max-w-7xl h-full mx-auto flex flex-row items-center px-5 overflow-hidden md:px-0">
        <div class="z-10 w-full md:w-3/5">
            <h1 class=" text-5xl display-font mt-5 text-center text-gray-900">Give</h1>
            <div class="rounded bg-gray-800 my-5 p-5 text-white md:m-10">
				<p class="text-lg mb-10">This is truly the easiest and best way to give. Using this safe and secure portal, you can send one-time gifts, schedule recurring giving, and even look back on your giving history. If you would like more of your gift to reach the church, please use the <span class='font-bold'>ACH Bank Account</span> option which has the lowest processing fee.</p>
				<a class="py-2 px-5 rounded bg-red-400" href="">Give Online</a>
			</div>
        </div>
    </div>
    <div class="w-4/5 h-full absolute right-0 top-0 rounded-bl-full rounded-tl-lg bg-red-400">
        <div class="h-full w-1/2 hidden absolute right-0 md:block">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-red-400"></div>
            <div id="img" class="w-full h-full" alt="Join Us Every Sunday at 11am"/>
        </div>
    </div>
</div> 
</template>
<script>
export default {
    
}
</script>
<style scoped>
    img {
        max-width: unset !important;
    }
    #img {
        background-image: url('~/static/worship.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
</style>