<script>
	import searcher from '$lib/images/searcher.webp';
	import search from '$lib/images/search.webp';
	import searchres from '$lib/images/searchres.webp';
</script>

<section class="flex flex-col base:flex-row gap-5 m-auto h-auto w-[90%] md:w-[50%] justify-center projectAnim mb-20 sm:mb-0">
	<div class="flex flex-col flex-1 gap-5">
		<picture class="w-full">
			<img
				loading="lazy"
				class="w-full h-full object-cover"
				src={searcher}
				alt="Google Clone preview."
			/>
		</picture>

		<h2
			class="h-auto text-xl sm:text-2xl text-center sm:text-left text-slate-200 tracking-[10px] border-b pb-5"
		>
			Google Clone
		</h2>

		<article class="w-full py-2 relative h-auto">
			<div class="flex justify-between">
				<h2 class="text-slate-300 text-lg">Overview</h2>

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

	<div class="flex flex-col-reverse base:flex-col flex-1 gap-5">
		<picture class="h-[150px] w-full">
			<img class="object-cover w-full h-full" src={search} alt="Google Clone search." />
		</picture>

		<picture class="h-[150px] w-full">
			<img class="w-full h-full object-cover" src={searchres} alt="Google Clone search results." />
		</picture>

		<ul class="project-techs justify-center md:justify-start items-center list-none p-0">
			<li class="tech">NextJS</li>
			<li class="tech">Typescript</li>
			<li class="tech">TailwindCSS</li>
		</ul>
	
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
	
	</div>
</section>

