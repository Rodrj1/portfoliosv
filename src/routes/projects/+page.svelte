<script>
	import { onMount } from 'svelte';
	import { cognitiveDissabilityMode } from '../../store';
	import { addBordersForCognitive } from '../components/AccessibilityMenu/cognitiveDissabilityMode';

	onMount(() => {
		if ($cognitiveDissabilityMode === true) addBordersForCognitive($cognitiveDissabilityMode);
	});
</script>

<section class="w-full will-animate duration-500 mb-40 md:mb-0">
	<div class="flex flex-wrap gap-3 w-[80%] m-auto items-center justify-center lg:justify-between">
		<div class="w-full flex flex-col gap-3">
			<h2 class="h-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left text-violet-500">
				Top Projects
			</h2>

			<a
				class="text-left w-[50px]"
				href="https://github.com/Rodrj1"
				target="_blank"
				aria-label="See my Github Profile: Rodrj1">Github</a
			>
		</div>

		<figure
			class="w-[450px] h-[330px] lg:w-full lg:h-[380px] xl:w-[450px] xl:h-[330px] border border-gray-800 rounded-md p-2 overflow-hidden transition-colors hover:border-red-500"
		>
			<a href="/projects/anylthin">
				<img
					class="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer grayscale-[0.5] hover:grayscale-0"
					src="src//lib/images/anylthin.webp"
					alt="An Ylthin"
				/>
			</a>
		</figure>

		<figure
			class="w-[450px] h-[330px] lg:w-full lg:h-[380px] xl:w-[450px] xl:h-[330px] border border-gray-800 rounded-md p-2 overflow-hidden transition-colors hover:border-red-500"
		>
			<a href="/projects/arcfiction">
				<img
					class="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer grayscale-[0.5] hover:grayscale-0"
					src="src//lib/images/arcfiction.webp"
					alt="ARCFiction"
				/>
			</a>
		</figure>

		<figure
			class="w-[450px] h-[330px] lg:w-full lg:h-[380px] xl:w-[450px] xl:h-[330px] border border-gray-800 rounded-md p-2 overflow-hidden transition-colors hover:border-red-500"
		>
			<a href="/projects/cityofhithair">
				<img
					class="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer grayscale-[0.5] hover:grayscale-0"
					src="src//lib/images/cemetery.webp"
					alt="Cemetery City of Hithair"
				/>
			</a>
		</figure>

		<figure
			class="w-[450px] h-[330px] lg:w-full lg:h-[380px] xl:w-[450px] xl:h-[330px] border border-gray-800 rounded-md p-2 overflow-hidden transition-colors hover:border-red-500"
		>
			<a href="/projects/googleclone">
				<img
					class="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer grayscale-[0.5] hover:grayscale-0"
					src="src//lib/images/searcher.webp"
					alt="Google Clone"
				/></a
			>
		</figure>
	</div>
</section>
