<script lang="ts">
	import type { MenuTile } from '../types';
	import { faPhone } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	let menuTiles: MenuTile[] = [
		{
			title: 'O nás',
			link: '/'
		},
		{
			title: 'Katalog pozemků',
			link: '/catalog'
		},
		{
			title: 'Kontakt',
			link: '/contact'
		}
	];
</script>

<div class="flex flex-col">
	<div class="bg-primary flex min-h-14 flex-row items-center justify-center p-4">
		<span class="text-center text-gray-100">
			Potřebujete poradit? Pomůžeme vám vybrat ten správný pozemek.
			<a href="tel:+420123456789" class="ml-2 underline"> +420 123 456 789 </a>
		</span>
	</div>
	<div
		class="flex min-h-[86px] flex-row items-center justify-center gap-4 border-b-2 bg-white px-4 py-2 md:gap-8"
	>
		<img src="images/logos/logo.svg" alt="logo" class="flex h-16" />
		<nav class="flex flex-row items-center justify-center p-2">
			{#each menuTiles as tile}
				<a href={tile.link} class="text-neutral-content mx-4 hover:underline">{tile.title}</a>
			{/each}
		</nav>
		<div class="flex flex-row items-center justify-center p-2">
			<FontAwesomeIcon icon={faPhone} class="text-secondary h-6" />
			<a href="tel:+420123456789" class="ml-2 underline"> +420 123 456 789 </a>
		</div>
	</div>
</div>
