<script>
	import { projectIndex } from '../../store';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>rodriccrz</title>
	<meta
		name="description"
		content="A display of the projects I made. Welcome to my portfolio. Rodrigo Agustin Cisterna Cruz. Front-end developer"
	/>
</svelte:head>

<section class="min-h-screen w-full m-auto mt-36 relative">
	<h1
		class="hidden md:block text-2xl sm:text-3xl md:text-4xl lg:text-4xl w-[40%] fixed right-[-10%] top-[50%] text-center lg:text-center border-b border-b-slate-200 rotate-90 z-[100000000] text-slate-200"
	>
		PROJECTS.md
	</h1>

	<h1
		class={`hidden md:block text-2xl sm:text-3xl md:text-4xl lg:text-4xl w-[20%] fixed  left-[0%] top-[13%] text-right border-b border-b-slate-200 z-[100000000] text-slate-200
		${$page.url.pathname === '/projects' && 'invisible'}
		`}
	>
		.0{$projectIndex}
	</h1>

	<slot />
</section>
