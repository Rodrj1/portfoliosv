<script lang="ts">
	import { projectIndex } from '../../store';
	type ProjectPreview = {
		name: string;
		image: string;
		imageAlt: string;
		link: string;
		type: string;
	};

	export let projectPreview: ProjectPreview;
	export let index: number;

	const updateProjectIndex = () => {
		$projectIndex = index;
	};
</script>


	<article
		class="w-full sm:w-[90%] border-t border-slate-200 overflow-hidden transition-colors hover:motion-safe:animate-pulse py-8 max-h-[50vh] rounded-none"
	>
		<a class="flex flex-col sm:flex-row gap-10 sm:gap-0 justify-between group" 	target={projectPreview.type === "Design" ? "_blank" : ""}	on:click={updateProjectIndex} href={projectPreview.link}>
			<h3
				class="text-slate-300 group-hover:text-blue-700 text-2xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-[10px] flex-1 flex"
			>
				{projectPreview.name}
			</h3>

			<picture class="flex-1">
				<img
					class="w-full h-full object-cover group-hover:scale-125 transition-transform cursor-pointer grayscale-[0.5] group-hover:grayscale-0 group-hover:rotate-[-45deg]"
					src={projectPreview.image}
					alt={projectPreview.imageAlt}
				/>
			</picture>
		</a>
	</article>

