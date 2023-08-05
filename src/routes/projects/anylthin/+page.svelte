<script>
	import map from '$lib/images/map.webp';
	import elisith from '$lib/images/elisith.jpg';
	import heroselection from '$lib/images/heroselection.webp';
	import anylthin from '$lib/images/anylthin.webp';
</script>

<section
	id="projects"
	class="pb-10 flex flex-col gap-5 m-auto will-animate min-h-[100vh] w-[80%] justify-center mb-40 md:mb-20"
>
	<h2
		class="h-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left text-violet-500"
	>
		01. Forest of An Ylthin
	</h2>

	<div class="project-techs justify-center md:justify-start items-center">
		<span class="tech">React</span>
		<span class="w-6 border-b-2 border-gray-700" />
		<span class="tech">React Context</span>
		<span class="w-6 border-b-2 border-gray-700" />
		<span class="tech">Typescript</span>
		<span class="w-6 border-b-2 border-gray-700" />
		<span class="tech">SASS</span>
	</div>

	<div class="flex gap-2 items-center justify-center md:justify-start">
		<a aria-label="To An-Ylthin website" href="https://reactanilthyn.netlify.app/" target="_blank"
			>Play</a
		>

		<span class="w-6 border-b-2 border-gray-700" />

		<a aria-label="To github repository" href="https://github.com/Rodrj1/minigame" target="_blank"
			>Github</a
		>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 items-start gap-3">
		<figure
			class="p-1 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg col-start-1 col-end-2 md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-2 h-auto w-full border border-zinc-800 bg-cover"
		>
			<img class="w-full h-full" src={heroselection} alt="Forest of An Ylthin battle." />
		</figure>

		<figure
			class="p-1 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg col-start-1 col-end-2 md:col-start-4 md:col-end-7 md:row-start-1 md:row-end-2 h-auto w-full border border-zinc-800 bg-fixed"
		>
			<img
				class="object-cover w-full h-full"
				src={anylthin}
				alt="Forest of An Ylthin battle preview."
			/>
		</figure>

		<figure
			class="p-1 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg col-start-1 col-end-2 md:col-start-1 md:col-end-4 md:row-start-2 md:row-end-3 h-auto w-full border border-zinc-800"
		>
			<img class="w-full h-full" src={map} alt="Forest of An Ylthin map." />
		</figure>

		<article
			class="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg col-start-1 col-end-2 row-start-1 row-end-2 md:row-start-2 md:row-end-3 md:col-start-4 md:col-end-7 w-full text-gray-400 p-2 relative mb-28 md:mb-0"
		>
			<div class="flex justify-between">
				<h2>Overview</h2>
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
				<figure
					class="h-[160px] w-[160px] lg:h-[205px] lg:w-[175px] absolute right-1 xl:-translate-y-16"
				>
					<img
						class="object-cover h-full w-full rounded-full p-2 border border-zinc-800"
						loading="lazy"
						src={elisith}
						alt="Hero Elisith."
					/>
				</figure>
			</div>
		</article>
	</div>
</section>
