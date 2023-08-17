<script>
	import { onMount } from 'svelte';
	import { cognitiveDissabilityMode } from '../store';
	import { addBordersForCognitive } from './components/AccessibilityMenu/cognitiveDissabilityMode';;

	onMount(() => {
		if ($cognitiveDissabilityMode === true) addBordersForCognitive($cognitiveDissabilityMode);
	});
</script>

<svelte:head>
	<title>rodriccrz</title>
	<meta
		name="description"
		content="Section: Main. My portfolio as a front-end developer. Rodrigo Agustin Cisterna Cruz."
	/>
</svelte:head>

<section class="w-full projectAnim">
	<div class="w-[95%] m-auto mt-36 px-5 border-l border-slate-200 flex">
		<!-- <h1
			class="mb-20 text-2xl sm:text-3xl md:text-4xl lg:text-4xl w-full text-center lg:text-left  border-b border-b-gray-500"
		>
			HOME.md
		</h1>-->

		<h1
			class="mb-20 text-2xl sm:text-3xl md:text-4xl lg:text-4xl w-[40%] absolute right-[-10%] top-[50%] text-center lg:text-center border-b border-b-slate-200 rotate-90 text-slate-200"
		>
			HOME.md
		</h1>

		<div class="flex flex-col gap-10 justify-start items-start m-auto  w-max sm:w-[40%]">
			<div>
				<h2 class="h-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left w-full text-slate-200">
					Rodrigo Cisterna-Cruz
				</h2>

				<h3 class="text-xl text-slate-300 text-left">Front-end developer</h3>
			</div>

			<div class="flex gap-2 items-center w-full">
				<a aria-label="To github profile" href="https://github.com/Rodrj1" target="_blank">
					Github
				</a>
				<span class="w-6 border-b-2 border-gray-700" />
				<a
					aria-label="To Linkedin profile"
					href="https://www.linkedin.com/in/rodrigoagustinccrz/"
					target="_blank"
				>
					Linkedin
				</a>
				<span class="w-6 border-b-2 border-gray-700" />
				<a aria-label="To Resume PDF" href="/resume" target="_blank"> Resume </a>
			</div>
		</div>
	</div>
</section>
