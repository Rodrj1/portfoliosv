<script>
	import ProjectNavbar from './ProjectNavbar.svelte';
</script>

<section class={`min-h-screen w-full m-auto mt-36 relative`}>
	<h1
		class={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl w-[80%] m-auto text-center lg:text-left text-slate-400 border-b border-b-gray-800 mb-20`}
	>
		PROJECTS.md
	</h1>

	<ProjectNavbar />

	<slot />
</section>
