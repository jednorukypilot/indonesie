<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import type { CatalogData } from '$lib/types';

	export let catalogItem: CatalogData;
</script>

<div class="relative flex w-full flex-col items-center justify-center overflow-hidden">
	<Hero
		height={850}
		images={catalogItem.coverImg || {
			small: {
				'1x': '/images/pages/detail-property/hero.jpg',
				'2x': '/images/pages/detail-property/hero.jpg'
			},
			large: {
				'1x': '/images/pages/detail-property/hero.jpg',
				'2x': '/images/pages/detail-property/hero.jpg'
			}
		}}
	/>
	<div class="absolute inset-0 flex h-full w-full items-center justify-center bg-[#212529]/60 px-8">
		<slot />
	</div>
</div>
