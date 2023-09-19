<script lang="ts">
	import { onMount } from 'svelte';
	import { cognitiveDissabilityMode } from '../../store';
	import { addBordersForCognitive } from '../components/AccessibilityMenu/cognitiveDissabilityMode';
	import { projectsPreview } from '$lib/projectData/projectsPreview';
	import ProjectPreview from '../components/ProjectPreview.svelte';

	let scrollEnd = 0;
	let windowHe = 0;
	
	onMount(() => {
		if ($cognitiveDissabilityMode === true) addBordersForCognitive($cognitiveDissabilityMode);

		if (document) {
			document.addEventListener('wheel', () => {
				windowHe = window.scrollY;
				scrollEnd = document.body.scrollHeight - 963;
			});

			scrollEnd = document.body.scrollHeight - 963;

			windowHe = window.scrollY;
		}
	});

	let displayProjects = projectsPreview;

	const filterBy = (type: string) => {
		if (type === '') displayProjects = projectsPreview;
		else {
			const filteredItems = projectsPreview.filter((news) => news.type === type);
			displayProjects = filteredItems;
		}

		scrollEnd = document.body.scrollHeight - 963;
		windowHe = window.scrollY;
	};
</script>

<section class="w-full mb-40 xl:mb-20">
	<div class="hidden md:block fixed right-10 w-[7px] rounded-md bg-white h-[200px]">
		<div
			style={`height: ${(windowHe / scrollEnd) * 100}%`}
			class="absolute bg-zinc-700 z-10 w-[7px] rounded-md max-h-[200px] transition-all before:content-[''] before:absolute before:-bottom-1 before:h-[12px] before:bg-slate-300 before:z-[20] before:w-[12px] before:rounded-full before:-right-[0.20rem]"
		/>
	</div>

	<div class="flex flex-col w-[95%] px-5 m-auto gap-5 border-l border-l-slate-200">
		<div class="w-full flex flex-col gap-3 mb-5">
			<h2 class="h-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left text-slate-200">
				Explore
			</h2>

			<a
				class="text-left w-[50px]"
				href="https://github.com/Rodrj1"
				target="_blank"
				aria-label="See my Github Profile: Rodrj1">Github</a
			>

			<ul
				class="flex w-[100%] m-auto gap-14 text-sm font-sans font-medium text-slate-200 spacing overflow-y-hidden overflow-x-scroll sm:overflow-hidden sm:justify-start list-none pl-9 pb-3"
			>
				<li>
					<button on:click={() => filterBy('')} class="filterButton relative">VIEW ALL</button>
				</li>
				<li>
					<button on:click={() => filterBy('Design')} class="filterButton relative">DESIGNS</button>
				</li>
				<li>
					<button on:click={() => filterBy('Game')} class="filterButton relative">GAMES</button>
				</li>
				<li>
					<button on:click={() => filterBy('Website')} class="filterButton relative"
						>WEBSITES</button
					>
				</li>
			</ul>
		</div>

		<ul class="p-0 flex flex-col gap-5 list-none">
			{#each displayProjects as projectPreview, index (index)}
				<li class="flex-1">
					<ProjectPreview {projectPreview} {index} />
				</li>
			{/each}
		</ul>
	</div>
</section>
