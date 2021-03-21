<template>
  <div id="wrapper" class="min-h-screen pb-48 bg-gray-50 relative">
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
}
</script>
<style>
html {
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
