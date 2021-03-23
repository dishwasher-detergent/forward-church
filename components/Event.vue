<template>
<div class="bg-gray-900 p-5 rounded text-white text-left h-48 w-60">
	<h3 class="display-font text-2xl">{{event}}</h3>
	<p>{{date}}</p>
	<p>From {{from}} to {{to}}</p>
	<p>At {{where}}</p>
</div>
</template>
<script>
export default {
  props: {
    event: {
      	type: String,
    },
    date: {
      	type: String,
    },
	from: {
		type: String,
	},
	to: {
		type: String,
	},
	where: {
		type: String,
	}
  }
}
</script>