<template>
<div class="w-full bg-gray-900 flex flex-row h-96 overflow-hidden">
    <div class="w-2/5">
        <img src="~/static/worship.jpg" alt="Join Us Every Sunday at 11am"/>
    </div>
    <div class="text-white w-3/5">
        <h1 class="-ml-10 text-5xl display-font mt-5">Join Us Every Sunday</h1>
        <div class="rounded bg-gray-800 m-10 flex justify-center">
            <div class="flex flex-row p-10">
                <div class="w-12 h-12">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <p class='text-2xl pl-5'>
                    1312 South Morgan Road<br>
                    Suite A<br>
                    Oklahoma City, OK 73128<br>
                </p>
            </div>
            <div class="flex flex-row p-10">
                <div class="w-12 h-12">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <p class='text-2xl pl-5'>
                    Every Sunday at 11:00 am
                </p>
            </div>
        </div>
    </div>
</div>    
</template>
<script>
export default {
    
}
</script>