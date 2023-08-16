<script lang="ts">
	import './styles.css';

	import { ADHDMode, accessibilityMenuIsOpen } from '../store';

	import { updatePosition } from './components/AccessibilityMenu/updatePositionADHDMode';

	import Header from './Header.svelte';

	import AccessibilityMenu from './components/AccessibilityMenu/AccessibilityMenu.svelte';

	/*
	bg-gradient-radial from-zinc-900 via-gray-800/20 to-zinc-900 relative text-slate-400
	*/
</script>

<div
	on:mousemove={ADHDMode ? updatePosition : null}
	id="status"
	role="status"
	class="flex w-[100%] mx-auto min-h-screen flex-col text-center justify-start items-center bg-zinc-950 relative text-slate-400"
>
	<!--
<div
		class="fixed h-[100vh] w-[100%] z-[500000000] bg-zinc-950 flex justify-center items-center animWelcome"
	>
		<h1 class="text-3xl animTitle">Opening Portfolio</h1>
	</div>

	-->

	<Header />

	{#if $accessibilityMenuIsOpen}
		<AccessibilityMenu />
	{/if}

	<h1
		class="text-3xl sm:text-5xl base:text-6xl lg:text-6xl xl:text-[4rem] 2xl:text-[5.3rem] w-auto fixed top-[-2%] lg:top-[-2%] xl:top-[-3.5%]  2xl:top-[-4%] rotate-180 z-[100000000] text-slate-200 skew-x-12 m-auto text-center tracking-[40px] sm:tracking-[50px] lg:tracking-[70px] xl:tracking-[100px] overflow-hidden backdrop-blur-sm  sm:bg-transparent"
	>
		RCCRZ
	</h1>

	<slot />

	{#if $ADHDMode}
		<div
			id="topBackground"
			class={`bg-black bg-opacity-70 w-full fixed z-[60000] top-0 h-[40vh]`}
		/>

		<div
			id="bottomBackground"
			class={`bg-black bg-opacity-70 w-full fixed z-[50000] bottom-0 h-[40vh]`}
		/>
	{/if}

	<footer class="w-[95%] absolute hidden md:block border-t border-t-slate-200 bottom-10 pt-3">
		<p class="text-left">
			Powered by <span class="text-teal-500">Svelte</span> and
			<span class="text-teal-500">TailwindCSS</span>
		</p>
	</footer>
</div>
