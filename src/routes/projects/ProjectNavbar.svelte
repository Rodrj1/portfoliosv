<script>
	import { page } from '$app/stores';

	$: path = $page.url.pathname;
</script>

<ul
	class="flex list-none flex-wrap sm:flex-nowrap gap-4 xl:gap-40 w-full sm:w-[80%] m-auto mb-20 p-0 justify-center lg:justify-start absolute top-11 sm:left-[10%]"
>
	<li class={`${path === '/projects/anylthin' && '!border-b !border-sky-500'}`}>
		<a href="/projects/anylthin" aria-label="Explore An-Ylthin game.">An Ylthin</a>
	</li>

	<li class={`${path === '/projects/arcfiction' && '!border-b !border-sky-500'}`}>
		<a href="/projects/arcfiction" aria-label="Explore ARCFiction website.">ARCFiction</a>
	</li>

	<li class={`${path === '/projects/cityofhithair' && '!border-b !border-sky-500'}`}>
		<a href="/projects/cityofhithair" aria-label="Explore City of Hithair game">City of Hithair</a>
	</li>

	<li class={`${path === '/projects/googleclone' && '!border-b !border-sky-500'}`}>
		<a href="/projects/googleclone" aria-label="Explore Google Clone website.">Google Clone</a>
	</li>
</ul>
