<script lang="ts">
	import './styles.css';

	import { ADHDMode, accessibilityMenuIsOpen } from '../store';

	import Header from './Header.svelte';
	import AccessibilityMenu from './components/AccessibilityMenu/AccessibilityMenu.svelte';
	import { updatePosition } from './components/AccessibilityMenu/updatePositionADHDMode';
</script>

<div
	on:mousemove={ADHDMode ? updatePosition : null}
	id="status"
	role="status"
	class="flex w-[100%] mx-auto min-h-screen flex-col text-center justify-start items-center bg-gradient-radial from-zinc-900 via-gray-800/20 to-zinc-900 relative"
>
	<Header />

	{#if $accessibilityMenuIsOpen}
		<AccessibilityMenu />
	{/if}

	<slot />

	{#if $ADHDMode}
		<div id="topBackground" class={`bg-black bg-opacity-40 w-full fixed z-[60000] top-0 h-[50vh]`} />

		<div id="bottomBackground" class={`bg-black bg-opacity-40 w-full fixed z-[50000] bottom-0 h-[40vh]`} />
	{/if}

	<footer class="w-[80%] absolute hidden md:block border-t border-t-gray-800 bottom-10 pt-3">
		<h5 class="text-left text-slate-400">
			Powered by <span class="text-teal-500">Svelte</span> and
			<span class="text-teal-500">TailwindCSS</span>
		</h5>
	</footer>
</div>
