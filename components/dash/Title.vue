<template>
	<div>
		<p class="text-gray-400 text-xs font-bold">{{title}}</p>
		<h2 class="pb-5 font-bold text-lg text-gray-500 border-b-2 border-gray-200 mb-5">{{action}}</h2>
	</div>
</template>
<script>
export default {
	props:{
		title: {
			type: String,
		},
		action: {
			type: String,
		},
	}
}
</script>