<script lang="ts">
	import GradientBackground from '$lib/components/GradientBackground.svelte';
	import HomeArticle from '$lib/components/home/HomeArticle.svelte';
	import ContactBanner from '$lib/components/ContactBanner.svelte';
	import HomeHero from '$lib/components/home/HomeHero.svelte';
	import HomePoint from '$lib/components/home/HomePoint.svelte';
	import HomeQnA from '$lib/components/home/HomeQnA.svelte';
	import type { ArticleData, HomePointData } from '$lib/types';
	import { t } from 'svelte-i18n';

	let articles: ArticleData[] = [];
	$: homePoints = [
		{
			title: $t('home.points.why_title'),
			description: $t('home.points.why_text'),
			icon: 'images/icons/chart-line-up-regular-full.svg'
		},
		{
			title: $t('home.points.plan_title'),
			description: $t('home.points.plan_text'),
			icon: 'images/icons/clipboard-check-regular-full.svg'
		},
		{
			title: $t('home.points.experience_title'),
			description: $t('home.points.experience_text'),
			icon: 'images/icons/umbrella-beach-regular-full.svg'
		}
	];

	export let data: { homePoints: HomePointData[]; articles: ArticleData[] };

	({ articles } = data);
</script>

<div class="bg-base-100 flex w-full grow flex-col">
	<HomeHero />
	<GradientBackground>
		<div
			id="content"
			class="my-20 flex w-full flex-col items-center justify-center px-4 md:flex-row md:px-8 lg:px-16 xl:px-32 2xl:px-48"
		>
			{#each homePoints as data}
				<HomePoint {data} />
			{/each}
		</div>
	</GradientBackground>
	{#each articles as article, index}
		<HomeArticle {article} reverse={index % 2 === 1} />
	{/each}
	<ContactBanner />
	<HomeQnA />
</div>
