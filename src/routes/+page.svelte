<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import SectionTile from '$lib/components/SectionTile.svelte';
	import type { Section } from '$lib/types';
	
	let pages: Section[] = [
		{
			name: 'KONĚ',
			name_short: 'KONĚ',
			color: '#005e3e',
			url: 'kone',
			styleId: 'bg-tile-horses',
			note: 'Terénní lékařství koní'
		},
		{
			name: 'ORDINACE MALÝCH ZVÍŘAT',
			name_short: 'ORDINACE',
			color: '#003e5e',
			url: 'ordinace',
			styleId: 'bg-tile-clinic',
			note: 'Náměstí Osvoboditelů 69/5a, 15300 Praha Radotín'
		}
	];
</script>

<div class="bg-base-100 grow flex w-full flex-col">
	<div class="m-4 flex flex-row items-center gap-4">
		<img src="veterina_logo_green.svg" alt="veterina logo" class="h-16" />
		<h1 class="text-primary text-center text-4xl font-bold">VETERINA RADOTÍN</h1>
	</div>

	<div class="flex grow flex-col items-center justify-center gap-24 px-16 lg:flex-row">
		{#each pages as page}
			<SectionTile {page} />
		{/each}
	</div>
</div>
