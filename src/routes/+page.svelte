<script>
	import { onMount } from 'svelte';
	import { cognitiveDissabilityMode } from '../store';
	import { addBordersForCognitive } from './components/AccessibilityMenu/cognitiveDissabilityMode';
	import ReactIcon from './components/icons/ReactIcon.svelte';
	import TailwindIcon from './components/icons/TailwindIcon.svelte';
	import TypescriptIcon from './components/icons/TypescriptIcon.svelte';

	onMount(() => {
		if ($cognitiveDissabilityMode === true) addBordersForCognitive($cognitiveDissabilityMode);
	});
</script>

<svelte:head>
	<title>rodriccrz</title>
	<meta name="description" content="Section: Main. My portfolio as a front-end developer. Rodrigo Agustin Cisterna Cruz." />
</svelte:head>

<section class="w-full will-animate duration-500">
	<div class="w-[80%] m-auto mt-36">
		<h1
			class="mb-20 text-2xl sm:text-3xl md:text-4xl lg:text-4xl w-full text-center lg:text-left  border-b border-b-gray-800"
		>
			HOME.md
		</h1>

		<div class="flex flex-col gap-10">
			<div>
				<h2 class="h-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left text-violet-500">
					Rodrigo Agustin Cisterna-Cruz
				</h2>

				<h3 class="text-3xl underline text-slate-400">Front-end developer</h3>
			</div>

			<ul class=" text-lg">
				<li>Responsive sites</li>
				<li>Accessible sites</li>
				<li>SEO optimized sites</li>
			</ul>

			<div class="flex gap-2 items-center">
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
				<a
					aria-label="To Resume PDF"
					href="/resume"
					target="_blank"
				>
					Resume
				</a>
			</div>

			<div class="flex gap-5 mt-14">
				<ReactIcon />

				<TailwindIcon />

				<TypescriptIcon />
			</div>
		</div>
	</div>
</section>
