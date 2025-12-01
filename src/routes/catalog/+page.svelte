<script lang="ts">
	import CatalogHero from '$lib/components/catalog/CatalogHero.svelte';
	import GradientBackground from '$lib/components/GradientBackground.svelte';
	import { t } from 'svelte-i18n';
	import type { PageData } from './$types';
	import CatalogListing from '$lib/components/catalog/CatalogListing.svelte';
	import ContactBanner from '$lib/components/ContactBanner.svelte';

	export let data: PageData;

	$: catalog = data.catalog;
</script>

<div class="bg-base-100 flex min-h-screen w-full grow flex-col">
	<CatalogHero />
	<GradientBackground>
		<div
			class="mx-4 my-20 flex w-full flex-col items-center justify-center text-center md:w-5/8"
			id="catalog-intro"
		>
			<h2 class="mb-8 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
				{$t('catalog.title.title')}
			</h2>
			<p class="mb-2 text-gray-700">
				{$t('catalog.title.subtitle')}
			</p>
		</div>
	</GradientBackground>
	{#each catalog as data, index}
		<CatalogListing {data} reverse={index % 2 === 1} />
	{/each}
	<ContactBanner
		title={$t('home.contact_banner.title')}
		text={$t('home.contact_banner.text')}
		buttonLabel={$t('home.contact_banner.button_label')}
	/>
</div>
