<script>
	import arcfiction from "$lib/images/arcfiction.png"
 </script>

<section
	id="projects"
	class="pb-10 flex flex-col gap-5 m-auto will-animate min-h-[100vh] w-[80%] justify-center mb-40 md:mb-0"
>
	<h2 class="h-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left text-violet-500">
		02. ARCFiction
	</h2>
	
	<div class="project-techs justify-center md:justify-start items-center">
		<span class="tech">NextJS</span>
		<span class="w-6 border-b-2 border-gray-700" />
		<span class="tech">Next-Auth</span>
		<span class="w-6 border-b-2 border-gray-700" />
		<span class="tech">Typescript</span>
		<span class="w-6 border-b-2 border-gray-700" />
		<span class="tech">TailwindCSS</span>
		<span class="w-6 border-b-2 border-gray-700" />
		<span class="tech">Prisma</span>
		<span class="w-6 border-b-2 border-gray-700" />
		<span class="tech">MongoDB</span>
	</div>

	<div class="flex gap-2 items-center justify-center md:justify-start">
		<a
			aria-label="To ARCFiction website"
			href="https://arcfictionrem.vercel.app/"
			target="_blank">Website</a
		>

		<span class="w-6 border-b-2 border-gray-700" />

		<a
			aria-label="To github repository"
			href="https://github.com/Rodrj1/arcfiction-w-auth"
			target="_blank">Github</a
		>
	</div>

	<div class="grid grid-cols-2 grid-rows-3 sm:grid-cols-6 sm:grid-rows-2 items-start gap-3">
		<figure
			class="p-1 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg col-span-2 sm:col-start-1 sm:col-end-7 border border-zinc-800 bg-fixed h-[550px]"
		>
			<img
				class="object-cover w-full h-full object-top sm:object-left"
				loading="lazy"
				src="/lib/images/arcfictionmedia.webp"
				alt="Media preview of Last Of Us."
			/>
		</figure>

		<figure
			class="p-1 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg col-span-2 sm:col-start-1 sm:col-end-4 h-[500px] w-full border border-zinc-800"
		>
			<img
				class="w-full h-full object-cover"
				loading="lazy"
				src={arcfiction}
				alt="ARCFiction demo preview."
			/>
		</figure>

		<article
			class="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg col-span-2 row-start-2 row-end-3 sm:col-start-4 sm:col-end-7 w-full text-gray-400 p-2 relative h-auto"
		>
			<div class="flex justify-between">
				<h2>Overview</h2>
				<div class="flex gap-2 items-center pr-2">
					<div class="h-[10px] w-[10px] bg-orange-400 rounded-full" />
					<div class="h-[10px] w-[10px] bg-green-400 rounded-full" />
					<div class="h-[10px] w-[10px] bg-red-500 rounded-full" />
				</div>
			</div>

			<p class="text-sm mb-4">Movie/tv show searcher that uses MovieDB API.</p>

			<ul class="project-list text-sm gap-3 flex flex-col">
				<li>
					Auth implemented. Alternatively, you can enter the links in the form to test the app
					without providing data.
				</li>
				<li>Catalogs of movies and tv shows.</li>
				<li>Displayed movies and tv shows can be accessed for more details.</li>
				<li>You can make your own lists and delete them.</li>
			</ul>
		</article>
	</div>
</section>