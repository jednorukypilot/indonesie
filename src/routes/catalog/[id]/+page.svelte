<script lang="ts">
	import type { PageData } from './$types';
	import { t } from 'svelte-i18n';
	import CatalogPoint from '$lib/components/catalog/CatalogPoint.svelte';
	import { CatalogPointType } from '$lib/enums';
	import Button from '$lib/components/Button.svelte';
	import { ButtonStyle } from '$lib/enums';
	import { page } from '$app/stores';

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

<div class="min-h-screen bg-gray-50">
	<!-- Hero Section -->
	<div class="relative h-[60vh] overflow-hidden">
		{#if catalogItem.imageSrc && catalogItem.imageSrc.length > 0}
			<picture class="h-full w-full">
				<source srcset={catalogItem.imageSrc[0]} />
				<img
					src={catalogItem.imageSrc[0]}
					alt={catalogItem.title}
					class="h-full w-full object-cover"
				/>
			</picture>
		{/if}
		<div class="bg-opacity-40 absolute inset-0 bg-black"></div>
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="text-center text-white">
				<h1 class="mb-4 font-serif text-4xl font-bold md:text-6xl">
					{catalogItem.title}
				</h1>
				{#if catalogItem.label}
					<span class="bg-primary inline-block rounded px-4 py-2 text-sm font-semibold text-white">
						{catalogItem.label}
					</span>
				{/if}
			</div>
		</div>
	</div>

	<!-- Content Section -->
	<div class="container mx-auto px-4 py-12">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
			<!-- Main Content -->
			<div class="lg:col-span-2">
				<div class="rounded-lg bg-white p-8 shadow-md">
					<h2 class="mb-6 text-2xl font-bold text-gray-900">
						{$t('catalog.detail.overview', { default: 'Overview' })}
					</h2>

					<div class="mb-8 space-y-4">
						{#each catalogItem.paragraphs as paragraph}
							<p class="text-lg leading-relaxed text-gray-700">{paragraph}</p>
						{/each}
					</div>

					<!-- Property Stats -->
					<div class="grid grid-cols-1 gap-6 rounded-lg bg-gray-50 p-6 md:grid-cols-3">
						<CatalogPoint type={CatalogPointType.AREA} number={catalogItem.area} />
						<CatalogPoint type={CatalogPointType.PLOT_COUNT} number={catalogItem.plotCount} />
						<CatalogPoint type={CatalogPointType.ESTATE_COUNT} number={catalogItem.estateCount} />
					</div>
				</div>
			</div>

			<!-- Sidebar -->
			<div class="lg:col-span-1">
				<div class="sticky top-8 rounded-lg bg-white p-8 shadow-md">
					<h3 class="mb-4 text-xl font-bold text-gray-900">
						{$t('catalog.detail.investment', { default: 'Investment Details' })}
					</h3>

					<div class="mb-6">
						<span class="mb-2 block text-sm text-gray-600">
							{$t('catalog.listings.min_investment', { default: 'Minimum Investment' })}
						</span>
						<span class="text-primary text-3xl font-bold">
							{investmentAmount}
						</span>
					</div>

					<div class="mb-8 space-y-4">
						<Button
							label={$t('catalog.detail.contact', { default: 'Contact Us' })}
							href="#contact"
							buttonStyle={ButtonStyle.PRIMARY}
						/>
						<Button
							label={$t('catalog.detail.brochure', { default: 'Download Brochure' })}
							href="/brochures/{catalogItem.id}.pdf"
							buttonStyle={ButtonStyle.SECONDARY}
						/>
					</div>

					<div class="text-sm text-gray-600">
						<p>
							{$t('catalog.detail.disclaimer', {
								default: 'Investment opportunities are subject to availability and approval.'
							})}
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Back to Catalog -->
		<div class="mt-12 text-center">
			<Button
				label={$t('catalog.detail.back', { default: 'Back to Catalog' })}
				href="/catalog"
				buttonStyle={ButtonStyle.GREEN}
			/>
		</div>
	</div>
</div>
