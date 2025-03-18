<script lang="ts">
	import type { Device } from '$lib/types';
	import { devices } from '../../routes/kone/data';

	let activeTab: number = $state(0);
</script>

<div class="flex h-110 flex-col rounded-md bg-white">
	<div class="flex flex-row gap-4">
		{#each devices as device, i}
			<button
				class="text-primary flex-grow cursor-pointer p-1 py-2 text-center text-lg font-medium hover:brightness-80"
				onclick={() => {
					activeTab = i;
				}}
			>
				<p class={i === activeTab ? 'border-primary border-b-2' : ' text-neutral'}>
					{device.name}
				</p>
			</button>
		{/each}
	</div>
	<div class="flex flex-col gap-4 px-8 py-4">
		<h2 class="text-start text-lg font-medium">{devices[activeTab].note}</h2>
		<img
			src={devices[activeTab].image}
			alt={devices[activeTab].name}
			class="border-neutral mb-4 w-full border-2"
		/>
	</div>
</div>
