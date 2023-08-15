<script>
	import { onMount } from 'svelte';
	import { cognitiveDissabilityMode } from '../../store';
	import { addBordersForCognitive } from '../components/AccessibilityMenu/cognitiveDissabilityMode';

	onMount(() => {
		if ($cognitiveDissabilityMode === true) addBordersForCognitive($cognitiveDissabilityMode);
	});
</script>

<svelte:head>
	<title>rodriccrz</title>
	<meta
		name="description"
		content="Section: About. My portfolio as a front-end developer. Rodrigo Agustin Cisterna Cruz."
	/>
</svelte:head>

<section class="w-full will-animate duration-500">
	<div class="w-[80%] m-auto mt-36">
		<h1
			class="mb-20 text-2xl sm:text-3xl md:text-4xl lg:text-4xl w-full text-center lg:text-left  border-b border-b-gray-800"
		>
			ABOUT.md
		</h1>

		<div class="flex flex-col gap-10">
			<h2 class="h-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left text-violet-500">
				rodriccrz@gmail.com
			</h2>

			<div class="flex flex-col gap-5">
				<div class="flex flex-col gap-2">
					<h3 class="text-green-400 text-base">Education</h3>

					<ul class="text-base list-none p-0 ">
						<li>
							Computer technician (2011 - 2017): E.E.S.T.N°5 Av. Juan B. Justo 4287, Mar del Plata.
						</li>
						<li id="projects">React JS (2021 - 2022): Coderhouse.</li>
					</ul>
				</div>

				<div class="flex flex-col gap-2">
					<h3 class="text-green-400 text-base">Languages</h3>

					<ul class="text-base list-none p-0 ">
						<li>Spanish</li>
						<li>English</li>
					</ul>
				</div>

				<div class="flex flex-col gap-2">
					<h3 class="text-green-400 text-base">Technologies and tools used in my projects</h3>

					<p class="text-base ">Main: React | Typescript | TailwindCSS</p>

					<p class="text-base ">
						Also used: Svelte | JS | Vanilla CSS | SASS | NextJS | Svelte | Redux | Zustand |
						MongoDB | Prisma | Express | Github
					</p>
				</div>

				<div class="flex flex-col gap-2 pb-40 sm:pb-0">
					<h3 class="text-green-400 text-base">Extra information</h3>

					<p class="text-base ">
						I finished as a Computer Technician, but did not do anything programming-related for
						some years. I started again in 2022 and I am looking forward to learning new
						technologies as time goes.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
