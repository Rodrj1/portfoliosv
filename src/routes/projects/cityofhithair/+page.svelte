<script>
	import cemetery from '$lib/images/cemetery.webp';
	import battlecity from '$lib/images/battlecity.webp';
	import cityhithair from '$lib/images/cityhithair.webp';
	import nicolai from '$lib/images/nicolai.jpg';
	import magehero from '$lib/images/magehero.jpg';
	import knighthero from '$lib/images/knighthero.jpg';
	import knight from '$lib/images/knight.jpg';
	import marion from '$lib/images/marion.jpg';
</script>

<section
	class="flex flex-col base:flex-row gap-5 m-auto h-auto lg:h-[70vh] w-[90%] md:w-[50%] justify-center md:projectAnim mb-48 sm:mb-20 relative"
>
	<article class="flex flex-col flex-1 gap-5">
		<picture class="h-auto w-full">
			<img
				class="w-full h-full object-cover object-top"
				loading="lazy"
				src={cityhithair}
				alt="Cemetery level."
			/>
		</picture>

		<h2
			class="h-auto text-xl sm:text-2xl text-center sm:text-left text-slate-200 tracking-[10px] border-b pb-5"
		>
			City of Hithair
		</h2>

		<div class="flex justify-between z-50">
			<h2 class="text-slate-300 text-lg">Overview</h2>
			<div class="flex gap-2 items-center pr-2">
				<div class="h-[10px] w-[10px] bg-orange-400 rounded-full" />
				<div class="h-[10px] w-[10px] bg-green-400 rounded-full" />
				<div class="h-[10px] w-[10px] bg-red-500 rounded-full" />
			</div>
		</div>

		<p class="text-sm mb-4 z-50">
			Meant to be played in desktop. Hithair has turned to turmoil when a wanderer broke through the cemetery and down the
			mausoleum. After his incursion beneath, sounds, screeches, and voices echoed underground. Find
			the secret below the earth.
		</p>

		<ul class="project-list text-sm gap-3 flex flex-col z-50">
			<li>Two eligible heroes: Knight and Dark Wizard.</li>
			<li>1v1 turn-based game.</li>
			<li>Five levels.</li>
		</ul>
	</article>

	<div class="flex-1 flex flex-col-reverse base:flex-col gap-3 justify-between">
		<div class="flex gap-3 flex-1">
			<picture class="flex-1">
				<img
					class="w-full h-[100px] rounded-full p-2 border border-zinc-800 object-cover"
					src={magehero}
					alt="Dark Mage Hero."
				/>
			</picture>

			<picture class="flex-1">
				<img
					class="w-full h-[100px] rounded-full p-2 border border-zinc-800 object-cover"
					src={knighthero}
					alt="Knight Hero."
				/>
			</picture>

			<picture class="flex-1">
				<img
					class="w-full h-[100px] rounded-full p-2 border border-zinc-800 object-cover"
					src={knight}
					alt="NPC Knight."
				/>
			</picture>

			<picture class="flex-1">
				<img
					class="w-full h-[100px] rounded-full p-2 border border-zinc-800 object-cover"
					src={marion}
					alt="NPC Marion."
				/>
			</picture>

			<picture class="absolute top-[25%] right-[22%] lg:top-[15%] lg:right-[12%] z-10 opacity-50 base:opacity-100">
				<img
					class="w-full h-[25vh] base:h-[200px] rounded-full p-2 sm:border sm:border-zinc-800"
					src={nicolai}
					alt="NPC Marion."
				/>
			</picture>
		</div>

		<picture class="base:self-center z-20">
			<img
				class="object-cover base:max-h-[200px]"
				src={cemetery}
				loading="lazy"
				alt="Preview of Cemetery level in City of Hithair."
			/>
		</picture>

		<picture class="base:self-end">
			<img
				class="object-cover base:max-h-[200px]"
				loading="lazy"
				src={battlecity}
				alt="City of Hithair battle preview."
			/>
		</picture>

		<ul class="project-techs justify-center md:justify-start items-center list-none p-0">
			<li class="tech">React</li>
			<li class="tech">Typescript</li>
			<li class="tech">Zustand</li>
			<li class="tech">SASS</li>
		</ul>

		<div class="flex gap-2 items-center justify-center md:justify-start">
			<a
				aria-label="To City of Hithair website"
				href="https://cityofhithair.netlify.app/"
				target="_blank">Play</a
			>

			<span class="w-6 border-b-2 border-gray-700" />

			<a
				aria-label="To github repository"
				href="https://github.com/Rodrj1/turnbased-minigame"
				target="_blank">Github</a
			>
		</div>
	</div>
</section>
