<template>
<div class="w-full bg-gray-900 overflow-hidden">
    <div class="max-w-7xl mx-auto flex flex-row items-center px-5 overflow-hidden md:px-0">
        <div class="z-10 text-white w-full md:w-3/5">
            <h1 class=" text-5xl display-font mt-5 text-center">Give</h1>
            <div class="rounded bg-gray-800 my-5 p-5 md:m-10">
				<p class="text-lg mb-10">This is truly the easiest and best way to give. Using this safe and secure portal, you can send one-time gifts, schedule recurring giving, and even look back on your giving history. If you would like more of your gift to reach the church, please use the <span class='font-bold'>ACH Bank Account</span> option which has the lowest processing fee.</p>
				<a class="py-2 px-5 rounded bg-red-400" href="">Give Online</a>
			</div>
        </div>
        <div class="hidden relative md:block md:w-2/5 overflow-hidden shadow-lg">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-gray-900"></div>
            <img class="float-left h-full" src="~/static/worship.jpg" alt="Join Us Every Sunday at 11am"/>
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
</style>