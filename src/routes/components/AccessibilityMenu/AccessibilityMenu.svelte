<script>
	import { ADHDMode } from '../../../store';

	const handleADHDMode = () => {
		ADHDMode.update((val) => !val);
	};

	import { cognitiveDissabilityMode } from '../../../store';
	import { addBordersForCognitive } from './cognitiveDissabilityMode';

	const handleCognitiveDisabilityMode = () => {
		cognitiveDissabilityMode.update((val) => !val);

		addBordersForCognitive($cognitiveDissabilityMode);
	};
</script>

<div
	id="accessibilityMenu"
	class="fixed bg-zinc-900 h-auto w-auto z-[1000000] p-5 border border-slate-700 bottom-24 left-0 md:bottom-auto md:top-16 md:left-20 flex flex-col gap-5 items-start rounded-md"
>
	<button
		on:click={handleADHDMode}
		id="ADHDHandler"
		class="text-[#F9794E] text-sm w-full h-auto text-left"
	>
		<span class={`${$ADHDMode === true && 'text-red-500 font-bold'}`}
			>{$ADHDMode === false ? 'ENABLE' : 'DISABLE'}</span
		> ADHD MODE
	</button>

	<button
		on:click={handleCognitiveDisabilityMode}
		id="CognitiveHandler"
		class="text-[#F9794E] text-sm w-full h-auto text-left"
	>
		<span class={`${$cognitiveDissabilityMode === true && 'text-red-500 font-bold'}`}
			>{$cognitiveDissabilityMode === false ? 'ENABLE' : 'DISABLE'}</span
		> COGNITIVE DISSABILITY MODE
	</button>
</div>
