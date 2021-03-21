<template>
<div class="w-full h-96 bg-gray-900 rounded shadow-md overflow-hidden">
    <div class="h-4/5 w-full">
        <!-- IMAGE -->
    </div>
    <div class="h-1/5 w-full text-white text-center bg-gray-800 flex flex-col justify-center">
        <h3 class="display-font text-2xl">{{name}}</h3>
        <p>{{title}}</p>
    </div>
</div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
    },
    title: {
      type: String,
    },
    image: {
      type: String,
    }
  }
}
</script>