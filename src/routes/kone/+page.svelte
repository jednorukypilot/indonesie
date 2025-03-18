<script lang="ts">
	import type { Device } from '$lib/types';

	let devices: Device[] = [
		{
			name: 'RTG',
			url: 'favicon.png',
			note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
		},
		{
			name: 'Ultrazvuk',
			url: 'favicon.png',
			note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
		},
		{
			name: 'Bruska na zuby',
			url: 'favicon.png',
			note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
		},
		{
			name: 'Endoskop',
			url: 'favicon.png',
			note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
		}
	];
</script>

<a class="bg-primary flex flex-row items-center gap-4 p-4" href="/">
	<img src="veterina_logo.svg" alt="veterina logo" class="h-16" />
	<h1 class="text-primary invisible text-center text-4xl font-medium">
		Terénní veterinární medicína koní
	</h1>
</a>
<div class="bg-primary flex grow flex-col items-center gap-24 px-16">
	<div class="my-4 w-[75rem] bg-white p-8">
		<h2 class="text-start text-2xl">
			Poskytujeme preventivní i akutní péči o koně. Vyjíždíme zejména v Praze a Středočeském kraji.
		</h2>
		<div class="bloc mt-8 flex w-full flex-wrap items-center justify-center gap-x-24 gap-y-8">
			{#each devices as device}
				<div class="flex flex-col items-center gap-4">
					<img src={device.url} alt={device.name} class="h-64 border-2" />
					<h3 class="text-center text-2xl font-bold">{device.name}</h3>
					<p class="max-w-80 text-center">{device.note}</p>
				</div>
			{/each}
		</div>
	</div>
	<div class="w-[75rem] bg-white p-4">
		<h2 class="text-start text-3xl font-bold">Lékaři</h2>
	</div>
</div>
