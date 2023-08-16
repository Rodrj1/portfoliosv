<script>
	import { page } from '$app/stores';
	import { accessibilityMenuIsOpen } from '../store';

	$: path = $page.url.pathname;

	const handleAccessibilityMenu = () => {
		const updateStatus = $accessibilityMenuIsOpen === true ? false : true;
		accessibilityMenuIsOpen.set(updateStatus);
	};
</script>

<header
	class="fixed w-full bottom-0 md:top-0 md:bottom-auto h-auto sm:min-h-[75px] bg-zinc-900 md:bg-zinc-950/50 rounded-b-lg m-auto z-50 backdrop-blur-sm"
>
	<nav>
		<ul
			class="flex sm:flex-row justify-between sm:justify-end py-2 gap-1 sm:gap-4 xl:gap-16 list-none h-auto border-t border-gray-500 sm:border-transparent p-0 lg:min-h-[50px]  w-[95%] m-auto font-sans"
		>
			<li class="sm:w-full justify-self-start">
				<button aria-label="Open Accessibility Menu" on:click={handleAccessibilityMenu}>
					<svg
						id="accessibilityButton"
						class="text-white hover:cursor-pointer"
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="40"
						viewBox="0 0 24 24"
					>
						<circle cx="12" cy="7.5" r="1.5" fill="currentColor" />
						<path
							fill="currentColor"
							d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8z"
						/>
						<path
							fill="currentColor"
							d="M16.5 10.5L16 9l-3 1h-2L8 9l-.5 1.5l3 1V13L9 17.25l1.5.75l1.25-3.5h.5L13.5 18l1.5-.75L13.5 13v-1.5l3-1z"
						/>
					</svg>
				</button>
			</li>

			<li class={`${path === '/' && '!border-b !border-slate-200'}`}>
				<a href="/" aria-label="To About section" class="flex justify-center items-center h-[50px]"
					>Home</a
				>
			</li>

			<li class={`${path === '/about' && '!border-b !border-slate-200'}`}>
				<a
					href="/about"
					aria-label="To About section"
					class="flex justify-center items-center h-[50px]">About</a
				>
			</li>

			<li class={`${path.includes('projects') && '!border-b !border-slate-200'}`}>
				<a
					href="/projects"
					aria-label="To Projects section"
					class="flex justify-center items-center h-[50px] flex-grow">Projects</a
				>
			</li>
		</ul>
	</nav>
</header>
