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

<section class="w-full projectAnim">
	<div class="w-[95%] px-5 m-auto mt-36 border-l border-l-slate-200">
		<h1
			class="mb-20 text-2xl sm:text-3xl md:text-4xl lg:text-4xl w-[40%] absolute right-[-10%] top-[50%] text-center lg:text-center border-b border-b-slate-200 rotate-90 text-slate-200"
		>
			ABOUT.md
		</h1>

		<div class="flex flex-col gap-10 items-center w-max sm:w-[40%] m-auto">
			<h2
				class="h-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl w-full text-left text-slate-200"
			>
				rodriccrz@gmail.com
			</h2>

			<div class="flex flex-col gap-5 w-full">
				<div class="flex flex-col gap-2">
					<h3 class="text-slate-300 text-base">Education</h3>

					<ul class="text-sm list-none p-0">
						<li>Computer technician (2011 - 2017): E.E.S.T.N°5.</li>
						<li id="projects">React JS (2021 - 2022): Coderhouse.</li>
					</ul>
				</div>

				<div class="flex flex-col gap-2">
					<h3 class="text-slate-300 text-base">Languages</h3>

					<ul class="text-sm list-none p-0">
						<li>Spanish</li>
						<li>English</li>
					</ul>
				</div>

				<div class="flex flex-col gap-2">
					<h3 class="text-slate-300 text-base">Technologies and tools used in my projects</h3>

					<p class="text-sm">
						Main: <span class="text-teal-500">Svelte | React | Typescript | TailwindCSS | Zustand</span>
					</p>

					<p class="text-sm">
						Also used:<br />
						<span class="text-teal-500"
							>JS | NextJS <br />
							Vanilla CSS | SASS | <br />
							Redux | React Context <br />
							MongoDB | Prisma | Express<br />
							Github</span
						>
					</p>
				</div>

				<div class="flex flex-col gap-2 pb-40 sm:pb-0">
					<h3 class="text-slate-300 text-base">Extra information</h3>

					<p class="text-sm">
						I finished as a Computer Technician, but did not do anything programming-related for
						some years.<br /> I started again in 2022 and I am looking forward to learning new technologies
						as time goes.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
