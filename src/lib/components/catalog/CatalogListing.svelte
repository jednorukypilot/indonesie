<script lang="ts">
	import type { CatalogData } from '$lib/types';
	import { t } from 'svelte-i18n';
	import CatalogPoint from './CatalogPoint.svelte';
	import { CatalogPointType } from '$lib/enums';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	export let data: CatalogData;
	export let reverse: boolean = false;

	$: investmentAmount = data.currency
		? `${(data.investment / 100).toString()} ${data.currency}`
		: data.investment.toLocaleString();

	function handleListingClick() {
		console.log(`Listing clicked: ${data.id}`);
		goto(`${base}/catalog/${data.id}`);
	}
</script>

<div class="relative flex h-[1000px] flex-col overflow-hidden md:h-[800px] lg:h-[600px]">
	{#if !reverse}
		<picture class="hidden h-full w-full md:inline">
			<source
				srcset={`${base}/images/pages/catalog/bg-property.jpg 1x, ${base}/images/pages/catalog/bg-property@2x.jpg 2x`}
			/>
			<img
				src="{base}/images/pages/catalog/bg-property.jpg"
				alt={'bg'}
				class="h-full w-full object-cover"
			/>
		</picture>
	{/if}

	<button
		class="absolute inset-0 flex cursor-pointer items-start justify-center bg-white/90"
		on:click={handleListingClick}
		on:keydown={handleListingClick}
	>
		<div
			class=" flex h-full w-full max-w-[1400px] flex-col-reverse items-center
				  justify-center md:w-7/8 md:justify-evenly {reverse
				? 'md:flex-row-reverse'
				: 'md:flex-row'} gap-4 xl:gap-12"
		>
			<div
				class="flex h-full w-full flex-col justify-evenly overflow-auto p-4 text-start text-gray-800 md:h-min md:w-1/2"
			>
				<h2 class="mb-4 font-serif text-3xl font-bold md:text-5xl lg:w-4/5">
					{data.title}
				</h2>
				<span class="mb-2 text-lg">
					{$t('catalog.listings.min_investment')}
					<span class="text-primary font-bold">{investmentAmount}</span>
				</span>
				{#each data.paragraphs as paragraph}
					<p class="mb-4 text-lg">{paragraph}</p>
				{/each}
				<div class=" mt-5 flex w-full flex-row items-center justify-center gap-6 md:justify-start">
					<CatalogPoint type={CatalogPointType.AREA} number={data.area} />
					<CatalogPoint type={CatalogPointType.PLOT_COUNT} number={data.plotCount} />
					<CatalogPoint type={CatalogPointType.ESTATE_COUNT} number={data.estateCount} />
				</div>
			</div>
			<div class="w-full md:flex md:h-full md:w-1/2 md:items-center md:justify-center">
				<picture class=" w-full md:h-full md:overflow-hidden">
					<source srcset={data.imageSrc[0]} />
					<img
						src={data.imageSrc[0]}
						alt={'catalog_article'}
						class="h-[600px] w-full object-cover md:h-full md:w-min"
					/>
				</picture>
			</div>
		</div>
	</button>
</div>
