<script>
	import searcher from '$lib/images/searcher.webp';
	import anylthin from '$lib/images/anylthin.webp';
	import arcfiction from '$lib/images/arcfiction.webp';
	import cemetery from '$lib/images/cemetery.webp';

	import { onMount } from 'svelte';
	import { cognitiveDissabilityMode } from '../../store';
	import { addBordersForCognitive } from '../components/AccessibilityMenu/cognitiveDissabilityMode';

	onMount(() => {
		if ($cognitiveDissabilityMode === true) addBordersForCognitive($cognitiveDissabilityMode);
	});
</script>

<section class="w-full will-animate duration-500 mb-40 xl:mb-20">
	<div class="flex flex-wrap gap-1 w-[80%] m-auto items-start justify-center lg:justify-between">
		<div class="w-full flex flex-col gap-3">
			<h2 class="h-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left text-violet-500">
				Explore
			</h2>

			<a
				class="text-left w-[50px]"
				href="https://github.com/Rodrj1"
				target="_blank"
				aria-label="See my Github Profile: Rodrj1">Github</a
			>
		</div>

		<picture
			class="w-[450px] h-[330px] lg:w-full lg:h-[380px] xl:w-[450px] xl:h-[330px] border border-gray-800 rounded-md overflow-hidden transition-colors hover:border-red-500 hover:motion-safe:animate-pulse"
		>
			<a href="https://basicagencymock.netlify.app/" target="_blank">
				<img
					class="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer grayscale-[4] hover:grayscale-0"
					src="https://cdn.sanity.io/images/8nn8fua5/production/0e11b9e81dbff0e91cdf326ac726a1b28233636f-870x582.jpg?w=720&fm=webp&q=65"
					alt="The Webby Awards Logo"
				/>
			</a>
		</picture>

		<picture
			class="w-[450px] h-[330px] lg:w-full lg:h-[380px] xl:w-[450px] xl:h-[330px] border border-gray-800 rounded-md p-2 overflow-hidden transition-colors hover:border-red-500 hover:motion-safe:animate-pulse"
		>
			<a href="/projects/anylthin">
				<img
					class="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer grayscale-[0.5] hover:grayscale-0"
					src={anylthin}
					alt="An Ylthin"
				/>
			</a>
		</picture>

		<picture
			class="w-[450px] h-[330px] lg:w-full lg:h-[380px] xl:w-[450px] xl:h-[330px] border border-gray-800 rounded-md p-2 overflow-hidden transition-colors hover:border-red-500 hover:motion-safe:animate-pulse"
		>
			<a href="/projects/arcfiction">
				<img
					class="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer grayscale-[0.5] hover:grayscale-0"
					src={arcfiction}
					alt="ARCFiction"
				/>
			</a>
		</picture>

		<picture
			class="w-[450px] h-[330px] lg:w-full lg:h-[380px] xl:w-[450px] xl:h-[330px] border border-gray-800 rounded-md p-2 overflow-hidden transition-colors hover:border-red-500 hover:motion-safe:animate-pulse"
		>
			<a href="/projects/cityofhithair">
				<img
					class="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer grayscale-[0.5] hover:grayscale-0"
					src={cemetery}
					alt="Cemetery City of Hithair"
				/>
			</a>
		</picture>

		<picture
			class="w-[450px] h-[330px] lg:w-full lg:h-[380px] xl:w-[450px] xl:h-[330px] border border-gray-800 rounded-md p-2 overflow-hidden transition-colors hover:border-red-500 hover:motion-safe:animate-pulse"
		>
			<a href="/projects/googleclone">
				<img
					class="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer grayscale-[0.5] hover:grayscale-0"
					src={searcher}
					alt="Google Clone"
				/></a
			>
		</picture>
	</div>
</section>
