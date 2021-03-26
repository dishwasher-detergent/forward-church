<template>
<div class="flex h-screen bg-gray-50 flex-col lg:flex-row">
	<!--SIDEBAR START-->
	<div class="relative flex-none w-full z-10 bg-white border-r-2 border-gray-200 lg:h-full lg:w-64 lg:pb-0 lg:shadow-md">
		<div class="py-5 flex justify-between items-center lg:bg-blue-50 lg:rounded-b-lg">
			<a href="/" class="ml-5 h-8 lg:h-20 lg:pb-5 lg:mx-auto lg:mt-5">
				<img class="h-full w-full" src="/images/logo.svg" alt="Cisco Helpdesk" title="Cisco Helpdesk">
			</a>
			<div class="lg:hidden w-7 h-7 mr-5">
				<button class="text-gray-600 flex items-center justify-center h-full w-full" @click="showNavbar = !showNavbar">
					<svg fill="currentColor" viewBox="0 0 100 80">
						<rect width="100" height="15" rx="8"></rect>
						<rect y="30" width="100" height="15" rx="8"></rect>
						<rect y="60" width="100" height="15" rx="8"></rect>
					</svg>
				</button>
			</div>
		</div>
		<ul class="text-gray-700 pb-5 hidden lg:block">
			<h2 class="pl-7 mt-4 font-bold text-xs text-gray-500">Single Product</h2>
			<li>
				<a href="?a=ae" class="flex items-center pl-7 px-5 py-1 border-l-4 border-transparent text-md hover:border-blue-500 hover:text-gray-900 hover:bg-blue-50">
				<div class="h-4 w-4 mr-2 text-gray-500">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path>
					</svg>
				</div>
				Add or Edit
				</a>
			</li>
		</ul>
		<!--LOGOUT-->
		<div class="hidden absolute bottom-0 py-10 w-full items-center justify-center bg-gray-50 border-t-2 border-gray-200 lg:flex">
			<a class="bg-blue-500 text-white rounded-full px-5 py-2" href="/login/logout.php">Log Out</a>
		</div>
		<!--MOBILE-->
		<div v-if="this.showNavbar" class="absolute top-0 left-0 w-full" id="nav-drop">
			<div class="pt-5 w-full rounded shadow-xl bg-white z-10 ring-2 ring-gray-200">
				<div class="w-full flex justify-between">
					<img class="ml-5 h-8 lg:h-20 lg:pb-5 lg:mx-auto lg:mt-5" src="/images/logo.svg" alt="Cisco Helpdesk" title="Cisco Helpdesk">
					<button class="mr-5 flex items-center justify-center h-7 w-7 text-blue-500" @click="showNavbar = !showNavbar">
						<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
							<path d="M30.109 30.109a2.418 2.418 0 000-3.419L5.31 1.891A2.418 2.418 0 001.892 5.31l24.8 24.8a2.418 2.418 0 003.418-.001z" fill="currentColor"></path>
							<path d="M1.891 30.109a2.418 2.418 0 003.419 0l24.799-24.8a2.418 2.418 0 00-3.419-3.418l-24.8 24.8a2.418 2.418 0 00.001 3.418z" fill="currentColor"></path>
						</svg>
					</button>
				</div>
				<ul class="text-gray-700 py-5 mt-4 border-t-2 border-gray-100">
					<h2 class="pl-7 mt-4 font-bold text-sm text-gray-500">Single Product</h2>
					<li><a href="?a=ae" class="block pl-7 px-5 py-1 border-l-4 border-transparent text-lg hover:border-blue-500 hover:text-gray-900 hover:bg-blue-50">Add
							or Edit</a></li>

					<h2 class="pl-7 mt-4 font-bold text-sm text-gray-500 pt-2 border-t-2 border-gray-100">Mutliple
						Products</h2>
					<li><a href="?a=au" class="block pl-7 px-5 py-1 border-l-4 border-transparent text-lg hover:border-blue-500 hover:text-gray-900 hover:bg-blue-50">Add
							or Update</a></li>
					<li><a href="?a=mi" class="block pl-7 px-5 py-1 border-l-4 border-transparent text-lg hover:border-blue-500 hover:text-gray-900 hover:bg-blue-50">Missing
							Items</a></li>

					<h2 class="pl-7 mt-4 font-bold text-sm text-gray-500 pt-2 border-t-2 border-gray-100">Database<span class="ml-2 py-.5 px-1 rounded text-white bg-red-600 text-xs align-middle">Danger
							Zone</span></h2>
					<li><a href="?a=udb" class="block pl-7 px-5 py-1 border-l-4 border-transparent text-lg hover:border-blue-500 hover:text-gray-900 hover:bg-blue-50">Update
							Database</a></li>
					<li><a href="?a=usm" class="block pl-7 px-5 py-1 border-l-4 border-transparent text-lg hover:border-blue-500 hover:text-gray-900 hover:bg-blue-50">Update
							Service Map</a></li>

					<h2 class="pl-7 mt-4 font-bold text-sm text-gray-500 pt-2 border-t-2 border-gray-100">Users<a class="ml-2 py-.5 px-1 rounded text-white bg-red-600 text-xs align-middle" data-hover="Be verwy verwy carewful">Danger Zone</a></h2><li><a href="?a=usr" class="block pl-7 px-5 py-1 border-l-4 border-transparent text-lg hover:border-blue-500 hover:text-gray-900 hover:bg-blue-50">User Management</a></li>
					<h2 class="pl-7 mt-4 font-bold text-xs text-gray-500 pt-2 border-t-2 border-gray-100">Pages<span class="ml-2 py-.5 px-1 rounded text-white bg-green-600 text-xs align-middle">Leaving Admin
							Area</span></h2>
					<li><a target="_blank" href="/index.php" class="block pl-7 px-5 py-1 border-l-4 border-transparent text-md hover:border-blue-500 hover:text-gray-900 hover:bg-blue-50">Home</a>
					</li>
					<li><a target="_blank" href="/ProductEligibility/" class="block pl-7 px-5 py-1 border-l-4 border-transparent text-md hover:border-blue-500 hover:text-gray-900 hover:bg-blue-50">Product
							Eligibility</a></li>
					<li><a target="_blank" href="/ProductSubstitutions/" class="block pl-7 px-5 py-1 border-l-4 border-transparent text-md hover:border-blue-500 hover:text-gray-900 hover:bg-blue-50">Product
							Substitutions</a></li>
					<li><a target="_blank" href="/Questions/" class="block pl-7 px-5 py-1 border-l-4 border-transparent text-md hover:border-blue-500 hover:text-gray-900 hover:bg-blue-50">Questions</a>
					</li>
					<li><a target="_blank" href="/SubstitutionRequest/" class="block pl-7 px-5 py-1 border-l-4 border-transparent text-md hover:border-blue-500 hover:text-gray-900 hover:bg-blue-50">Substitution
							Request</a></li>
				</ul>
				<div class="py-4 w-full flex items-center justify-center bg-gray-50 border-t-2 border-gray-200">
					<a class="bg-blue-500 text-white rounded-full px-5 py-2" href="#">Log Out</a>
				</div>
			</div>
		</div>
	</div>
	<!--SIDEBAR END-->
	<!--WHOLE PAGE-->
	<div class="flex-auto p-5 overflow-y-auto">
		<!--WELCOME MESSAGE-->
		<DashWelcome />
		<DashContent />
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			showNavbar: false,
		};
	},
	layout: 'dashboard'
}
</script>
