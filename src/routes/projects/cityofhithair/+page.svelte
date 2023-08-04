<script>
	import cemetery from '$lib/images/cemetery.webp';
	import battlecity from '$lib/images/battlecity.webp';
	import nicolai from '$lib/images/nicolai.jpg';
	import magehero from '$lib/images/magehero.jpg';
	import knighthero from '$lib/images/knighthero.jpg';
	import knight from '$lib/images/knight.jpg';
	import marion from '$lib/images/marion.jpg';
</script>

<section
	id="projects"
	class="pb-10 flex flex-col gap-5 m-auto will-animate min-h-[100vh] w-[80%] justify-center mb-40 md:mb-20"
>
	<h2
		class="h-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left text-violet-500"
	>
		03. City Of Hithair
	</h2>

	<div class="project-techs justify-center md:justify-start items-center">
		<span class="tech">React</span>
		<span class="w-6 border-b-2 border-gray-700" />
		<span class="tech">Typescript</span>
		<span class="w-6 border-b-2 border-gray-700" />
		<span class="tech">Zustand</span>
		<span class="w-6 border-b-2 border-gray-700" />
		<span class="tech">SASS</span>
	</div>

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

	<div class="grid grid-cols-4 grid-rows-2 md:grid-cols-6 md:grid-rows-2 items-start gap-3">
		<article
			class="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg col-start-1 col-end-5 md:col-start-1 md:col-end-3 w-full text-gray-400 p-2 relative mb-28 xl:mb-0 row-start-1 row-end-2"
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
				Hithair has turned to turmoil when a wanderer broke through the cemetery and down the
				mausoleum. After his incursion beneath, sounds, screeches, and voices echoed underground.
				Find the secret below the earth.
			</p>

			<ul class="project-list text-sm gap-3 flex flex-col">
				<li>Two eligible heroes: Knight and Dark Wizard.</li>
				<li>1v1 turn-based game.</li>
				<li>Five levels.</li>
			</ul>

			<div class="h-[50px] w-[135px]">
				<figure
					class="h-[160px] w-[160px] md:h-[205px] md:w-[175px] absolute right-1 md:-translate-y-12 md:translate-x-28"
				>
					<img
						class="h-full w-full object-cover rounded-full p-2 border border-zinc-800"
						loading="lazy"
						src={nicolai}
						alt="Hero Nicolai."
					/>
				</figure>
			</div>
		</article>

		<figure
			class="hidden sm:block sm:h-[135px] sm:w-[135px] col-start-1 col-end-2 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2"
		>
			<img
				class="h-full w-full rounded-full p-2 border border-zinc-800"
				loading="lazy"
				src={magehero}
				alt="Dark Mage Hero."
			/>
		</figure>

		<figure
			class="hidden sm:block sm:h-[135px] sm:w-[135px] col-start-2 col-end-3 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-2"
		>
			<img
				class="h-full w-full rounded-full p-2 border border-zinc-800"
				loading="lazy"
				src={knighthero}
				alt="Knight Hero."
			/>
		</figure>

		<figure
			class="hidden sm:block sm:h-[135px] sm:w-[135px] col-start-3 col-end-4 md:col-start-5 md:col-end-6 md:row-start-1 md:row-end-2"
		>
			<img
				class="h-full w-full rounded-full p-2 border border-zinc-800"
				loading="lazy"
				src={knight}
				alt="NPC Knight."
			/>
		</figure>

		<figure
			class="hidden sm:block sm:h-[135px] sm:w-[135px] col-start-4 col-end-5 md:col-start-6 md:col-end-7 md:row-start-1 md:row-end-2"
		>
			<img
				class="h-full w-full rounded-full p-2 border border-zinc-800"
				loading="lazy"
				src={marion}
				alt="NPC Marion."
			/>
		</figure>

		<figure
			class="p-1 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg col-start-1 col-end-5 md:col-start-1 md:col-end-4 md:row-start-2 md:row-end-3 h-auto md:h-[400px] w-full border border-zinc-800"
		>
			<img
				class="w-full h-full object-cover object-top"
				loading="lazy"
				src={cemetery}
				alt="Cemetery level."
			/>
		</figure>

		<figure
			class="p-1 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg col-start-1 col-end-5 md:col-start-4 md:col-end-7 md:row-start-2 md:row-end-3 h-auto md:h-[400px] w-full border border-zinc-800"
		>
			<img
				class="w-full h-full object-cover object-top"
				loading="lazy"
				src={battlecity}
				alt="City of Hithair battle preview."
			/>
		</figure>
	</div>
</section>
