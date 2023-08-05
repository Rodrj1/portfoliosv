<script>
	import searcher from '$lib/images/searcher.webp';
	import search from '$lib/images/search.webp';
	import searchres from '$lib/images/searchres.webp';
</script>

<section
	id="projects"
	class="pb-10 mb-40 md:mb-20 flex flex-col gap-5 m-auto will-animate min-h-[100vh] w-[80%] justify-center"
>
	<h2
		class="h-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left text-violet-500"
	>
		04. Google Clone
	</h2>

	<div class="project-techs justify-center md:justify-start items-center">
		<span class="tech">NextJS</span>
		<span class="w-6 border-b-2 border-gray-700" />
		<span class="tech">Typescript</span>
		<span class="w-6 border-b-2 border-gray-700" />
		<span class="tech">TailwindCSS</span>
	</div>

	<div class="flex gap-2 items-center justify-center md:justify-start">
		<a
			aria-label="To Google Clone website"
			href="https://googleclonecustomscheme.vercel.app/"
			target="_blank">Website</a
		>
		<a
			aria-label="To github repository"
			href="https://github.com/Rodrj1/google-clone"
			target="_blank">Github</a
		>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 items-start gap-3">
		<figure
			class="p-1 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg col-start-1 col-end-2 md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-2 h-[400px] w-full border border-zinc-800 bg-cover"
		>
			<img
				class="w-full h-full object-cover"
				src={searcher}
				alt="Google Clone preview."
			/>
		</figure>

		<figure
			class="p-1 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg col-start-1 col-end-2 md:col-start-4 md:col-end-7 md:row-start-1 md:row-end-2 h-[400px] w-full border border-zinc-800 bg-fixed"
		>
			<img
				class="object-cover w-full h-full"
				src={search}
				alt="Google Clone search."
			/>
		</figure>

		<figure
			class="p-1 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg col-start-1 col-end-2 md:col-start-1 md:col-end-4 md:row-start-2 md:row-end-3 h-[400px] w-full border border-zinc-800"
		>
			<img
				class="w-full h-full object-cover"
				src={searchres}
				alt="Google Clone search."
			/>
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
				A custom and minimal Google using Programmable Search Engine from Google APIs.
			</p>

			<ul class="project-list text-sm gap-3 flex flex-col">
				<li>Can search for any keyword available in Google.</li>
				<li>Can make a random search.</li>
				<li>Displays location using extreme-ip-lookup.</li>
				<li>Google Apps available at top right corner.</li>
				<li>Can lookup for both sites and images.</li>
			</ul>
		</article>
	</div>
</section>
