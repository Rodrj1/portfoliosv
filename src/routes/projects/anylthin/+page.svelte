<script>
	import map from '$lib/images/anylthinmap.webp';
	import elisith from '$lib/images/elisith.jpg';
	import heroselection from '$lib/images/anylthinheroselection.webp';
	import anylthin from '$lib/images/anylthinbattle.webp';
</script>

<section
	class="flex flex-col base:flex-row gap-5 m-auto h-auto w-[90%] md:w-[50%] justify-center projectAnim mb-20 sm:mb-0"
>
	<div class="flex flex-col flex-1 gap-5 relative">
		<picture
			class="absolute h-[40vh] opacity-20 w-full z-10 sm:relative sm:opacity-100 sm:h-auto sm:w-full"
		>
			<img
				class="h-full w-full sm:w-full sm:h-full object-cover"
				src={anylthin}
				alt="Forest of An Ylthin battle."
			/>
		</picture>

		<h2
			class="h-auto text-xl sm:text-2xl text-center sm:text-left text-slate-200 tracking-[10px] border-b pb-5 z-20"
		>
			Forest of An Ylthin
		</h2>

		<article
			class="w-full relative mb-28 md:mb-0 z-20"
		>
			<div class="flex justify-between">
				<h2 class="text-slate-300 text-lg">Overview</h2>
				<div class="flex gap-2 items-center pr-2">
					<div class="h-[10px] w-[10px] bg-orange-400 rounded-full" />
					<div class="h-[10px] w-[10px] bg-green-400 rounded-full" />
					<div class="h-[10px] w-[10px] bg-red-500 rounded-full" />
				</div>
			</div>

			<p class="text-sm mb-4">
				The forest of An-Ylthin has been usurped by a powerful foreign necromancer. The dryexa had
				called for help to their loathsome ally Nicolai, but are more eager to receive the help of
				the dryeldar warlock Elisith.
			</p>

			<ul class="project-list text-sm gap-3 flex flex-col">
				<li>Two playable races: dryeldar and undead.</li>
				<li>Game is turn-based. Multiple units per battle.</li>
				<li>Four locations need to be cleared in order to win.</li>
			</ul>

			<div class="h-[50px] w-[135px]">
				<picture
					class="h-[160px] w-[160px] lg:h-[205px] lg:w-[175px] absolute right-1 xl:-translate-y-16"
				>
					<img
						class="object-cover h-full w-full rounded-full p-2 border border-zinc-800"
						loading="lazy"
						src={elisith}
						alt="Hero Elisith."
					/>
				</picture>
			</div>
		</article>
	</div>

	<div class="flex-1 flex flex-col-reverse base:flex-col gap-2">
		<picture class="h-[150px]">
			<img
				class="object-cover h-full w-full object-bottom"
				src={heroselection}
				loading="lazy"
				alt="Forest of An Ylthin battle."
			/>
		</picture>

		<picture class="h-[150px]">
			<img
				class="object-cover h-full w-full object-center"
				src={anylthin}
				loading="lazy"
				alt="Forest of An Ylthin battle preview."
			/>
		</picture>

		<picture class="h-[150px]">
			<img class="object-cover h-full w-full object-right" src={map} alt="Forest of An Ylthin map." loading="lazy" />
		</picture>

		<ul class="project-techs justify-center md:justify-start items-center list-none p-0">
			<li class="tech">React</li>
			<li class="tech">React Context</li>
			<li class="tech">Typescript</li>
			<li class="tech">SASS</li>
		</ul>

		<div class="flex gap-2 items-center justify-center md:justify-start">
			<a aria-label="To An-Ylthin website" href="https://reactanilthyn.netlify.app/" target="_blank"
				>Play</a
			>
	
			<span class="w-6 border-b-2 border-gray-700" />
	
			<a aria-label="To github repository" href="https://github.com/Rodrj1/minigame" target="_blank"
				>Github</a
			>
		</div>
	
	</div>
</section>

