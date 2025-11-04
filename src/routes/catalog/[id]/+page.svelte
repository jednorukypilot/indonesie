<script lang="ts">
	import type { PageData } from './$types';
	import { t } from 'svelte-i18n';
	import CatalogPoint from '$lib/components/catalog/CatalogPoint.svelte';
	import { CatalogPointType } from '$lib/enums';
	import Button from '$lib/components/Button.svelte';
	import { ButtonStyle } from '$lib/enums';
	import ListingHero from '$lib/components/listing/ListingHero.svelte';
	import ListingArticle from '$lib/components/listing/ListingArticle.svelte';

	export let data: PageData;

	$: catalogItem = data.catalogItem;
	$: investmentAmount = catalogItem.currency
		? `${(catalogItem.investment / 100).toString()} ${catalogItem.currency}`
		: catalogItem.investment.toLocaleString();
</script>

<svelte:head>
	<title>{catalogItem.title} - Catalog</title>
	<meta name="description" content={catalogItem.paragraphs[0] || ''} />
</svelte:head>

<div class="bg-base-100 flex min-h-screen w-full grow flex-col items-center">
	<ListingHero {catalogItem}>
		<div class="flex w-full flex-row items-center justify-center text-start text-white md:w-5/8">
			<div class="mr-12 flex w-full max-w-xl">
				<picture class=" w-full md:h-full md:overflow-hidden">
					<source srcset={catalogItem.imageSrc[0]} />
					<img
						src={catalogItem.imageSrc[0]}
						alt={'catalog_article'}
						class="h-[600px] w-full object-cover md:h-full md:w-min"
					/>
				</picture>
			</div>
			<div class="flex max-w-3xl flex-col items-start justify-center gap-6">
				<h1 class="mb-8 font-serif text-4xl font-bold md:text-6xl">{catalogItem.name}</h1>

				<span class="mb-2 text-lg">
					{$t('catalog.listings.min_investment')}
					<span class="text-primary font-bold">{investmentAmount}</span>
				</span>
				{#each catalogItem.paragraphs as paragraph}
					<p class="mb-4 text-lg">{paragraph}</p>
				{/each}
				<div class="my-5 flex w-full flex-row items-center justify-center gap-6 md:justify-start">
					<CatalogPoint type={CatalogPointType.AREA} style="light" number={catalogItem.area} />
					<CatalogPoint
						type={CatalogPointType.PLOT_COUNT}
						style="light"
						number={catalogItem.plotCount}
					/>
					<CatalogPoint
						type={CatalogPointType.ESTATE_COUNT}
						style="light"
						number={catalogItem.estateCount}
					/>
				</div>
				<Button
					buttonStyle={ButtonStyle.PRIMARY}
					label={$t('listing.interest_btn')}
					on:click={() => alert('Interest registered!')}
				/>
			</div>
		</div>
	</ListingHero>
	<ListingArticle article={catalogItem} reverse={true} />
	<ListingArticle article={catalogItem} reverse={false} />
</div>
