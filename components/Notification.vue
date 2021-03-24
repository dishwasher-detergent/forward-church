<template>
<div class="w-72 p-5 mb-5 fixed bottom-0 right-0 rounded-l-full z-50 bg-yellow-400">
	<p>
		Concept Site.<br>
		No affiliation with FWD Church.
	</p>
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